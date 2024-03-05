import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInScreen.css";
import { UserContext } from "./UserContext";
import { useContext } from "react";
function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const register = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      navigate("/home");
    } else {
      navigate("/signup");
    }
  };
  const signIn = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      navigate("/home");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="signinScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient" />
      </div>
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix?</span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
