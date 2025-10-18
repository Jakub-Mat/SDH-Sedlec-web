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
                        <a href="https://www.facebook.com/people/SDH-Sedlec/100064594453373/?sk=about" className="social-icon" target='_blank'>
                            <img src={facebook} alt="Facebook" className="social-icon-img" />
                        </a>
                        <a href="https://www.instagram.com/sdh_sedlec/#" className="social-icon" target='_blank'>
                            <img src={instagram} alt="Instagram" className="social-icon-img" />
                        </a>
                        <a href="#" className="social-icon">🎵</a> {/* TikTok ikona může být přidána později */}
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Adresa:</h3>
                    <p>SHČMS - SDH Sedlec</p>
                    <p>Tymákovská 239</p>
                    <p>332 02 Sedlec</p>
                </div>
                <div className="footer-section">
                    <h3>E-mail:</h3>
                    <p>info@hasicisedlec.cz</p>
                    <p>topOddil@hasicisedlec.cz</p>
                </div>
                <div className="footer-section">
                    <h3>IČO:</h3>
                    <p>12431534713</p>
                </div>
                <div className="footer-section">
                    <h3>Telefon:</h3>
                    <p>155 158 150</p>
                    <p>757 344 971</p>
                    <p>279 974 634</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;