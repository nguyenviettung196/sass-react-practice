import React from "react";
import ButtonWhite from "../../components/button-white/ButtonWhite";
import HeadingPrimary from "../../components/heading-primary/HeadingPrimary";
import Logo from "../../components/logo/Logo";
import "./_Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <HeadingPrimary mainText="Outdoors" subText="is where life happens">
        <ButtonWhite
          text="Discover tour"
          color={`white`}
        
        />
      </HeadingPrimary>
    </div>
  );
};

export default Header;
