const {Menu}=require('../models/SQL');
const dishItemImage = require('../models/MongoDB/dishItemImage');
exports.addMenu= async(req,res)=>{
    const {menuItemData}=req.body;
    const {item, courses, description, prize, restaurentId, available}=JSON.parse(menuItemData);
    console.log(item,courses,description);
    const file=req.file;
    if(!file){
        return res.status(401).json({error:'No file uploaded'});
    }
    try{
        const menu=await Menu.create({item,courses,description,prize,available,restaurentId});
        const base64Image=file.buffer.toString('base64');
        const image=new dishItemImage({menuId:menu.id,image:base64Image});
        await image.save();
        res.status(201).json({menu:menu,image:image});
    }catch(error){
        res.status(401).json({error:error.message});
    }
}