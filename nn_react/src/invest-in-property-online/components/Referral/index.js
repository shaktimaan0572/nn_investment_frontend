import React from 'react';

import style from './referral.css';

const Referral = props => {
    return (
        <div className={style.cont}>
            <span className={style.title}>Invite your Friends and <span style={{ color: 'rgb(108, 51, 129)'}}>earn 1%</span> of their investments.</span>
            <span className={style.desc}>You also earn 0.5%, 0.25% and so on for every further referral of your referral.</span>
            <button className={style.btn}>Refer and Earn</button>
        </div>
    );
};

export default Referral;
