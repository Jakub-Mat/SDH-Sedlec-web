import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import redFiretruck from './assets/svg/RedFiretruck.svg'
import blueDiversity from './assets/svg/BlueDiversity.svg'
import redFirefighter from './assets/svg/RedFirefighters.svg'
import sdhLogo from "./assets/pictures/ZnakSDHSedleccropped.png"

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
          <p>
            Zde bude základní popis vašeho hasičského sboru, historie, poslání a další informace.
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
          <h2>Kalendář událostí</h2>
          <p>
            Přehled plánovaných akcí, soutěží a událostí.
          </p>
          <iframe 
            title="calendar" 
            // style="border: 0" width="00" height="600" frameborder="0" scrolling="no"
            src="https://calendar.google.com/calendar/embed?src=jacobsprogramms%40gmail.com&ctz=Europe%2FPrague" 
            style={{
              width: "800px",
              height: "600px",
              border: "none",
              marginTop: "16px",
              scrollBehavior: "no"
            }}
          ></iframe>
        </section>
      </main>
    </>
  )
}

export default App
