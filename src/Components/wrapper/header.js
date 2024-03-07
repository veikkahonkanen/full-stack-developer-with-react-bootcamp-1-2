import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from '../../chart.gif';

function Header() {
  return(
    <header>
      <img src={logo} id="logo" alt="logo" />
      <h1><a href="index.html">Skillsoft weight tracker</a></h1>
      <nav>
        <ul>
          <li><a href="/home">home</a></li>
          <li><a href="/register">register</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/customers">customers</a></li>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/register">register</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/customers">customers</Link></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;