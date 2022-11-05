import React from "react";
// import { ReactComponent as JSLogo } from "../images/javascript.svg";
// import { ReactComponent as PythonLogo } from "../images/python.svg";
// import { ReactComponent as HTMLLogo } from "../images/html.svg";
// import { ReactComponent as CSSLogo } from "../images/css3.svg";
// import { ReactComponent as NodeLogo } from "../images/node.svg";
// import { ReactComponent as ReactLogo } from "../images/react.svg";
// import { ReactComponent as ReduxLogo } from "../images/redux.svg";
// import { ReactComponent as PostgreSQLLogo } from "../images/postgresql.svg";

function About() {
  return (
    <section aria-labelledby="about" className="container_about">
      <h2 id="about" className="section_title">
        Definition:
      </h2>
      <div className="subAbout">
     
        <p className="about_text" style={{textAlign:"start"}} >
          In its broadest sense, an expression of demand, is an equaliser
          phenomenon for capacity planning that enables a future-oriented
          exposition of an arbitrary request, optionally with an on-air* time
          set, and is opinionated, yet not necessarily a definitive one and can be
          revoked any point in time.**
          <br></br><br></br>
          * demand, on-air: eg. due date,
          duration of validity .. 
          <br></br>
          * * revokable: semi-promise, not binding yet can impact
          reputation
        </p>
        {/* <div className="container_skills-icon">
          <JSLogo className="skills-icon" focusable="false" />
          <PythonLogo className="skills-icon" focusable="false" />
          <HTMLLogo className="skills-icon" focusaXble="false" />
          <CSSLogo className="skills-icon" focusable="false" />
          <NodeLogo className="skills-icon" focusable="false" />
          <ReactLogo className="skills-icon" focusable="false" />
          <ReduxLogo className="skills-icon" focusable="false" />
          <PostgreSQLLogo className="skills-icon" focusable="false" />
        </div> */}
      </div>
    </section>
  );
}

export default About;
