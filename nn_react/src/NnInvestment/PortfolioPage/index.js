import React, { useEffect, useState } from 'react';

const PortFolioPage = () =>{
    const [progressDiv, showDiv] = useState(false);

    const showBlock = () => {
        progressDiv? showDiv(false) : showDiv(true)
      }
      
    return (
        <>
        <div style={{ background: 'blue', padding: '13px', marginBottom: '13px', height: '48px', color: 'white', fontWeight: 'bold' }}>NN Portfolio</div>
        <div>
          <div onClick={showBlock} style={{ display: 'block', color: 'blue', fontWeight: 600, padding: '10px' }}>
            Orders in Progress(1)
            <div style={{ float: 'right', padding: '5px' }}>v</div>
          </div>
          {progressDiv && <div style={{display:'flex', margin:'10px'}}>
            <div>Blossom County Investment fund</div>
            <div style={{marginLeft:'auto', fontWeight:'600'}}>Rs 30,000</div>
            </div>}
          <div style={{ display: 'block', color: 'blue', fontWeight: 600, padding: '10px' }}>
            Investements
          </div>
        </div>
        <div style={{ display: "flex", background: "rgb(71 114 228 / 11%)", margin: "10px", padding: "10px", borderRadius: "9px", height: "100px" }}>
          <div style={{padding:'5px', color:'royalblue', fontWeight:'600', flexBasis: '33%'}}>
            Invested
            <div style={{padding:'15px', color:'navy'}}>4L+</div>
          </div>
          <div style={{padding:'5px', color:'royalblue', fontWeight:'600', flexBasis: '33%'}}>
            Current
            <div style={{padding:'15px', color:'navy'}}>4.5L</div>
          </div>
          <div style={{padding:'5px', color:'royalblue', fontWeight:'600'}}>
            Total return
            <div style={{padding:'15px', color:'navy'}}>+50K</div>
          </div>
        </div>
        <div style={{ display: 'block', color: 'blue', fontWeight: 600, padding: '10px' }}>
            Ongoing investments(in properties)
          </div>
          <div style={{display:"block",margin:"10px",background:"rgb(71 114 228 / 11%)",padding:"10px",borderRadius:"10px"}}>
          <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue',color: 'royalblue',
      'fontWeight': 600}}>Value as of 16 September 2022</div>
          <div style={{fontSize:'24px',marginBottom:'20px',color:'darkblue'}}>Rs 76,827</div>
          <div style={{display:'flex'}}>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Invested amount</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>Rs 75,000</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Unrealized Gains</div>
                <div style={{fontSize:'13px',color:'darkgreen', padding:'5px'}}>Rs 1827</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Annual Return %</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>XX</div>
            </div>
          </div>
          </div>
  
          <div style={{display:"block",margin:"10px",background:"rgb(71 114 228 / 11%)",padding:"10px",borderRadius:"10px"}}>
          <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue',color: 'royalblue',
      'fontWeight': 600}}>Value as of 16 September 2022</div>
          <div style={{fontSize:'24px',marginBottom:'20px',color:'darkblue'}}>Rs 76,827</div>
          <div style={{display:'flex'}}>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Invested amount</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>Rs 75,000</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Unrealized Gains</div>
                <div style={{fontSize:'13px',color:'darkgreen', padding:'5px'}}>Rs 1827</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Annual Return %</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>XX</div>
            </div>
          </div>
          </div>
  
          <div style={{display:"block",margin:"10px",background:"rgb(71 114 228 / 11%)",padding:"10px",borderRadius:"10px"}}>
          <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue',color: 'royalblue',
      'fontWeight': 600}}>Value as of 16 September 2022</div>
          <div style={{fontSize:'24px',marginBottom:'20px',color:'darkblue'}}>Rs 76,827</div>
          <div style={{display:'flex'}}>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Invested amount</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>Rs 75,000</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Unrealized Gains</div>
                <div style={{fontSize:'13px',color:'darkgreen', padding:'5px'}}>Rs 1827</div>
            </div>
            <div>
              <div style={{fontSize:'15px',marginBottom:'20px',color:'darkblue', padding:'5px'}}>Annual Return %</div>
                <div style={{fontSize:'13px',color:'black', padding:'5px'}}>XX</div>
            </div>
          </div>
          </div>
          </>
  
    )
}
export default PortFolioPage;