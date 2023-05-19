import React from "react";
import logo1 from "./../images/logo1.png";
import logo2 from "./../images/logo2.png";
import "./RD.css";

export default function RD() {
  return (
    <div>
      <div className="receive-donate-heading">
        <h1>DONATE AND RECEIVE</h1>
      </div>
      <div className="receive-donate">
        <div className="donate-button">
          <button>
            <img src={logo1} alt="..." />
          </button>
        </div>
        <div className="receive-button">
          <button>
            <img src={logo2} alt="..." />
          </button>
        </div>
      </div>
    </div>
  );
}
