import React, { useEffect, useState } from 'react';

import styles from './banner.css';
// import propShare from '../../../realestate-crowdfunding.jpg';
// import { useHistory } from "react-router-dom";
import banner from '../../../real_estate_crowdfunding.png';


const list = ['Accessible', 'Data Driven', 'Transparent'];

const onClick = e => {
    e.stopPropagation();
    window.open("/searchInvestment", '_self'); // srp URL
}

const Banner = props => {
    const [text, updateText] = useState(list[0]);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index >= list.length) {
                index = 0;
                updateText(list[index]);
            } else {
                updateText(list[index++]);
            }
        }, 2000);
    }, []);

    return (
        <div style={{paddingBottom: '31px', paddingTop: '20px', background: '#80808017'}} className={styles.cont}>
            <h1>Welcome to the future of real-estate investments</h1>
            <h2><span>A one-stop shop for diversified real estate investments</span></h2>
            <div className={styles.img} style={{marginBottom:'20px'}}>
                <img
                    style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    objectFit: 'contain'
                }}
                    src={banner}
                    height="230"
                    width="345"
                />
            </div>
            <button onClick={onClick}>
                Explore Opportunities
            </button>
        </div>
    );
};

export default Banner;
