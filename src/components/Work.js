import React from 'react';
import Gachasphere from './subwork/Gachasphere';
// import BujoToGo from './subwork/BujoToGo';
// import Knitworthy from './subwork/Knitworthy';
// import OWS from './subwork/OWS';
// import ThisSite from './subwork/ThisSite';

function Work() {
    return (
        <section aria-label="Portfolio project descriptions" className="container_work" name="work">
            <h2 className="section_title">A Field of Implementation</h2>
            <Gachasphere />
            
            {/* <BujoToGo /> */}
            {/* <ThisSite /> */}
            {/* <Knitworthy /> */}
            {/* <OWS /> */}
        </section>
    )
}

export default Work;