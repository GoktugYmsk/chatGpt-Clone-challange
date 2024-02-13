import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosLogOut } from "react-icons/io";

import "./index.scss";

function Header() {
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate();

  const getUserName = sessionStorage.getItem("user");

  useEffect(() => {
    const getLogin = sessionStorage.getItem("user");
    if (getLogin) {
      setIslogin(true);
    }
  }, []);

  const handleLogoutClick = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="container-header">
      {isLogin ? (
        <div className="container-header__name">
          <p>{getUserName}</p>
          <IoIosLogOut onClick={handleLogoutClick} className="icon" />
        </div>
      ) : (
        <p onClick={() => navigate("/login")} className="login-message">
          Giriş Yap
        </p>
      )}
    </div>
  );
}

export default Header;
