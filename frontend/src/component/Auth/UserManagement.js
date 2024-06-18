import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserManagement = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const storedUserData=localStorage.getItem('userData');
    return storedUserData?JSON.parse(storedUserData):null;
  });
  const setLogOut=()=>{
    localStorage.removeItem('userData');
    setUser(null);
  }
  const setUserData=async(user)=>{
    
    if(user){
        setUser(user);
        console.log("adf");
        localStorage.setItem('userData',user)
    }
  }
  return (
    <UserContext.Provider value={{ user, setUserData, setLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser=()=>{
    const {user,setUserData,setLogOut}=useContext(UserContext);
    return {user,setUserData,setLogOut};
};

