import React from "react";

const LoginScreen = () => {

    const submitHandler = ( ) => {
        console.log("User Logged In")
    }
  return (
    <>
      <div className="containter">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
