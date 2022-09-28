import React from "react";
// import NudgesListRevamp from "../../../Search/mobile/revamp/Nudges/NudgesListRevamp";
// import Nudges from "../../../Search/revamp/Nudges/Nudges";
import NnInvestmentTuple from "./NnInvestmentTuple";
// import TagAndChips from '../../../designSystem/atoms/Tags&Chips/tags-and-chips';
// import Pd from "./Pd";
// import Card from "./Card"
import NnInvesData from './NnInvestmentTupleConstancts';
import Header from "../invest-in-property-online/components/Header/Header";
import { useState, useEffect } from "react";
import './main.css'
export default ()=>{
  const [nnInvesData, setNnInvesData] = useState([]);

  useEffect(() => {
      const url = `http://nn-investment-service.herokuapp.com/nnInvestment/listings?offset=0&limit=10`;
      fetch(url, {
          method: "GET",
          // credentials: 'same-origin',
          headers: {
            "Content-Type": "Application/json"
          }
      }).then(res => res.json())
          .then((data) => {
              console.log("data",data)
              setNnInvesData(data)
          })
          .catch((err) => console.log(err));
  }, []);

    console.log("nnInvesData",nnInvesData)

    return (
        <>
        <Header />
        <div data-label topmost className="rn__nudgeWrapper undefined" id="nudgesList">
          <div data-label="CATEGORY" className="tags-and-chips__textOnly" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo>
            <span className="tags-and-chips__badgeParent " /><span>&gt;7%</span>
          </div>
          <div data-label="CATEGORY" className="tags-and-chips__textOnly" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo>
            <span className="tags-and-chips__badgeParent " /><span>Safe Investment</span>
          </div>
          <div data-label="CATEGORY" className="tags-and-chips__textOnly" variant="textOnly" fontStyle="normal" active iconleftclass data-custominfo>
              <span className="tags-and-chips__badgeParent " /><span>Popular</span>
          </div>
        </div>

        {(nnInvesData.responses||[]).map((item,index)=>{
        return <NnInvestmentTuple title={item.propertyName} subtitle={item.address} area={item.area} yield={item.yield} price={item.pricePerSqFt} src={item.images[0]} target={item.roi} id={item.id}/>
        })}
        </>
    )
}
