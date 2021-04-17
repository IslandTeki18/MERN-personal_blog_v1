import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Account Created!");
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h5 className="text-muted">Signup for free</h5>
                        <h1 className="mb-2">Create an Account</h1>
                        <p className="mb-5">
                            Already have an account?{" "}
                            <Link to="login">Sign In</Link>
                        </p>
                        <form submit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="firstNameInput">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstNameInput"
                                    placeholder="Enter your first name..."
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastNameInput"
                                    placeholder="Enter your last name..."
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Enter your email..."
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
                                    placeholder="Enter your password..."
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationScreen;
