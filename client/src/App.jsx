import React from 'react';
import './main.css';
import Welcome from "./pages/auth/Welcome";
import MainContent from "./pages/MainContent";
import { useEffect, useState } from 'react';


//class App extends React.Component{
//  constructor(props){
//    super(props);
//    this.state={apiResponse:""};
//  }
//
//  callAPI(){
//  //  fetch("http://localhost:9000/users/registration/check/")
//  //  .then(res=> res.text())
//  //  .then(res=> this.setState({apiResponse: res}));
//  this.setState({apiResponse: "Hellon on this site"})
//  }
//
//  componentWillMount(){
//    this.callAPI();
//  }
////<p>{this.state.apiResponse}</p>
//  
//  render() {
//
//    if(sessionStorage.getItem('message')==='') {
//      return (
//        <div className='App'>
//          <Welcome />
//        </div>
//      )
//    } else {
//      return (
//            <>
//            <Navbar symbol={symbol} setSymbol={setSymbol} history={history} setHistory={setHistory} />
//              <div className='container'>
//              <Content symbol={symbol} history={history} setHistory={setHistory} setSymbol={setSymbol} />
//              </div>
//              <Footer />
//            </>
//            )
//    }
//    
//  }
//
//}

function App() {
  const [history, setHistory] = useState(()=>{
    const historyValue = localStorage.getItem("history")
    if (historyValue == null) return []
    return JSON.parse(historyValue)
  });

  const [symbol, setSymbol] = useState(()=>{
    const localValue = localStorage.getItem("symbol")
    if (localValue == null) return []
    return localValue
  });

  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  if(sessionStorage.getItem('message')==='Logged in :)') {
    return (
      <>
        <MainContent symbol={symbol} setSymbol={setSymbol} history={history} setHistory={setHistory} setLoginStatus={setLoginStatus} />
      </>
    )
  } else {
    return (
      <>
        <Welcome loginStatus={loginStatus} setLoginStatus={setLoginStatus} registerStatus={registerStatus} setRegisterStatus={setRegisterStatus} />
      </>
      )
      }
}

export default App;