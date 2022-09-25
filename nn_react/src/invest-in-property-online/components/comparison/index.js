import React from 'react';

import style from './comparison.css';

const Comparison = props => {
    return (
        <div className={style.cont}>
            <div className={style.heading}>99acres vs. Other Options</div>
            <div className={style.sub}>Through 99acres, you can invest in assets that lie between low risk - low return options like Fixed Deposits, and high risk - high return options like Digital Currencies.</div>
            <div className={style.img}>
                <img src='https://aasthy.com/static/media/CompareSection.37aceaca.png' />
            </div>
        </div>
    )
};

export default Comparison;
