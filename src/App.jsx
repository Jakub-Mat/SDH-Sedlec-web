import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import redFiretruck from './assets/svg/RedFiretruck.svg'
import blueDiversity from './assets/svg/BlueDiversity.svg'
import redFirefighter from './assets/svg/RedFirefighters.svg'
import sdhLogo from "./assets/pictures/ZnakSDHSedleccropped.png"
import instagram from "./assets/svg/ig-instagram-icon.svg"
import facebook from "./assets/svg/facebook-square-icon.svg"
// import tiktok from "./assets/svg/tiktok.svg"

// Přidej Material Symbols font do index.html nebo použij CDN v <head>:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

function App() {
  return (
    <>
      <header className="main-header">
        <div className="logo-container">
          <img src={sdhLogo} alt="Logo SDH" className="header-logo" />
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Domů</a>
          <a href="#" className="nav-link">Materiály</a>
          <a href="#" className="nav-link">Členové</a>
          <a href="#" className="nav-link">Výbava</a>
          <a href="#" className="nav-link">Kronika</a>
          <a href="#" className="nav-link login-link">Přihlášení</a>
        </nav>
      </header>
      <main>
        <section className="section-white">
          <h1>O SDH Sedlec</h1>
          <h2>Vítejte na novém officálním webu SDH Sedlec</h2>
          <p>
            Hasičský sport je disciplína, která vyžaduje nejen fyzickou sílu a obratnost, ale také pevné odhodlání, týmovou spolupráci a neochvějnou odvahu.
            Hasiči se v něm učí dovednostem, které mohou v reálném životě zachránit lidské životy, a každým tréninkem posouvají své limity.
            Vážíme si každého člena hasičského sboru nejen pro jejich nasazení ve sportu, ale především pro jejich obětavou práci, díky které zajišťují bezpečí a ochranu pro nás všechny.
          </p>
          <div className="sdh-stats">
            <div className="sdh-stat">
              <img src={redFiretruck} alt="Hasičské auto" className="sdh-icon" />
              <div className="sdh-stat-label">4 Hasičské Vozy</div>
            </div>
            <div className="sdh-divider" />
            <div className="sdh-stat">
              <img src={redFirefighter} alt="Člen jednotky" className="sdh-icon" />
              <div className="sdh-stat-label">15 Členů Jednotky</div>
            </div>
            <div className="sdh-divider" />
            <div className="sdh-stat">
              <img src={blueDiversity} alt="Šťastné děti" className="sdh-icon" />
              <div className="sdh-stat-label">20+ Šťastných Dětí</div>
            </div>
          </div>
        </section>
        <section className="section-red">
          <h1>Kalendář událostí</h1>
          <p>
            Přehled plánovaných akcí, soutěží a událostí.
          </p>
          <iframe 
            title="calendar" 
            // style="border: 0" width="00" height="600" frameborder="0" scrolling="no"
            className='calendar-iframe'
            src="https://calendar.google.com/calendar/embed?src=jacobsprogramms%40gmail.com&ctz=Europe%2FPrague" 
          ></iframe>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kde nás sledovat?</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon">
                <img src={facebook} alt="Facebook" className="social-icon-img" />
              </a>
              <a href="https://www.instagram.com" className="social-icon">
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
    </>
  )
}

export default App
