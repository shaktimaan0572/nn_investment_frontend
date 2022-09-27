import Style from "./PdStyle.css";
import './cardStyle.css'
const Card =(props)=>{
    const { propertyName ,address, rentalYield, returns, attractivePrice, location ,minimumInvestment,propStatus,maximumInvestment}=props;

    return (

      <div className={Style["propshare-property-description"]}>
      <div style={{padding:'20px', margin:'0 20px'}} className="propshare-property-description propshare-property-open">
        <div className="info-header-wrapper">
          <div className="info">
            <h5 className="title" style={{fontWeight:'bold'}}>{propertyName}</h5>
            <p className="subtitle">{address}</p>
            <div className="propshare-property-badge-content">
              <div className="propshare-property-badge" style={{backgroundColor: '#12C76D'}}>
                <div className="propshare-property-badge-sub" style={{color: '#12C76D'}} />
                <p className="propshare-property-badge-text ">
                  {propStatus}
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
                  <p className="title">{rentalYield?.value}</p>
                  <p className="subtitle">{rentalYield?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738431-preston-uk-high returns.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">{returns?.value} IRR</p>
                  <p className="subtitle">{returns?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia1.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738432-preston-uk-attractive price.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">{attractivePrice?.value} psf</p>
                  <p className="subtitle">{attractivePrice?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 column highlights-block">
              <div className="highlights-wrapper">
                <div className="icon-wrapper">
                  <img src="https://propmedia2.propertyshare.in/website/property/T29DcmkzY1BtREQvTnlYVnl6cnZCdz09/media-v2/dashboardhighlight/default/1663738432-preston-uk-location.svg" />
                </div>
                <div className="highlights-info">
                  <p className="title">{location?.value}</p>
                  <p className="subtitle">{location?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="info-note-small">Min. Investment {minimumInvestment}</p>
          <p className="info-note-small">Max. Investment {maximumInvestment}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;