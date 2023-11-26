import Graph from "./sections/Graph"
import Watchlist from "./sections/Watchlist"
import Positions from "./sections/Positions"

export default function Home({symbol, history, setHistory, setSymbol}) {
    
    return (<>
    <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", flexDirection: "row"}}> 
        <Watchlist setSymbol={setSymbol} />
        <Graph symbol={symbol}/>
        <Positions history={history} setHistory={setHistory} setSymbol={setSymbol} />
    </div>
    </>
    )
}