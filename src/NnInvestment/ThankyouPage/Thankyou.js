import React, { useEffect, useState } from 'react';
import './thankyou.css'

const onClick = e => {
    e.stopPropagation();
    window.open("/", '_self'); // srp URL
  }

const Thankyou = () => {
  let investmentAmount=localStorage.getItem('investmentAmount');

  return (
    <div
    className="prptyDetailMob__successPage pageComponent"
    data-label="PAYMENT_SUCCESS"
    id="PAYMENT_SUCCESS"
    topmost="true"
    style={{marginTop:'50px'}}
  >
    <div
      className="textC pageComponent"
      data-label="PAYMENT_SUCCESS.PAYMENT_SUCCESS_BANNER"
      topmost="true"
    >
      <i className="iconS_Common_48 icon_greenTickBg" />
      <div className="spacer16" />
      <div className="title_bold spacer8 textC">Transaction Successful</div>
      <div className="caption_strong_medium textC">
        Your order is being processed and you will be allocated the fund soon.
      </div>
    </div>
    <div className="spacer32" />
    <div className="list_header_semiBold Ng800">Your Order Details</div>
    <div className="caption_subdued_medium">
      also sent to your registered email id
    </div>
    <div
      data-label="PAYMENT_SUCCESS.ORDER_DETAIL"
      id="PAYMENT_SUCCESS.ORDER_DETAIL"
      className="prptyDetailMob__amountCol pageComponent"
      topmost="true"
    >
      <div>
        <div>Order ID</div>
        <div>ID-XXXXXXX</div>
      </div>
      <div>
        <div>Purchase Date</div>
        <div>28th Sep 2022</div>
      </div>
      <div>
        <div>Investments</div>
        <div>₹ {investmentAmount}</div>
      </div>
      <div>
        <div>Charges</div>
        <div>₹ 150</div>
      </div>
      <div>
        <div>Total Amount paid</div>
        <div>₹ {+investmentAmount+150}</div>
      </div>
      {/* <div>
        <div>Order Placed By</div>
        <div>XXXXXX</div>
      </div> */}
    </div>
    <div className="spacer16" />
    <div style={{marginTop:'20px'}} className={"info-footer-wrapper"}>
          <div className={"propshare-action-btn"}>
              <button style={{marginLeft:0, marginRight:0, width:'100%'}} type="button" className={"btn-primary"} style={{width:'90%'}} onClick={onClick}>Back To Homepage</button>
          </div>
        </div>
    {/* <div className="list_header_semiBold Ng800 spacer10">Delivered to</div> */}
    
  </div>
  
   )
}
export default Thankyou;