import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router/Switch';
import PortFolioPage from './NnInvestment/PortfolioPage';
import Pd from './NnInvestment/Pd'
import InvestOnline from './invest-in-property-online';
import NnInvestment from './NnInvestment';
import Payment from './NnInvestment/payment';
import Thankyou from './NnInvestment/ThankyouPage/Thankyou';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<InvestOnline />} />
        <Route path="/searchInvestment" element={<NnInvestment />} /> 
        <Route path="/investmentDescription*" element={<Pd />} />
        <Route path="/investorPortfolio" element={<PortFolioPage />} />
        <Route path="/payment-summary-details" element={<Payment />} />
        <Route path="/thankyoupage" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
