// import './investment.css';
import React from 'react';
import  "./styles.css";
// import NnInvesData from './NnInvestmentTupleConstancts';

const onClick = e => {
  e.stopPropagation();
  window.open("/investmentDescription", '_self'); // srp URL
}

const NnInvestmentTuple = (props) => {
   
    return (
      <div style={{margin:'10px 0px'}}>
      <div className={"propshare-property-description"}>
        <div className={"info-header-wrapper"}>
          <div className={"info"}>
            <h5 className={"title"}>{props.title}</h5>
            <p className={"subtitle"} style={{paddingLeft:'0px'}}>
              {/* <i className='iconS_poi_16 icon_rlgs'/> */}
              {props.subtitle}</p>
            <div className={"propshare-property-badge-content"}>
              <div className={"propshare-property-badge"} Style={{backgroundColor: '#24C7EC'}}>
                <div className={"propshare-property-badge-sub"} Style={{color: '#24C7EC'}} />
                <p className={"propshare-property-badge-text"}>
                  Fully Funded
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"property-image property_default_badge_wrapper"}>
          <a className href="https://www.propertyshare.in/commercial-properties/bangalore/embassy-business-hub">
            <img className={"prop-card-img"} src={props.src} alt="embassy business hub bangalore 1 list" />
          </a>
        </div>
        <div className={"info-body"}>
          <div className={"live-property-highlights-wrapper js-card-highlists-slider slick-initialized slick-slider"}><div className={"slick-list"}><div className="slick-track" Style={{opacity: 1, width: '0px'}} /></div></div>
          <div className={"info-content"}>
            <div className={"title"}>Area</div>
            <div className={"value"}>{props.area}
              <sup>SF</sup>
            </div>
          </div>
          <div className={"info-content"}>
            <div className={"title"}>Price psf</div>
            <div className={"value"}>{props.price}</div>
          </div>
          <div className={"info-content"}>
            <div className={"title"}>Yield</div>
            <div className={"value"}>{props.yield}</div>
          </div>
          <div className={"info-content"}>
            <div className={"title"}>Return Target</div>
            <div className={"value"}>{props.target}</div>
          </div>
        </div>
        <div className={"info-footer-wrapper"}>
          <div className={"propshare-action-btn"}>
              <button type="button" className={"btn-primary"} onClick={onClick}>View Opportunity</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NnInvestmentTuple;