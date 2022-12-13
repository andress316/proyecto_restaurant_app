import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom"





export default function Navbar() {
  const [ isNavExpanded, setIsNavExpanded ] = useState( false )

  return (
    <header>
    <nav className="navigation">
      <a href="/">
      <img src={process.env.PUBLIC_URL+'/images/logo.jpg' }className='logo'></img>
      </a>
      
      

      <button className="hamburger" onClick={ () => {
        setIsNavExpanded( !isNavExpanded );
      } }>
        {/* icon from heroicons.com */ }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            
            <Link className="link" to="/nosotros">Nosotros</Link>
          </li>
          <li>
          <Link className="link" to="/carta">Carta</Link>
          </li>
          <li>
            <Link className="link" to="/reservas">Reservas</Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}