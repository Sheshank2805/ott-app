import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationScreen.css";
import { UserContext } from "./UserContext";
function RegistrationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const validateForm = () => {
    if (!name || !email || !password || !passwordConfirmation || !agreeTerms) {
      setError("All fields are required.");
      return false;
    }

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return false;
    }

    setError(null);
    return true;
  };

  const signUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addUser({ name, email, password });
      navigate("/signin");
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  return (
    <div className="signupScreen">
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
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password again"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <span>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
        </span>
        <span>
          <h4>
            <span className="gray">I agree with</span>
            <span> terms and conditions</span>
          </h4>
        </span>
        {error && <p className="error-message">{error}</p>}
        <button type="sumbit" onClick={signUp}>
          Sign Up
        </button>

        <h4>
          <span className="signupScreen_gray">Already using Netflix?</span>
          <span className="signupScreen_link" onClick={signIn}>
            Sign in now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default RegistrationScreen;
