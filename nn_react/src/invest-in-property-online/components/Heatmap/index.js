import React from 'react';

import style from './heatmap.css';

const Heatmap = props => {
    return (
        <div className={style.cont}>
            <div className={style.heading}>Heatmap Analytics</div>
            <div className={style.sub}>Visualize appreciation and renting yield of a selected location across different property types, where green colour code symbolizes good returns and red symbolizes bad returns on the heatmap.</div>
            <div className={style.img}>
                <img src='https://aasthy.com/static/media/HeatmapMobileImage.c2df229b.png' />
            </div>
        </div>
    )
};

export default Heatmap;
