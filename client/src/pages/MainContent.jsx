import Navbar from '../Navbar';
import Content from "../Content";
import Footer from "../Footer";

export default function MainContent({symbol, setSymbol, history, setHistory, setLoginStatus}) {

    return (
        <>
        <Navbar symbol={symbol} setSymbol={setSymbol} history={history} setHistory={setHistory} setLoginStatus={setLoginStatus} />
        <div className='container'>
        <Content symbol={symbol} history={history} setHistory={setHistory} setSymbol={setSymbol} setLoginStatus={setLoginStatus} />
        </div>
        <Footer />
        </>
    )
}