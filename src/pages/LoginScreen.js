import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleGetStartedClick = () => {
    if (emailRegex.test(email)) {
      <Link to="/signin"></Link>;
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <Link to="/signin">
          <button className="loginScreen_button">Sign In</button>
        </Link>

        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        <h1>Unlimited films, TV programs, and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="loginScreen_input">
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailRegex.test(email) ? (
              <Link to="/signin">
                <button
                  onClick={handleGetStartedClick}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </Link>
            ) : (
              <button onClick={() => alert("Please enter a valid email")}>
                Get Started
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
