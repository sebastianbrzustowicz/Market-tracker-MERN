import Home from "./pages/Home"
import About from "./pages/About"
import Feedback from "./pages/Feedback"
import Logout from "./pages/Logout"
import { Route, Routes } from "react-router-dom"

export default function Content({symbol, history, setHistory, setSymbol, setLoginStatus}) {
    return (
        <Routes>
          <Route path="/" element={<Home symbol={symbol} history={history} setHistory={setHistory} setSymbol={setSymbol} />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
        </Routes>
    )
}