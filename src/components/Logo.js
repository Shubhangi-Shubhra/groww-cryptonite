import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo-3.png";
import Switcher from "./Switcher";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="absolute top-[1.5rem] left-[1.5rem] text-lg text-cyan flex items-center"
        style={{ textDecoration: "none" }}
      >
        <img src={logoSvg} alt="CryptoBucks" style={{ width: "130px", height: "100px", marginRight: "5px" }} />
        
      </Link>
      <div className="absolute top-[1.5rem] right-[1.5rem]">
        <Switcher /> {/* Place Switcher component here */}
      </div>
    </div>
  );
};

export default Logo;
