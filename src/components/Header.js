import React from "react";
import "../styles/App.css";
import "../styles/landingBackground.css";
import { ReactComponent as Arrow } from "../images/arrow.svg";

function Header(props) {
  const handleOnClick = () => {
    props.hideHeader();
  };

  return (
    <header>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="header_text">
        <h1 className="header_name">Expressions of Demand</h1><br></br>
        <h2 className="header_title">
          {/* Please welcome,  the age of <br></br>Prosumer {"<=>"} Prosumer<br></br>{" "} */}
          aka. <br></br>
          <strong><i> Clarity through equality</i>
            </strong> 
            <br></br>            <br></br>

        </h2>
        <button className="header_button" onClick={handleOnClick}>
          check it out
          <Arrow className="button_arrow" focusable="false" />
        </button>
      </div>
    </header>
  );
}

export default Header;
