import React from 'react';
import './main.css';
import Welcome from "./pages/auth/Welcome";
import MainContent from "./pages/MainContent";
import { useEffect, useState } from 'react';

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