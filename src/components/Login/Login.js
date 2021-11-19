import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

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
    loginUser(loginData.email, loginData.password, location, history);
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
            <h2>Login Here</h2>
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
              Login
            </button>
            <div className="mx-auto" style={{ maxWidth: "350px" }}>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </div>
          </form>

          <h6 className="my-3 text-center">
            Are you new? <Link to="/register">Register Here</Link>
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

export default Login;
