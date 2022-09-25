import Style from "./PdStyle.css";
import Card from "./Card";
import Reports from "./Reports";
import TenantDetails from "./TenantDetails";
// import Buttons from '../../../designSystem/atoms/Buttons/buttons';
import PropertyPricing from "./PropertyPricing";
import Header from '../invest-in-property-online/components/Header/Header';

import LocationHighlights from './LocationHighlights';
import './port.css'

const Pd = ()=>{
    return (
      <>
      <Header />
        <div style={{backgroundColor:'#8080801c', paddingBottom:'20px'}} className={Style["container-fluid body-content-wrapper"]}>
          <div className={Style["mobile-property-info-wrapper"]}>
          <div className="col-sm-12 col-12 no-padding">
        <div className="details-announcement-bar">
          <p className="title">Enhanced yield of 1% for Pre-book investors</p>
        </div>
      </div>

            <div className={Style["property-image-block"]}>
              <div className={Style["property-image-slider-popup-wrapper hide"]}>
                <div className={Style["popup-main-image-wrapper"]}>
                  <div className={Style["property-main-image"]}>
                    <img className="prod-img" src="https://propmedia2.propertyshare.in/website/property/M2psRzRmUUZsc2F0SFhUYkxoOHRLUT09/media-v2/images/main/665x400/1654068901-embassy-business-hub-bangalore-1.jpg" alt="Embassy Business Hub Yelahanka hero }}"  style={{width:'100%'}}/>
                  </div>

                </div>
               
                <div className="popup-close-btn">
                  <img className="cancel-img" alt="Close" src="https://media1.propertyshare.in/images/svg/close-btn.svg" />
                </div>
              </div>
              <Card/>
              <div style={{width:'100%',padding:'10px'}}>
              {/* <Buttons
                    type="button"
                    variant="primaryRegular"
                    fontStyle="semi"
                    as="a"
                    href=""
                    style={{width:'100%'}}>
                    <span>Invest Now</span>
                </Buttons> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col-12">
                <TenantDetails/>
                <PropertyPricing/>
                <LocationHighlights/>
              </div>
              <div className="col-lg-4 col-sm-12 col-12">
                <div className="about-us-section">
                  <div className="wrapper-title about-us-section-title">
                    <h4>Investment Overview</h4>
                  </div>
                  <div className="about-property-wrapeer">
                    <div className="content">
                      <p>
                        There is a unique opportunity to purchase 174,497 sf in Embassy Business Hub, Bangalore, tenanted to Philips at an all-in price of Rs. 143,00,00,000 (Rs. 7,450 per sf) implying a 10.00% yield and 18.8% IRR for eligible investors.<br />
                        <br />
                        Embassy Business Hub (Phase I) is a 0.65 million sf Grade A+ project with B + G + 13 floors on the International Airport Road and is purpose built for Philips India.<br />
                        <br />
                        We believe this is a unique opportunity to acquire a leased Grade A asset with a 5 year lock-in and a blue chip tenant.
                      </p>
                    </div>
                    {/* <div className="read-more-wrapper">
                      <a className="propshare-link propshare-text-underline-effect" href="JavaScript:void(0);">Read More</a>
                    </div> */}
                  </div>
                </div>
                {/* <div className="propshare-key-updates-wrapper">
                  <div className="wrapper-title">
                    <h4>Key Updates</h4>
                  </div>
                  <div className="key-updates-wrapper">
                    <div className="row">
                      <div className="col-md-2 col-2">
                        <div className="key-updates-line-wrapper">
                          <div className="updates-line-wrapper">
                            <div className="key-background background-active">
                              <div className="background-wrapper">
                              </div>
                            </div>
                            <div className="key-background background-active">
                              <div className="background-wrapper">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 col-10 no-padding">
                        <div className="key-updates-info-wrapper">
                          <div className="info-wrapper">
                            <p className="date-info">04-Mar-2022</p>
                            <p className="textInfo">Term Sheet Signed</p>
                          </div>
                          <div className="info-wrapper">
                            <p className="date-info">14-Mar-2022</p>
                            <p className="textInfo">Listing Live</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <Reports/> */}
              </div>
            </div>
            <button style={{marginTop:'20px'}}>
                Invest Now
            </button>
          </div>
        </div>
        </>
      );
}

export default Pd;