import React from 'react';
// import Gachagif from '../../images/gachasphereMobile.gif';
import { ReactComponent as Chrome } from '../../images/chrome.svg';
import { ReactComponent as Github } from '../../images/github.svg';


function Gachasphere() {
    return (

        
        <div id="gachasphere" className="subWork" style={{maxWidth: "80%"}}>
            <h3 className="subwork_title--primary">Politics</h3>
            <h4 className="subwork_title--secondary">Proactive electorship</h4>
            {/* <img id="gachaGif" className="subwork_image" src={Gachagif} alt="Gachasphere mobile walkthrough"/> */}
            <p className="subwork_text">In this case, via exposing a demand, voters gain power. We demand in an effective and future-manifesting way, firmly.</p>
            {/* <span className="subwork_links">
                <a className="link-new-tab" href="https://github.com/brodri4/Gachasphere-client" target="_blank" rel="noreferrer"><Github id="GachasphereGithub" aria-label="open Gachasphere Github repository in a new tab" focusable="true" className="work_icon"/></a>
                <a className="link-new-tab" href="http://gachasphere.surge.sh/" target="_blank" rel="noreferrer"><Chrome id="GachasphereChrome" aria-label="open Gachasphere website in a new tab" focusable="true" className="work_icon"/></a>
            </span> */}
        </div>
    )
}

export default Gachasphere;