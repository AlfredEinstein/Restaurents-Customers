import React, { useState } from "react";

function Signup({setChange}) {
  const [RestaurentData, setRestaurentData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurentData({
      ...RestaurentData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-body">
      <h3 className="card-title text-center">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="RestaurentName" className="form-label">
            Restaurent Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Restaurent name"
            name="name"
            id="Name"
            value={RestaurentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="RestaurentPhoneNumber" className="form-label">
            Restaurent Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            placeholder="+91"
            id="Name"
            value={RestaurentData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Restaurent Email"
            className="form-control"
            name="email"
            id="email"
            value={RestaurentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control"
            id="password"
            value={RestaurentData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-light w-100" onClick={()=>setChange()}>Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
