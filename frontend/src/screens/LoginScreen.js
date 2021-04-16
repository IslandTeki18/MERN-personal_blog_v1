import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {

    const submitHandler = ( ) => {
        console.log("User Logged In")
    }
  return (
    <>
      <div className="containter my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-5">Sign In</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="emailInput">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p className="mt-3">Don't have an account? <Link to="/registration">Sign up</Link> here!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
