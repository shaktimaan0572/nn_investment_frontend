import React from "react";
import { useState } from "react";
import DropDown from './dropdown';

const InvestmentReturns = (props) => {
    const {
        investmentDetails: {
            totalInvestment= "",
            investmentBreakup: {
                monthly= {},
                yearly= {}
            }={}
        },
    }=props;

    const [typeMode, setTypeMode] = useState(true);
    const [showdropdown,setShowDropDown]=useState(false);

    return (
        <div id="models" className="property-investment-model-wrapper">
            <div className="property-investment-returns-wrapper">
                <div className="wrapper-title">
                    <h4>Investment Returns</h4>
                </div>
                <div className="investment-amount-info">
                    <div className="row">
                        <div className="col-md-3 col-12 mb-title-wrapper">
                            <span className="title">Investment Amount</span>
                        </div>
                        <div className="col-md-3 col-12 no-padding">
                            <form action="javascript:void(0)" id="6324e11aef463">
                                <div className="row wrapper">
                                    <div className="col-md-2 col-2 text-center no-padding border-right">
                                        <div className="rupee-block" style={{ padding: '10px 20px' }}>
                                            <span className="rupee">₹</span>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-10 text-left border-right">
                                        <div className="amount-block">
                                            <div className="amount">
                                                <input type="text" disabled data-error-ele="#errorBlock-6324e11aef469" data-dynamic-ele="cash-flow-dynamic" data-minamount={396000000} data-maxamount={396000000} className="investAmount js-investment-amount-input ignore-success" data-property-price={396000000} data-rental-yield="7.7" data-monthly-gross-rent={2786465} data-finalcial-investment={396000000} defaultValue={totalInvestment} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="error-validation-container hide" id="errorBlock-6324e11aef469">
                                    <label id="-error" className="error propshare-input-error-msg" htmlFor>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cash-flow-model-accordion" className="propshare-modal-cash-flow-wrapper">
                <div className="monthly-cash-flow-wrapper" role="tablist" aria-multiselectable="true">
                    <div className="propshare-accordion-wrapper">
                        <div className="propshare-accordion-header" role="tab" id="headingOne">
                            <div className="modal-accordion">
                                <div className="row">
                                    <div className="col-md-3 col-10">
                                        <div className="dropdown propshare-link-dropdown propshare-cash-flow-dropdown">
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {typeMode && <span className="dropdown-item cashflowOption" onClick={()=>setShowDropDown(true)}>Monthly Cash Flow<span style={{margin:'10px'}}>v</span></span>}
                                                {!typeMode && <span className="dropdown-item cashflowOption" onClick={()=>setShowDropDown(true)}>Yearly Cash Flow<span style={{margin:'10px'}}>v</span></span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cash-flow-model" data-taxcheck={0} className="propshare-accordion-content collapse show" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{}}>
                            <div className="wrapper-content">
                                <div className="col-md-12 col-12">
                                    {showdropdown && <DropDown setTypeMode={setTypeMode} setShowDropDown={setShowDropDown}/>}
                                    {typeMode && <div className="row cash-flow-container monthly_cash_flow_wrapper">
                                        <div id="rentBlock" className="cash_flow_wrapper no-padding" style={{ width: '24%' }}>
                                            <div className="monthly-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">Monthly Rent</p>
                                                <p className="content dynamic_monthy_rent_flow cash-flow-dynamic"><span className="number">{monthly?.rentAmt}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div id="managementBlock" className="cash_flow_wrapper no-padding" style={{ width: '38%' }}>
                                            <div className="processing-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">Property Management Fee</p>
                                                <p className="content dynamic_monthly_management_fee cash-flow-dynamic"><span className="number">{monthly?.propMgmtFee}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div id="taxBlock" className="cash_flow_wrapper no-padding" style={{ width: '38%' }}>
                                            <div className=" income-tax-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">10% TDS</p>
                                                <p className="content dynamic_monthly_tds cash-flow-dynamic"> <span className="number">{monthly?.tax}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                    {!typeMode && <div className="row hide cash-flow-container yearly_cash_flow_wrapper">
                                        <div id="yearlyRentBlock" className="cash_flow_wrapper no-padding" style={{ width: '24%' }}>
                                            <div className="monthly-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">Yearly Rent</p>
                                                <p className="content dynamic_yearly_rent_flow cash-flow-dynamic"> <span className="number">{yearly?.rentAmt}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div id="yearlyManagementBlock" className="cash_flow_wrapper no-padding" style={{ width: '38%' }}>
                                            <div className="processing-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">Property Management Fee</p>
                                                <p className="content dynamic_yearly_management_fee cash-flow-dynamic"> <span className="number">{yearly?.propMgmtFee}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div id="yearlyTaxBlock" className="cash_flow_wrapper no-padding" style={{ width: '38%' }}>
                                            <div className=" income-tax-wrapper" />
                                            <div className="wrapper">
                                                <p className="title">10% TDS</p>
                                                <p className="content dynamic_yearly_tds cash-flow-dynamic"><span className="number">{yearly?.tax}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentReturns;