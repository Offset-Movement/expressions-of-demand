import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as ExternalLink } from '../../images/external-link.svg';

function ThisSite() {
    return (
        <div id="this" className="this-subWork">
            <h3 className="subwork_title--primary">Advertising</h3>
            <h4 className="subwork_title--secondary">Less dependency on prediction</h4>
            <p className="subwork_text">
             As is, digital advertising is heavily relying on consumer data.
            </p>
            {/* <span className="subwork_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/Portfolio2.0" target="_blank" rel="noreferrer"><Github id="ThisSiteGithub" aria-label="open Github repository for this site in a new tab" focusable="true" className="work_icon"/></a>
            </span> */}
        </div>
    )
}

export default ThisSite;