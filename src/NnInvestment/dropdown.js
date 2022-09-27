import React from "react";

const dropdown = (props) => {

    return (
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton" style={{ position: 'absolute', transform: 'translate3d(0px, 34px, 0px)', top: '0px', left: '0px', willChange: 'transform',background:'white',boxShadow:'0 2px 3px 0 #d8d8d8',marginTop:'-63px',marginLeft:'14px' }} x-placement="bottom-start">
            <span className="dropdown-item cashflowOption" onClick={()=>{props.setTypeMode(true); props.setShowDropDown(false)}}>Monthly Cash Flow</span>
            <span className="dropdown-item cashflowOption" onClick={()=>{props.setTypeMode(false); props.setShowDropDown(false)}}>Yearly Cash Flow</span>
        </div>
    )
}

export default dropdown;