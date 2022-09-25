import React from "react";
// import NudgesListRevamp from "../../../Search/mobile/revamp/Nudges/NudgesListRevamp";
// import Nudges from "../../../Search/revamp/Nudges/Nudges";
import NnInvestmentTuple from "./NnInvestmentTuple";
// import TagAndChips from '../../../designSystem/atoms/Tags&Chips/tags-and-chips';
// import Pd from "./Pd";
// import Card from "./Card"
import NnInvesData from './NnInvestmentTupleConstancts';
import Header from "../invest-in-property-online/components/Header/Header";
import './main.css'
export default ()=>{
    return (
        <>
        <Header />
        <div data-label topmost className="rn__nudgeWrapper undefined" id="nudgesList"><div data-label="CATEGORY" className="
            tags-and-chips__textOnly
            undefined
            
            
            pageComponent 
            
            
            
            
            
            
            
            
          pageComponent" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo><span className="tags-and-chips__badgeParent " /><span>&gt;7%</span></div><div data-label="CATEGORY" className="
            tags-and-chips__textOnly
            undefined
            
            
            pageComponent 
            
            
            
            
            
            
            
            
          pageComponent" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo><span className="tags-and-chips__badgeParent " /><span>Safe Investment</span></div><div data-label="CATEGORY" className="
            tags-and-chips__textOnly
            undefined
            
            
            pageComponent 
            
            
            
            
            
            
            
            
          pageComponent" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo><span className="tags-and-chips__badgeParent " /><span>Popular</span></div></div>
            {NnInvesData.map((item,index)=>{
            return <NnInvestmentTuple title={item.title} subtitle={item.subtitle} area={item.area} yield={item.yield} price={item.price} src={item.src} target={item.target} />
            })}
        </>
    )
}
