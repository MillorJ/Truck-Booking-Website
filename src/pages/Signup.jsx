import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../lib/api";

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        address: '',
        contact: '',
        email: '',
        password: ''
    })

  const navigate = useNavigate();

  const handleInput = (e) => {
      setValues(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async(e) => {
      e.preventDefault()
      await Api().post('register', values)
      .then(response => console.log(response))
      .catch(error => console.error(error));
      alert('Account Created!')
      navigate('/login')
  }

  return (

    
    <div
      className="bg-dark d-flex-column align-content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="container position-absolute rounded border pt-5 pb-3 px-5 text-white"
        data-bs-theme="dark"
        style={{
          width: "33rem",
          top: "50%",
          transform: "translate(-50%,-50%)",
          left: "50%",
        }}
      >
        <h2 className="">Sign up</h2>
        <p className="">Please fill in the form to create an account!</p>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="firstName" className="mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="address" className="mb-2">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="inputEmail" className="mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="contactNumber" className="mb-2">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Contact Number"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row form-row pt-3">
          <div className="form-group">
            <label htmlFor="inputPassword" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="d-flex justify-content-start pt-3">
          <button type="submit" className="btn btn-danger w-100" onClick={handleSubmit}>
            Sign up
          </button>
        </div>

        <hr />

        <div className="mb-0">
          <p className="fs-6">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              <span>Login!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
