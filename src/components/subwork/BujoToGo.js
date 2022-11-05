import React from "react";
// import { ReactComponent as Chrome } from "../../images/chrome.svg";
// import { ReactComponent as Github } from "../../images/github.svg";
// import Bujogif from "../../images/BujoToGo.gif";
import ClarityByEquality from "../../images/clarity-by-equality.png";

function BujoToGo() {
  return (
    <div id="BujoToGo" className="subWork">
      <h3 className="subwork_title--primary">Capacity Planning</h3>
      {/* <h4 className="subwork_title--secondary">Prosumer-Prosumer Era</h4> */}
      <img
        alt="capacity planning"
        src={ClarityByEquality}
        className="about_headshot"
      />
      {/* <img className="subwork_image" src={Bujogif} alt="BujoToGo walkthrough"/> */}
      <p className="subwork_text" style={{marginTop: "20px"}}>
        asdasd
      </p>
      {/* <span className="subwork_links">
        <a
          className="link-new-tab"
          href="https://github.com/abbeyperini/BujoToGo"
          target="_blank"
          rel="noreferrer"
        >
          <Github
            id="BujoToGoGithub"
            aria-label="open BujoToGo Github repository in a new tab"
            focusable="true"
            className="work_icon"
          />
        </a>
      </span> */}
    </div>
  );
}

export default BujoToGo;
