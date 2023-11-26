export default function Watchlist({setSymbol}) {

    function handleClick(id) {
        setSymbol(id)
        localStorage.setItem("symbol", id)
    }

    return (
    <div className="watchlist">
        <h1></h1>
        Top watchlist
        <div className="container">
        <ul>
            <li><span onClick={() => handleClick("AAPL")}>1. AAPL</span></li>
            <li><span onClick={() => handleClick("MSFT")}>2. MSFT</span></li>
            <li><span onClick={() => handleClick("2222.SR")}>3. 2222.SR</span></li>
            <li><span onClick={() => handleClick("GOOG")}>4. GOOG</span></li>
            <li><span onClick={() => handleClick("AMZN")}>5. AMZN</span></li>
            <li><span onClick={() => handleClick("NVDA")}>6. NVDA</span></li>
            <li><span onClick={() => handleClick("META")}>7. META</span></li>
            <li><span onClick={() => handleClick("BRK-B")}>8. BRK-B</span></li>
            <li><span onClick={() => handleClick("TSLA")}>9. TSLA</span></li>
            <li><span onClick={() => handleClick("LLY")}>10. LLY</span></li>
        </ul>
        <ul>
            <li><span onClick={() => handleClick("TSM")}>11. TSM</span></li>
            <li><span onClick={() => handleClick("V")}>12. V</span></li>
            <li><span onClick={() => handleClick("UNH")}>13. UNH</span></li>
            <li><span onClick={() => handleClick("NVO")}>14. NVO</span></li>
            <li><span onClick={() => handleClick("JPM")}>15. JPM</span></li>
            <li><span onClick={() => handleClick("XOM")}>16. XOM</span></li>
            <li><span onClick={() => handleClick("WMT")}>17. WMT</span></li>
            <li><span onClick={() => handleClick("AVGO")}>18. AVGO</span></li>
            <li><span onClick={() => handleClick("MC.PA")}>19. MC.PA</span></li>
            <li><span onClick={() => handleClick("TCEHY")}>20. TCEHY</span></li>
        </ul>
        </div>

    </div>
    )
}