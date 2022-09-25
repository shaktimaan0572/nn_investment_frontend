import React, { useEffect, useState } from 'react';
import './style.css'
import propShare from '../../../realestate-crowdfunding.jpg';

const onClick = e => {
    e.stopPropagation();
    window.open("/investorPortfolio", '_self'); // srp URL
}

const WhatIs = props => {

    return (
        <div style={{paddingTop:'20px', paddingBottom:'20px'}}>
            {/* <h1>Welcome to the future of real-estate investments</h1>
            <h2><span>A one-stop shop for diversified real estate investments</span></h2> */}
            <div>
            <div className="pdWrap20">
                {/* <div className="caption_subdued_small spacer8 bold textC">
                    JUST 3 SIMPLE STEPS
                </div> */}
                <h2 className="title_bold Ng800 spacer32 textC">What is real estate crowdfunding?
                </h2>
                <h2 style={{padding: "0 20px"}}><span>Real estate crowdfunding allows real estate companies to raise funds from a wide range of investors. </span>
           </h2>
            </div>
                <img
                    src={propShare}
                    height="300"
                    width="345"
                />
            </div>
        <h2>
            <ul>
                <li>Crowdfunding allows builders to access capital without going through traditional channels</li>
                <li>investors to become shareholders in a real estate property.</li>
            </ul>
            </h2>
            <button onClick={onClick}>
                Access Portfolio
            </button>
            {/* <button className={styles.btnStyle} onClick={onClick} className={styles.btn}>
                Explore Opportunities
            </button> */}
        </div>
    );
};

export default WhatIs;
