import Style from "./PdStyle.css";
import Card from "./Card";
import Reports from "./Reports";
import TenantDetails from "./TenantDetails";
import { useState,useEffect } from "react";
// import Buttons from '../../../designSystem/atoms/Buttons/buttons';
import PropertyPricing from "./PropertyPricing";
import Header from '../invest-in-property-online/components/Header/Header';
import InvestmentReturns from './InvestmentReturns'
import LocationHighlights from './LocationHighlights';
import './port.css'

const Pd = ()=>{
  const [pdData, setPdData] = useState({});

  useEffect(() => {
      const id=window.location.href.split('-')[4];
      const url = `https://nn-investment-service.herokuapp.com/nnInvestment/listing?listingId=${id}`;
      fetch(url, {
          method: "GET",
          credentials: 'same-origin',
      }).then(res => res.json())
          .then((data) => {
              console.log("data",data)
              setPdData(data)
          })
          .catch((err) => console.log(err));
  }, []);

    const {
      propertyName="",
      address="",
      area="",
      pricePerSqFt="",
      // yield="",
      roi= "",
      propStatus='',
      images= [],
      listingDetails : { propInvestMentDetails: { financialDetails = {},  minimumInvestment= "" ,maximumInvestment=""} = {} , investmentOverview = "", tenantDetails : { propertyPricing = {}, locationHighlights = {} } = {} } = {}
    } = pdData;
    const {listingDetails : { tenantDetails={},investmentDetails={} }={}}=pdData;
    console.log("lisisis")

    const investNowHandle =(e)=>{
      e.stopPropagation();
      const id=window.location.href.split('-')[4];
      const url = `https://nn-investment-service.herokuapp.com/nnInvestment/listing/response/${id}`;
      fetch(url, {
          method: "PUT",
          credentials: 'same-origin',
      }).then(res => res.json())
          .then((data) => {
            console.log("succesfully invested")
          })
          .catch((err) => console.log(err));
      window.open(`/payment-summary-details`, '_self'); // srp URL
      
    }

    return (
      <>
      <Header />
        <div style={{backgroundColor:'#8080801c', paddingBottom:'20px'}} className={Style["container-fluid body-content-wrapper"]}>
          <div className={Style["mobile-property-info-wrapper"]}>
          <div className="col-sm-12 col-12 no-padding">
        {/* <div className="details-announcement-bar">
          <p className="title">Enhanced yield of 1% for Pre-book investors</p>
        </div> */}
      </div>

            <div className={Style["property-image-block"]}>
              <div className={Style["property-image-slider-popup-wrapper hide"]}>
                <div className={Style["popup-main-image-wrapper"]}>
                  <div className={Style["property-main-image"]}>
                    <img className="prod-img" src={images[0]} alt="Embassy Business Hub Yelahanka hero }}"  style={{width:'100%'}}/>
                  </div>

                </div>
                <div style={{height:'20px'}} />
              </div>
              <Card propertyName={propertyName} address={address} rentalYield={financialDetails?.rentalYield} returns={financialDetails?.returns} attractivePrice={financialDetails?.attractivePrice} location={financialDetails?.location} minimumInvestment={minimumInvestment} propStatus={propStatus} maximumInvestment={maximumInvestment}/>
              {/* <div style={{width:'100%',padding:'10px'}}>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col-12">
                <InvestmentReturns investmentDetails={investmentDetails} financialDetails={financialDetails}/>
                <TenantDetails tenantDetails={tenantDetails}/>
                <PropertyPricing propertyPricing={propertyPricing} investmentDetails={investmentDetails}/>
                <LocationHighlights locationHighlights={locationHighlights}/>
              </div>
              <div className="col-lg-4 col-sm-12 col-12">
                <div className="about-us-section">
                  <div className="wrapper-title about-us-section-title">
                    <h4>Investment Overview</h4>
                  </div>
                  <div className="about-property-wrapeer">
                    <div className="content" style={{minHeight:'auto'}}>
                      <p>
                        {/* There is a unique opportunity to purchase 174,497 sf in Embassy Business Hub, Bangalore, tenanted to Philips at an all-in price of Rs. 143,00,00,000 (Rs. 7,450 per sf) implying a 10.00% yield and 18.8% IRR for eligible investors.<br />
                        <br />
                        Embassy Business Hub (Phase I) is a 0.65 million sf Grade A+ project with B + G + 13 floors on the International Airport Road and is purpose built for Philips India.<br />
                        <br />
                        We believe this is a unique opportunity to acquire a leased Grade A asset with a 5 year lock-in and a blue chip tenant. */}
                        {investmentOverview.description}
                      </p>
                    </div>
                    {/* <div className="read-more-wrapper">
                      <a className="propshare-link propshare-text-underline-effect" href="JavaScript:void(0);">Read More</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
            <button style={{marginTop:'20px'}} onClick={investNowHandle}>
                Invest Now
            </button>
            </div>
          </div>
        </div>
        </>
      );
}

export default Pd;