import React, { useState } from "react";
import "./AuthPage.css";
import Login from "../Inc/Login";
import Signup from "../Inc/Signup";
import { useUser } from "../Auth/UserManagement";
import { Button } from "bootstrap";
function AuthPage() {
  const [login, setLogin] = useState(true);
  const {user,setLogOut}=useUser();
  const handleToggle = () => {
    setLogin(!login);
  };
  const handleLogout=()=>{
    console.log(user);
    setLogOut();
  };
  return (
    user?(<div><h3>welcome</h3><button onClick={()=>handleLogout()}>logout</button></div>):(<div className="container page">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div
            className="card mt-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            {login ? (
              <Login setChange={handleToggle} />
            ) : (
              <Signup setChange={handleToggle} />
            )}
          </div>
        </div>
      </div>
    </div>)
    
  );
}

export default AuthPage;
