export default function Positions({history, setHistory, setSymbol}) {

    function deleteHistory(id){
        setHistory(currentHistory => {
            var newHistory = currentHistory.filter(element => element.id !== id)
            localStorage.setItem("history", JSON.stringify(newHistory))
            return newHistory
        })
      }
    function handleHistorySelect(value){
        setSymbol(value)
        localStorage.setItem("symbol", value)
      }
   
    //var stockSymbol = "MSFT"
    //const url = `https://query1.finance.yahoo.com/v8/finance/chart/MSFT?metrics=high?&interval=1d&range=5d`
   //
    //fetch(url)
    //.then( res => { return res.json()} )
    //.then(data => {console.log(data)})
    //.then( function(data) {console.log(data)
    //    //for( var key in data["Time Series (5min)"] ){
    //    //    //stockChartXvaluesFunction.push(key);
    //    //    //stockChartYclosevaluesFunction.push(data["Time Series (5min)"][key]["4. close"]);
    //    //    //stockChartYopenvaluesFunction.push(data["Time Series (5min)"][key]["1. open"]);
    //    //    //stockChartYhighvaluesFunction.push(data["Time Series (5min)"][key]["2. high"]);
    //    //    //stockChartYlowvaluesFunction.push(data["Time Series (5min)"][key]["3. low"]);
    //    //}
//
    //})
    
    
    
    if (history.length>0){
    return (
        <>
        <div className="positions">
            <h1></h1>
            Positions
            <ul>
            <span>
                <span>Name</span>
                <span style={{marginLeft: "165px"}}>Action</span>
            </span>
            {(() => {
                const arr = [];
                for (let i = 0; i < Math.min(history.length, 10); i++) {
                    arr.push(
                        <li key={i} onClick={()=>handleHistorySelect(history[i].symbol)}>
                            <span>{`${i+1}. ${history[i].symbol}`}</span>
                            <button onClick={()=>deleteHistory(history[i].id)}>Delete</button>
                        </li>
                    );
                }
                return arr;
            })()}
            </ul>
        </div>
        </>
    )
}
    else{
        return (
            <>
            <div className="positions">
                <h1></h1>
                Positions
                <h1></h1>
                <h5 style={{color: "gray"}}>No data to display</h5>
            </div>
            </>
        )
    }
}