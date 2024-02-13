import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "example" && password.trim() === "example") {
      navigate("/");
      sessionStorage.setItem("user", username);
      setLoginError(false);
    } else {
      console.error("Login failed. Please enter both username and password.");
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-login-container__form">
        <div className="title">Giriş</div>
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label>Kullanıcı Adı </label>
              <input
                type="text"
                name="username"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label>Şifre </label>
              <input
                type="password"
                name="pass"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="button-container" onClick={handleLogin}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
