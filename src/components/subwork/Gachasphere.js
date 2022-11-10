import React from "react";
// import Gachagif from '../../images/gachasphereMobile.gif';
// import { ReactComponent as Chrome } from "../../images/chrome.svg";
// import { ReactComponent as Github } from "../../images/github.svg";
import ProactiveElectors from "../../images/eod-top-img.png"
function Gachasphere() {
  return (
    <div id="gachasphere" className="subWork">
      <h3 className="subwork_title--primary" style={{ paddingTop: "32px" }}>
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "6px",
            fontStyle: "italic",
            fontSize:"24px",
            paddingRight: "2px"
            
          }}
        >
          Politics and Diplomacy <br></br>
          <br></br>
         
            {" "}
            Case: Proactive electorship for Peacemaking{" "}
        </span>
      </h3>
      {/* <h4 className="subwork_title--secondary">
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            fontStyle: "italic",
          }:
        >
         
        </span>
      </h4> */}

      <img src={ProactiveElectors} className="subwork_image" alt="proactive electors"></img>
      <p className="subwork_text" style={{ textAlign: "start" }}>
        Voters/electors demand a change, without appealing to, or specifying a
        particular political party. At the initiation of the demand flow, voters
        give equal chances to all, as generously as possible.
        <br></br> <br></br>
        {/* <i>
          Assuming what citizens wanted in the first place is an observable
          progress on an arbitrary cause/policy, or new ones to be given
          capacity, more than which party/parties delivering that is of their
          concern.
        </i>
        <br></br> <br></br> */}
        In essence, they expose and clarify their intentions in single or
        multi-levels *, meaning one or two elections ahead of time, for any
        specific topic that they wish to see developments in a positive
        direction.
        <br></br> <br></br>
        This is, hereby, an expressed expectation for reflections to their
        opinionated perspective and worldview; an individual change
        request/proposal of a kind, with 
         {" "}
        <span
          style={{
            backgroundColor: "yellow",
            color: "black",
            // padding: "2px",
            fontStyle: "italic",
          }}
        > 
        potential civic sanctions </span>
          
          
          made observable at level II.
        <br></br>
        <br></br>
        Illustrated below, is an example, an individual’s demand for global trust
        and peacemaking:
        {/* In the first exposition, inclusion of change,
        thereby a token of intention is demanded, and in the second level,
        exposition of a future time decision is made, this time, binding for
        those parties elected upon those voters' support. They are sincerely
        expected to keep their promises, and observed in time, knowing that
        voters' future support is somewhat depending on their actions on those
        matters. */}
        <br></br>
        <br></br>
        <span style={{ backgroundColor: "black", color: "white" }}>I:</span> I
        demand political parties to include "ultimate peace and trust making
        with other member states in the United Nations", in their political
        agendas and electoral promises.
        <span
          style={{
            backgroundColor: "pink",
            color: "black",
            padding: "2px",
            fontStyle: "italic",
          }}
        >
          {" "}
          I will <u> (most) probably vote for one of those parties </u> in the first
          election ahead.
        </span>
        <br></br>
        <br></br>
        <span style={{ backgroundColor: "black", color: "white" }}>II:</span> If
        one of those parties elected in the next election, and kept their word
        on making observable effort and impact for this cause, World Peace, then{" "}
        <span
          style={{
            backgroundColor: "pink",
            color: "black",
            padding: "2px",
            fontStyle: "italic",
          }}
        >
          {" "}
          I will <u> (most) definitely vote for them (again).</u></span>

        <span
          style={{
            backgroundColor: "yellow",
            color: "black",
            padding: "2px",
            fontStyle: "italic",
          }}
        > {" "}
          Otherwise, I
          will (most probably) not going to vote for them (again) in the following
          election(s), until my trust is re-established by them via their 
          efforts on supporting this cause better;
        </span> either as a party re-elected without my vote, or as a party of opposition, before an upcoming electoral period.

        <br></br>
        <br></br>
        <span style={{ backgroundColor: "black", color: "white" }}>
          III:
        </span>{" "}
        In the meantime, as I am a potential candidate in a future election, and
        have the equal right to be an electoral nominee to become an executive
        person with such signature power; I will proactively co-sign and be part of a sealing of a World Peace treaty with other
        individuals and states in the world, as they exposed/expressed their
        intentions in space-time.
       
      </p>
    </div>
  );
}

export default Gachasphere;
