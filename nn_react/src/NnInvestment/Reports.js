const ReportBox=(props)=>{
    return (
        <div style={{margin:10,padding:10,border:'1px solid #ededed'}}>
            {props.title}
        </div>
    )
}
const Reports=()=>{
    return (
        <div style={{border: '1px solid #f1f2f2',background: '#fff',color: '#000'}}>
            <div>Reports Download</div>
           <ReportBox title="Investment Plan"/>
           <ReportBox title="Investment Plan"/>
           <ReportBox title="Investment Plan"/>
           <ReportBox title="Investment Plan"/>


        </div>
    )
}

export default Reports;