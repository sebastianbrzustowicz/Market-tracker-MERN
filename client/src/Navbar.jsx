import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import feedbackIcon from './images/feedbackIcon.png';
import stockstIcon from './images/stocksIcon.png';
import aboutIcon from './images/aboutIcon.png';
import logoutIcon from './images/logoutIcon.png';
import loupeIcon from './images/loupeIcon.png';
import mainIcon from './images/mainIcon.png';
import { useNavigate } from "react-router-dom";

export default function Navbar({symbol, setSymbol, history, setHistory, setLoginStatus}) {

  function handleSubmit(e) { // new search - apply new graph and add to history
    e.preventDefault();
    const newSymbol = e.target[1].value
    setSymbol(e.target[1].value)
    localStorage.setItem("symbol",newSymbol)
    setHistory((currentHistory) =>{
      var newHistory = [{ id: crypto.randomUUID(), symbol: newSymbol, completed: 
        false }, ...currentHistory]
    localStorage.setItem("history", JSON.stringify(newHistory))
    return newHistory})
  };

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();   // prevent link from immediate navigation
    setLoginStatus('');
    sessionStorage.setItem('message', '')
    navigate("/");
  };

  return (
      <nav className="nav">
        <Link to="/" className="site-title">
          <img src={mainIcon} alt="Main Icon" />
          <textDiv>MarketTracker</textDiv>
        </Link>
        <form className='searchbar' onSubmit={(e) => {handleSubmit(e)}}>
          <button type='submit'><img src={loupeIcon} alt="Search" /></button>
          <input name="searchName" type="text" autoComplete='off' placeholder='Find a Symbol' autoFocus></input>
        </form>
        <ul>
          <CustomLink to="/"><img src={stockstIcon} className='icon' alt="Stocks" />Stocks</CustomLink>
          <CustomLink to="/feedback"><img src={feedbackIcon} className='icon' alt="Feedback" />Feedback</CustomLink>
          <CustomLink to="/about"><img src={aboutIcon} className='icon' alt="About" />About</CustomLink>
          <CustomLink to="/logout" onClick={handleLogout}><img src={logoutIcon} className='icon' alt="Log Out" />Log Out</CustomLink>
        </ul>
      </nav>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}