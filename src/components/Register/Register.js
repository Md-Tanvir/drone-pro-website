import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2>Register Here</h2>
            <input
              placeholder="Enter your name"
              className="form-control mb-4"
              type="text"
              name="name"
              onBlur={handleOnChange}
              required
            />
            <input
              placeholder="Enter your email"
              className="form-control mb-4"
              type="email"
              name="email"
              onBlur={handleOnChange}
              required
            />
            <input
              type="password"
              name="password"
              onBlur={handleOnChange}
              placeholder="Enter your password"
              className="form-control mb-4"
              required
            />

            <button className="btn btn-success" type="submit">
              Register
            </button>
            <div className="mx-auto" style={{ maxWidth: "350px" }}>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Created successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </div>
          </form>

          <h6 className="my-3 text-center">
            Already Registered? <Link to="/login">Login</Link>
          </h6>
          <div class="text-center mb-5">
            <button
              className="btn btn-danger mx-auto"
              onClick={handleGoogleSignIn}
            >
              <i className="fab fa-google"></i> Google Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
