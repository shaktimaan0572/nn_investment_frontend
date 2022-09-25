import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Banner from './components/Banner/index';
// import Heatmap from './components/Heatmap';
// import Footer from '../../../components/Search/mobile/revamp/Footer';
// import Comparison from './components/comparison';
// import Referral from './components/Referral';
// import Article from './components/Article';
import Steps from './components/Steps';
// import Why99Acres from './components/Why99acres';
import Disclaimer from './components/Disclaimer';
import WhatIs from './components/WhatIs';
import FAQ from './components/FAQ'
// import GlobalReducer from '../../../reducer/reducer';
// import hamburgerState from '../../../components/common/mobile/Hamburger/redux/reducer';
// import header from '../../../components/common/desktop/Revamp/Header/redux/reducer';
// import headerReducer from '../../../components/common/mobile/MobileHeader/redux/reducer';
// import userState from '../../../components/common/desktop/LoginRegisterWidget/reducer';
// import GdprReducer from '../../../components/gdpr/services/GdprReducer';
// import ownerPreference from '../capture-response-thank-you/reducer';
// import home from '../../../pages/HomePage/mobile/redux';

// import { getTestimonialData } from '../../HomePage/mobile/serverActionCreator';

const InvestOnline = () => (
  <Fragment>
    <Header />
    <Banner />
    <WhatIs />
    <Steps />
    <FAQ />
    {/* <Why99Acres /> */}
    {/* <Heatmap /> */}
    {/* <Comparison /> */}
    {/* <Referral /> */}
    {/* <FeedbackCardContainer title="Testimonials" cta="" /> */}
    {/* <Article /> */}
    <Disclaimer />
    {/* <Footer /> */}
  </Fragment>
);
// InvestOnline.initialAction = (obj = {}) => dispatch => [dispatch(getTestimonialData(obj))];
// export const reducers = {
//   global: GlobalReducer,
//   hamburgerState,
//   header,
//   headerReducer,
//   userState,
//   GdprReducer,
//   ownerPreference,
//   home,
// };
// export const staticReducers = { ...reducers, };
// export const pageType = "ownerPreference";
// export const trackingLabel = "OWNER_PREFERENCE";
export default InvestOnline;