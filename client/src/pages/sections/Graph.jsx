import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

export default function Graph({symbol}) {
    const [scope, setScope] = useState(100);

    const [graphX, setSGraphX] = useState([]);
    const [graphYopen, setSGraphYopen] = useState([]);
    const [graphYclose, setSGraphYclose] = useState([]);
    const [graphYhigh, setSGraphYhigh] = useState([]);
    const [graphYlow, setSGraphYlow] = useState([]);

    function fetchStocks() {
    const API_KEY="demo"
    const outputSize = "full" // "full", "compact"- need api key
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&outputsize=${outputSize}&apikey=${API_KEY}`

    let stockChartXvaluesFunction = [];
    let stockChartYclosevaluesFunction = [];
    let stockChartYopenvaluesFunction = [];
    let stockChartYhighvaluesFunction = [];
    let stockChartYlowvaluesFunction = [];

    //const url2 = `query1.finance.yahoo.com/v8/finance/chart/MSFT?metrics=high?&interval=1d&range=5d`
    //fetch(url2)

    fetch(url)
    .then( res => { return res.json()} )
    .then( function(data) {//console.log(graphYopen.length)
        for( var key in data["Time Series (5min)"] ){
            stockChartXvaluesFunction.push(key);
            stockChartYclosevaluesFunction.push(data["Time Series (5min)"][key]["4. close"]);
            stockChartYopenvaluesFunction.push(data["Time Series (5min)"][key]["1. open"]);
            stockChartYhighvaluesFunction.push(data["Time Series (5min)"][key]["2. high"]);
            stockChartYlowvaluesFunction.push(data["Time Series (5min)"][key]["3. low"]);
        }
        

        setSGraphX(stockChartXvaluesFunction);
        setSGraphYclose(stockChartYclosevaluesFunction);
        setSGraphYopen(stockChartYopenvaluesFunction);
        setSGraphYhigh(stockChartYhighvaluesFunction);
        setSGraphYlow(stockChartYlowvaluesFunction);
        
    })

    }

    useEffect(()=>{
        fetchStocks();
    }, [symbol])

    function handleScope(event) {
        event.preventDefault();
        var scopeVal = Math.min(graphYopen.length, Math.abs(event.target[0].value*10))
        //console.log(graphYclose)
        { scopeVal === 0 ? setScope(graphYopen.length) : setScope(scopeVal) }
    }
        
    var scopeOpen = graphYopen.slice(0, scope)[scope-1];
    var scopeClose = graphYclose.slice(0, scope)[0];

    var scopeChange = Math.round((scopeClose-scopeOpen)/scopeOpen*10000)/100;
    var scopeClass = "colorWhite"
    var sign = ""
    { scopeChange ?  scopeChange = scopeChange :  scopeChange = "0" }
    { scopeChange >= 0 ?  scopeClass = "colorGreen" :  scopeClass = "colorRed" }
    { scopeChange >= 0 ?  sign = "+" :  sign = "" }

    return (
        <div className="graph">
            <span>Actual value: {graphYclose.slice(0, scope)[0]}</span>
            <span>Scope stock change: </span>
            <span className={scopeClass}>{sign}{scopeChange}%</span>
            <form onSubmit={handleScope}>
                <input placeholder='Scope in hours'></input>
                <button>Set scope</button>
            </form>
            <Plot
            data={[
              {
                x: graphX.slice(0, scope),
                open: graphYopen.slice(0, scope),
                high: graphYhigh.slice(0, scope),
                low: graphYlow.slice(0, scope),
                close: graphYclose.slice(0, scope),
                type: 'candlestick',
                increasing: {line: {color: 'green'}},
                decreasing: {line: {color: 'red'}},
              },
            ]}
            layout={ {
                width: 700, 
                height: 410, 
                title: localStorage.getItem("symbol"), 
                paper_bgcolor: "black", 
                plot_bgcolor:"black", 
                xaxis: {
                    rangeslider: {
                         visible: false
                     }
                  }
            } }
          />
        </div>
    )
}