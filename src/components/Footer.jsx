import React from 'react';
import './Footer.css';

import instagram from "../assets/svg/ig-instagram-icon.svg"
import facebook from "../assets/svg/facebook-square-icon.svg"
// import tiktok from "./assets/svg/tiktok.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Kde nás sledovat?</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/people/SDH-Sedlec/100064594453373/?sk=about" className="social-icon" target='_blank' rel="noreferrer">
                            <img src={facebook} alt="Facebook" className="social-icon-img" />
                        </a>
                        <a href="https://www.instagram.com/sdh_sedlec/#" className="social-icon" target='_blank' rel="noreferrer">
                            <img src={instagram} alt="Instagram" className="social-icon-img" />
                        </a>
                        <a href="#" className="social-icon">🎵</a> {/* TikTok ikona může být přidána později */}
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Adresa:</h3>
                    <span>SHČMS - SDH Sedlec</span>
                    <span>Tymákovská 239</span>
                    <span>332 02 Sedlec</span>
                </div>
                <div className="footer-section">
                    <h3>E-mail:</h3>
                    <span>info@hasicisedlec.cz</span>
                    <span>topOddil@hasicisedlec.cz</span>
                </div>
                <div className="footer-section">
                    <h3>IČO:</h3>
                    <span>12431534713</span>
                </div>
                <div className="footer-section">
                    <h3>Telefon:</h3>
                    <span>155 158 150</span>
                    <span>757 344 971</span>
                    <span>279 974 634</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;