import React from 'react';

import './why.css'
const Why99Acres = props => {
    return (
<div className="container">
        <section className="home-propshare-info-wrapper">
          <div className="col-lg-12 col-sm-12">
            <h2 className="section-title">Why Property Share</h2>
            <p className="propshare-proxinova-large-heading section-description">Property Share is run by professionals with &gt;$1 bn of institutional investment experience across 33 mn sf.</p>
          </div>
          <div className="row mobile-whypropshare-captital-wrapper">
            <div className="col-6 col-sm-4 offset-sm-2">
              <div className="home-propshare-sphare-wrapper">
                <img className="funnel_mobile_img" src="https://media1.propertyshare.in/images/svg/mobile_funnel.svg" alt="Why Property Share Section" />
              </div>
            </div>
            <div className="col-6 col-sm-3 no-padding">
              <div className="mobile-homesphare-description-wrapper">
                <div id="hundred-description" className="description-wrapper first-block">
                  <hr />
                  <h3 className="title">Stringent Criteria
                  </h3>
                </div>
                <div id="fifty-description" className="description-wrapper second-block">
                  <hr />
                  <h3 className="title">Rigorous Due-Diligence</h3>
                </div>
                <div id="twenty-five-description" className="description-wrapper third-block">
                  <hr />
                  <h3 className="title">
                    <span>Institutional</span>
                    <span>Analysis</span>
                  </h3>
                </div>
                <div id="five-description" className="description-wrapper fourth-block">
                  <hr />
                  <h3 className="title">High Listing Standards</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="action_cta_wrapper">
            <div className="btn_wrapper">
              <div className="btn_block">
                <a href="javascript:void(0);" onclick="goToSignUpPopUp(1)">
                  <button type="button" className="btn btn-link signup_wrapper">Get Started</button>
                </a>
              </div>
              <div className="btn_block">
                <a href="https://www.propertyshare.in/commercial-properties">
                  <button type="button" className="btn btn-secondary">View Opportunities</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Why99Acres;
