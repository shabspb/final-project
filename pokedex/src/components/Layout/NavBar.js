import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/" className="nav-link">All pokémon</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/caught" className="nav-link">Caught pokémon</Link>
                    </li>
                </ul>
            </nav>            
        </header>
    )
}