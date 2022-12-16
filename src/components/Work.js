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
          
            <iframe
        width="42%"
        height="300"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1404100921&color=%232a4d57&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      
            <Gachasphere />
            
            {/* <BujoToGo /> */}
            {/* <ThisSite /> */}
            {/* <Knitworthy /> */}
            {/* <OWS /> */}
        </section>
    )
}

export default Work;