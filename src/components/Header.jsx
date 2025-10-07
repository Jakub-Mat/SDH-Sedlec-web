import React, { useState }  from "react";
import { Link } from "react-router-dom";
import sdhLogo from "../assets/pictures/ZnakSDHSedleccropped.png"
import './Header.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="main-header">
            <div className="logo-container">
                <img src={sdhLogo} alt="Logo" className="header-logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <a href="#home" className="nav-link" id="activeCard">Domů</a>
                <a href="#about" className="nav-link">Materiály</a>
                <a href="#contact" className="nav-link">Členové</a>
                <a href="#contact" className="nav-link">Kronika</a>
                <a href="#login" className="nav-link login-link">Login</a>
            </nav>
        </header>
    )
}
export default Header;
