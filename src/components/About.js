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
    <section
      aria-labelledby="about"
      className="container_about"
      style={{ backgroundColor: "orange" }}
    >
      <h2 id="about" className="section_title" style={{ color: "black" }}>
        A Definition:
      </h2>
      <div className="subAbout">
        <p className="about_text" style={{ textAlign: "start" }}>
          <strong>An Expression of Demand,</strong> is a novel approach; a
          clarity maker method for demand forecasting and capacity planning,
          through progressively adding constants and future-observables to the
          fields, that are (so far) highly dependent on predictions.
          <br></br>
          <br></br>
          Imagined to be utilised through enabling a declarative,
          future-oriented exposition of a request; being opinionated and
          effective on setting the terms of "consumption", yet not necessarily a
          definitive one and can be revoked at any point in time*, (optionally)
          expressed along with a duration of validity** attached to it.
          <br></br>
          <br></br>
          -------
          <br></br>
          <br></br>
          <strong>* revokable:</strong> demands are much like semi-promises,
          not binding however, can impact demanders' reputation in time.
          <br></br>
          <br></br>
          <strong>** duration of validity:</strong>a time distance between time
          of demand, to a a point in future, aka. time-stand | demand on-air
          period.
          <br></br>
          <br></br>
          -------
          <br></br>
          <i>
            Expression of Demand, somehow inspired by{" "}
            <a
              href="https://www.teachertoolkit.co.uk/2019/05/26/the-consequences-model/"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ backgroundColor: "black", color: "white" }}>
                The Consequences Model,
              </span>{" "}
            </a>{" "}
            shared by the Danish organisation theorists Kristian Kreiner and
            Soren Christensen, "encouraging us to be courageous, and make
            decisions based on minimal information.", from The Decision Book.
            <br></br> <br></br>
            {""}
            <a
              href="https://www.teachertoolkit.co.uk/wp-content/uploads/2019/05/Screenshot-2019-05-26-at-18.59.26.png"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {">> "}model's visual is here.{" <<"}
            </a>
            <br></br>
            <a
              href="https://soundcloud.com/atyilmaz/the-consequences-model"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {">> "}reading from book, here{" <<"}
            </a>
          </i>
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
