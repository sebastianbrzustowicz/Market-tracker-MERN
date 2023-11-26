import React from 'react';
import Navbar from './Navbar';
import './main.css';
import Content from "./Content";
import Footer from "./Footer";
import Welcome from "./pages/auth/Welcome";
import { useEffect, useState } from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
  //  fetch("http://localhost:9000/users/registration/check/")
  //  .then(res=> res.text())
  //  .then(res=> this.setState({apiResponse: res}));
  this.setState({apiResponse: "Hellon on this site"})
  }

  componentWillMount(){
    this.callAPI();
  }
//<p>{this.state.apiResponse}</p>
  render() {

    return (
      <div className='App'>
        <Welcome />
      </div>
    )
  }

}

//function App() {
//  const [history, setHistory] = useState(()=>{
//    const historyValue = localStorage.getItem("history")
//    if (historyValue == null) return []
//    return JSON.parse(historyValue)
//  });
//
//  const [symbol, setSymbol] = useState(()=>{
//    const localValue = localStorage.getItem("symbol")
//    if (localValue == null) return []
//    return localValue
//  });
//
//    return (
//    <>
//   <Welcome />
//    {/* 
//    <Navbar symbol={symbol} setSymbol={setSymbol} history={history} setHistory={setHistory} />
//      <div className='container'>
//      <Content symbol={symbol} history={history} setHistory={setHistory} setSymbol={setSymbol} />
//      </div>
//      <Footer />
//    */} 
//    </>
//    )
//}

export default App;