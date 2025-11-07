import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sdhLogo from "../assets/pictures/ZnakSDHSedleccropped.png";
import './Header.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    // console.log("Location is " + location.pathname);

    return (
        <header className="main-header">
            <div className="logo-container">
                <Link to="/">
                    <img src={sdhLogo} alt="Logo" className="header-logo" />
                </Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <Link to="/" className="nav-link" id={location.pathname === "/" ? "activeCard" : undefined}>Domů</Link>
                <Link to="/materialy" className="nav-link" id={location.pathname === "/materialy" ? "activeCard" : undefined}>Materiály</Link>
                <Link to="/clenove" className="nav-link" id={location.pathname === "/clenove" ? "activeCard" : undefined}>Členové</Link>
                <Link to="/kronika" className="nav-link" id={location.pathname === "/kronika" ? "activeCard" : undefined}>Kronika</Link>
                <Link to="/login" className="nav-link login-link" id={location.pathname === "/login" ? "activeCard" : undefined}>Přihlášení</Link>
            </nav>
        </header>
    );
};

export default Header;
