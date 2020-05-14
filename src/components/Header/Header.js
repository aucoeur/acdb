import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <header>
                <h1>ACNH Fossils</h1>
                <div className="Subtitle">So you want to be a Dead Dino Doctor?</div>

                 <div>
                    <NavLink 
                        className="nav-link"   
                        activeClassName="nav-link-active" 
                        exact 
                        to="/">Fossils</NavLink>
                    <NavLink 
                        className="nav-link"   
                        activeClassName="nav-link-active" 
                        to="/about">About</NavLink>
                    </div>
            </header>
        </div>
    )
}

export default Header;