import { useState } from 'react'
import React from 'react';
import './Home.css'
import redFiretruck from '../assets/svg/RedFiretruck.svg'
import blueDiversity from '../assets/svg/BlueDiversity.svg'
import redFirefighter from '../assets/svg/RedFirefighters.svg'

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function Home() {
  const [firetruckClicked, setFiretruckClicked] = useState(false);
  const [redPplClicked, setRedPplClicked] = useState(false);
  const [bluePplClicked, setBluePplClicked] = useState(false);


  return (
    <>
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
              <img
              // red firetruck icon
              src={redFiretruck}
              alt="Hasičské auto" 
              className="sdh-icon" 
              id="firetruck" 
              onClick={() => setFiretruckClicked(!firetruckClicked) }
              />
              <div className="sdh-stat-label" >4 Hasičské Vozy</div>
                <div className={`additional-dropdown ${firetruckClicked ? 'open' : 'closed'}`}>
                  <p>Naše hasičské vozy jsou vybaveny nejmodernější technikou a připraveny k okamžitému zásahu 24/7.</p>
                    <a href="" target="_self" rel="noopener noreferrer">
                    <p>Konkrétní typy vozidel</p>
                  </a>
                </div>
            </div>

            <div 
              // divider mezi ikonami zmizí pokud jsou rozbaleny 2 nebo více dropdowny 
              className={"sdh-divider"}
              id={(firetruckClicked && redPplClicked || bluePplClicked && firetruckClicked || redPplClicked && bluePplClicked ? "extra" : "")}
 
            />

            <div className="sdh-stat">
              <img
                // red people icon
                src={redFirefighter} 
                alt="Člen jednotky" 
                className="sdh-icon" 
                id="redPpl"
                onClick={() => setRedPplClicked(!redPplClicked)}
              />
              <div className="sdh-stat-label">15 Členů Jednotky</div>
                <div className={`additional-dropdown ${redPplClicked ? 'open' : 'closed'}`}>
                  <p>Náš tým tvoří 15 odvážných a vysoce kvalifikovaných členů, kteří jsou připraveni zasáhnout v každé situaci.</p>
                    <a href="" target="_self" rel="noopener noreferrer">
                    <p>Seznam členů</p>
                  </a>
                </div>
              
            </div>

            <div
              className={"sdh-divider"}
              id={(firetruckClicked && redPplClicked || bluePplClicked && firetruckClicked || redPplClicked && bluePplClicked ? "extra" : "")}
            />

            <div className="sdh-stat">
              <img
                // blue people icon
                src={blueDiversity} 
                alt="Šťastné děti" 
                className="sdh-icon" 
                id="bluePpl"
                onClick={() => setBluePplClicked(!bluePplClicked)}
              />
              <div className="sdh-stat-label">20+ Šťastných Dětí</div>
                <div className={`additional-dropdown ${bluePplClicked ? 'open' : 'closed'}`}>
                  <p>Naše dětské oddíly jsou plné radosti, přátelství a dobrodružství, kde se děti učí hodnotám jako je týmová práce a odvaha.</p>
                    <a href="" target="_self" rel="noopener noreferrer">
                    <p>Více o dětských oddílech</p>
                  </a>
                </div>
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
    </>
  )
}


export default Home
