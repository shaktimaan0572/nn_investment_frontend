import React from 'react';

import './steps.css';
import img1 from '../../../Picture8.png';
import img2 from '../../../Pay.png';
import img3 from '../../../Picture9.png';


const Steps = props => {
    return (
        <div className="pageComponent" topmost="true" data-label="LANDING_PAGE.CREATE_AGREEMENT_STEPS" id="LANDING_PAGE.CREATE_AGREEMENT_STEPS" 
        style={{paddingBottom: '31px', paddingTop: '20px', background: 'rgb(128 128 128 / 5%)', paddingLeft:'20px', paddingRight:'20px'}}
        >
            <div className="pdWrap20">
                <div className="caption_subdued_small spacer8 bold textC">
                    JUST 3 SIMPLE STEPS
                </div>
                <h2 className="title_bold Ng800 spacer32 textC">To get you started
                </h2>
            </div>
            <div className="simpleSteps__stepswrap">
                <div className="simpleSteps__wd55">
                    <picture>
                        <source srcSet={img1} className="spacer16 objectFitContain" width={122} height={98} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title type="image/webp" />
                        <img src={img1} className="spacer16 objectFitContain" width={122} height={98} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title />
                    </picture>
                    <div>
                        <div className="list_header_semiBold Ng600 spacer10">01. Select the real-estate investment</div>
                        <div className="caption_subdued_large">Choose the property you want to invest in from the list of suitable investment options.</div>
                    </div></div><div className="simpleSteps__wd45">
                    {/* <picture>
        <source srcSet="https://www.99acres.com/universalapp/img/processLine.webp" width={80} height={80} style={{animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in'}} alt="" title type="image/webp" />
        <img src="https://www.99acres.com/universalapp/img/processLine.webp" width={80} height={80} style={{animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in'}} alt="" title />
        </picture> */}
                </div></div><div className="simpleSteps__stepswrap"><div className="simpleSteps__wd45 textC simpleSteps__imgRotate">
                    {/* <picture>
                <source srcSet="https://www.99acres.com/universalapp/img/processLine.webp" width={80} height={80} style={{animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in'}} alt="" title type="image/webp" />
                <img src="https://www.99acres.com/universalapp/img/processLine.webp" width={80} height={80} style={{animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in'}} alt="" title />
                </picture> */}

                </div><div className="textR simpleSteps__wd55"><picture><source srcSet={img2} className="spacer16 objectFitContain" width={98} height={112} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title type="image/webp" /><img src="https://www.99acres.com/universalapp/img/step2.webp" className="spacer16 objectFitContain" width={98} height={112} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title /></picture><div><div className="list_header_semiBold Ng600 spacer10 textR">02. Make Payment <br /></div><div className="caption_subdued_large textR">Review your details, preview your order &amp; make payment</div></div></div></div><div className="simpleSteps__stepswrap"><div className="simpleSteps__wd55"><picture><source srcSet={img3} className="spacer16 objectFitContain" width={122} height={120} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title type="image/webp" /><img src="https://www.99acres.com/universalapp/img/step3.webp" className="spacer16 objectFitContain" width={122} height={96} style={{ animationName: 'gracefulimage', animationDuration: '0.3s', animationIterationCount: 1, animationTimingFunction: 'ease-in' }} alt="" title /></picture><div><div className="list_header_semiBold Ng600 spacer10">03. Close a deal</div><div className="caption_subdued_large">Obtain a digitally signed automated contract between the investor and the investee after closing a deal.</div></div></div></div></div>
    )
};

export default Steps;

