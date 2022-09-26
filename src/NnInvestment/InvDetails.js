import "./invDetails.css"

const InvDetails = () => {
  return (
    <>
      <div style={{ fontSize: '16px', fontWeight: '600', height: '40px', marginLeft: '20px' }}>
        <h4 style={{fontWeight:'bold'}}>Tenant Details</h4>
      </div>
      <div id="tenancy" className={Style["property-tenants-wrapper"]} style={{ padding: '10px', background: 'white', margin: '0 20px' }}>

        <div className={Style["tenants-wrapper-slider slick-initialized slick-slider"]}><div className={Style["slick-list draggable"]}><div className={Style["slick-track"]} style={{ opacity: 1, width: '330px', transform: 'translate3d(0px, 0px, 0px)' }}><div className={Style["slick-slide slick-current slick-active"]} data-slick-index={0} aria-hidden="false" style={{ width: '330px' }}><div><div className="tenants-wrapper" style={{ width: '100%', display: 'inline-block' }}>
          <div className={Style["tenants-name-wrapper"]}>
            <div className={Style["row"]}>
              <div className={Style["col-md-5 col-12"]}>
                <div className={Style["wrapper"]}>
                  <p className={Style["label"]}
                    style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}
                  >
                    Name</p>
                  <p className={Style["content"]} style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}>Deepak Kumar</p>
                </div>
              </div>
              <div className={Style["col-md-4 col-12"]}>
                <div className={Style["wrapper"]}>
                  <p className={Style["label"]}
                    // style={{margin:'10px',color:'grey'}}
                    style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}

                  >Country</p>
                  <p className={Style["content"]}
                    style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}
                  >Netherlands</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style["tenants-description-wrapper"]}>
            <div className={Style["row"]}>
              <div className={Style["col-md-12 col-12"]}>
                <div className={Style["wrapper"]}>
                  <p className={Style["label"]}
                    style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}

                  >

                    Description</p>
                  <p className={Style["content"]}
                    // style={{margin:'10px'}}
                    style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}
                  >Global major in electronics and health technology</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style["tenants-time-period-wrapper"]}>
            <p className={Style["label"]}
              // style={{margin:'10px',color:'grey'}}
              style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}

            >Time Period</p>
            <div className={Style["row"]}>
              <div style={{ display: 'flex', margin: '10px' }}>
                <div className={Style["col-md-4 col-12"]}>
                  <div className={Style["wrapper mb-line-wrapper"]}>
                    <div className={Style["image"]}>
                      <img src="https://media1.propertyshare.in/images/article-time-icon.svg" />
                    </div>
                    <div className={Style["wrapper-content border-line"]} >
                      <p className={Style["title"]} style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}
                      >Lease Start Date</p>
                      <p className={Style["subtitle"]} style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}
                      >01 Apr 2023</p>
                    </div>
                  </div>
                </div>
                <div className={Style["col-md-4 col-12"]}>
                  <div className={Style["wrapper mb-line-wrapper"]}>
                    <div className={Style["image lock-in"]}>
                      <img src="https://media1.propertyshare.in/images/fund-raised.svg" />
                    </div>
                    <div className={Style["wrapper-content border-line"]} >
                      <p className={Style["title"]} style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}
                      >Lock-in Period</p>
                      <p className={Style["subtitle"]} style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}
                      >5 YEARS</p>
                    </div>
                  </div>
                </div>
                <div className={Style["col-md-4 col-12"]}>
                  <div className={Style["wrapper"]}>
                    <div className={Style["image"]}>
                      <img src="https://media1.propertyshare.in/images/article-time-icon.svg" />
                    </div>
                    <div className={Style["wrapper-content"]}>
                      <p className={Style["title"]} style={{ margin: '10px', color: 'grey', fontSize: '13px', color: '#000', opacity: '.6', marginBottom: '0' }}
                      >Lease End Date</p>
                      <p className={Style["subtitle"]} style={{ margin: '10px', fontWeight: 'bold', fontSize: '13px' }}
                      >01 Apr 2038</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div></div></div></div></div>
      </div>
    </>
  )
}
export default InvDetails;