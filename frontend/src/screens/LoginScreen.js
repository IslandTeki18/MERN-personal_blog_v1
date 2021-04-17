import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const submitHandler = () => {
        console.log("User Logged In");
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mb-5">Sign In</h1>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter email here..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Enter password here..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                    <p className="mt-5">
                        Don't have an account?{" "}
                        <Link to="/registration">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
