import React from "react";
import "./_Logo.scss";
import LogoImage from "../../assets/logo-white.png";

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={LogoImage} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
