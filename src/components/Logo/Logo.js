import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logo1 from "./independer-icon.svg"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img style={{maxHeight: 250}} alt='logo' src={logo1} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
