import Style from "./PdStyle.css";
import './cardStyle.css'
const Card =()=>{
    return (

      <div className={Style["propshare-property-description"]}>
      <div style={{padding:'20px', margin:'0 20px'}} className="propshare-property-description propshare-property-open">
        <div className="info-header-wrapper">
          <div className="info">
            <h5 className="title" style={{fontWeight:'bold'}}>Embassy Business Hub</h5>
            <p className="subtitle">Bangalore, India</p>
            <div className="propshare-property-badge-content">
              <div className="propshare-property-badge" style={{backgroundColor: '#12C76D'}}>
                <div className="propshare-property-badge-sub" style={{color: '#12C76D'}} />
                <p className="propshare-property-badge-text ">
                  Pre Book
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="property-investment-body">
          <div className="row investment-highlights-wrapper">
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738431-preston-uk-leveraged.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">9%</p>
                  <p className="subtitle">HIGH CASH-ON-CASH YIELD</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738431-preston-uk-high returns.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">18.2% IRR</p>
                  <p className="subtitle">HIGH RETURNS</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia1.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738432-preston-uk-attractive price.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">Rs 79.3 psf</p>
                  <p className="subtitle">ATTRACTIVE PRICE</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738432-preston-uk-location.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">AAA UK</p>
                  <p className="subtitle">LOCATION</p>
                </div>
              </div>
            </div>
          </div>
          <p className="info-note-small">Min. Investment Rs25 thousand</p>
        </div>
      </div>
    </div>
      );
}

export default Card;