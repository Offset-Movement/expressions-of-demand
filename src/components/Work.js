import React from 'react';
import Gachasphere from './subwork/Gachasphere';
import BujoToGo from './subwork/BujoToGo';
import Knitworthy from './subwork/Knitworthy';
import OWS from './subwork/OWS';
import ThisSite from './subwork/ThisSite';

function Work() {
    return (
        <section aria-label="Portfolio project descriptions" className="container_work" name="work">
            <h2 className="section_title">Fields of Implementation</h2>
            <BujoToGo />
            <Gachasphere />
            <ThisSite />
            {/* <Knitworthy /> */}
            {/* <OWS /> */}
        </section>
    )
}

export default Work;