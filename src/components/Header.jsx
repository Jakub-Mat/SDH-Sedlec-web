import React, { useState } from "react";
import { Link } from "react-router-dom";
import sdhLogo from "../assets/pictures/ZnakSDHSedleccropped.png";
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
                <Link to="/" className="nav-link" id="activeCard">Domů</Link>
                <Link to="/materialy" className="nav-link">Materiály</Link>
                <Link to="/clenove" className="nav-link">Členové</Link>
                <Link to="/kronika" className="nav-link">Kronika</Link>
                <Link to="/login" className="nav-link login-link">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
