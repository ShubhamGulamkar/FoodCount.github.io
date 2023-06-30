import React, { useState } from "react";
import "../css/Signin-Signup.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  var [newUser, setNewUser] = useState({
    empid: "",
    ename: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (event) => {
    console.log("in handle change");
    const { name, value } = event.target;
    setNewUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      empid: newUser.empid,
      ename: newUser.ename,
      email: newUser.email,
      password: newUser.password,
      mobile: newUser.mobile,
    };
    console.log(obj);
    try {
      const resp = await axios.post(
        "https://foodcount1.onrender.com/api/users/signup",
        obj
      );
      console.log(resp.data);
      console.log(resp.status);
      swal("Account Has been created");
      navigate("/");
    } catch (error) {
      console.log("maybe problem in Signin page data");
    }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h1 style={{ padding: "5px" }}>Register</h1>
        <form className="register-form">
          <div className="input-row">
            <label className="label-text" htmlFor="name">
              Name
            </label>
            <input
              className="input-text"
              value={newUser.ename}
              name="ename"
              onChange={handleChange}
              id="ename"
              placeholder="Name"
            />
          </div>
          <div className="input-row">
            <label className="label-text" htmlFor="Employee ID">
              Employee ID
            </label>
            <input
              className="input-text"
              value={newUser.empid}
              onChange={handleChange}
              placeholder="Empid"
              id="empid"
              name="empid"
            />
          </div>
          <div className="input-row">
            <label className="label-text" htmlFor="email">
              Email
            </label>
            <input
              className="input-text"
              value={newUser.email}
              onChange={handleChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className="input-row">
            <label className="label-text" htmlFor="Mobile">
              Mobile No
            </label>
            <input
              className="input-text"
              value={newUser.mobile}
              onChange={handleChange}
              //type=""
              placeholder="Mobile No."
              id="mobile"
              name="mobile"
            />
          </div>
          <div className="input-row">
            <label className="label-text" htmlFor="password">
              Password
            </label>
            <input
              className="input-text"
              value={newUser.password}
              onChange={handleChange}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
          <br />

          <button className="button1" type="submit" onClick={submitHandler}>
            Sign Up
          </button>
        </form>
        <br />
        <a href="/" className="link">
          Already have an account? Login here.
        </a>
      </div>
    </div>
  );
};
export default Register;
