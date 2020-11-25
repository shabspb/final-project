import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from './../../logo.png';

export default function NavBar() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">                
                <img src={logo} className='App-logo' alt='logo-pokeball'/>
                <span className="navbar-brand mb-0 h1">Pokédex</span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">All pokémon</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/caught" className="nav-link" activeClassName="active">Caught pokémon</NavLink>
                    </li>
                </ul>
            </nav>            
        </header>
    )
}