import React, { useState } from "react";
import "./Login.css";
import { useUser } from "../Auth/UserManagement";
function Login ({setChange}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUserData}=useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData('1');
  };

  return (
    <div className="card-body">
      <h3 className="card-title text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-light w-100" onClick={()=>setChange()}>Sign Up</button>
          </div>
        
        </div>
      </form>
    </div>
  );
};

export default Login;
