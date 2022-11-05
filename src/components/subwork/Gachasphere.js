import React from "react";
// import Gachagif from '../../images/gachasphereMobile.gif';
import { ReactComponent as Chrome } from "../../images/chrome.svg";
import { ReactComponent as Github } from "../../images/github.svg";

function Gachasphere() {
  return (
    <div id="gachasphere" className="subWork">
      <h3 className="subwork_title--primary" style={{ paddingTop: "32px" }}>
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px",
            fontStyle: "italic",
          }}
        >
          Politics and Diplomacy
        </span>
      </h3>
      <h4 className="subwork_title--secondary">
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            fontStyle: "italic",
          }}
        >
          Proactive electorship & peacemaking
        </span>
      </h4>
      <p className="subwork_text" style={{ textAlign: "start" }}>
        A voter/elector demands a change, without specifying or appealing to a
        specific political party, <br></br><br></br> They expose and clarify their intentions in
        single or multi levels, meaning one election or two ahead of time, for any specific topic that they wish to see changed within their lifetimes. 
        <br></br><br></br>
        As an example, for global trust and peacemaking is
        illustrated below:
        {/* In the first exposition, inclusion of change,
        thereby a token of intention is demanded, and in the second level,
        exposition of a future time decision is made, this time, binding for
        those parties elected upon those voters' support. They are sincerely
        expected to keep their promises, and observed in time, knowing that
        voters' future support is somewhat depending on their actions on those
        matters. */}
        <br></br>
        <br></br>
        <span style={{backgroundColor: "black", color: "white"}}>I:</span> {" "}
       I demand political parties that includes peacemaking with other member states in the United Nations to their political agendas and electoral promises. 
      
       <span style={{backgroundColor: "pink", color: "black", padding:"2px", fontStyle:"italic"}}>I will <u> (most) probably vote for  one of them </u> in the next election.</span>
        <br></br><br></br>
        <span style={{backgroundColor: "black", color: "white", }}>II:</span> {" "} 
       If one of those parties elected in the next election, and kept their word on making observable effort and impact on that cause, then   <span style={{backgroundColor: "pink", color: "black", padding:"2px", fontStyle:"italic"}}> I will <u>definitely vote for them</u> in the following election(s). </span>
      </p>
    </div>
  );
}

export default Gachasphere;
