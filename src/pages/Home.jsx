import React, { useState, useRef, useEffect } from 'react';
import './Home.css'
import redFiretruck from '../assets/svg/RedFiretruck.svg'
import blueDiversity from '../assets/svg/BlueDiversity.svg'
import redFirefighter from '../assets/svg/RedFirefighters.svg'

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function Home() {
  const [firetruckClicked, setFiretruckClicked] = useState(false);
  const [redPplClicked, setRedPplClicked] = useState(false);
  const [bluePplClicked, setBluePplClicked] = useState(false);
  const mainRef = useRef(null);

  // Ovládání backdropu
  React.useEffect(() => {
    if (firetruckClicked || redPplClicked || bluePplClicked) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  }, [firetruckClicked, redPplClicked, bluePplClicked]);

  // Zavření popupu při kliknutí mimo něj
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Pokud je popup otevřený a klik není na popup nebo ikonu
      if (mainRef.current && !mainRef.current.contains(event.target)) {
        setFiretruckClicked(false);
        setRedPplClicked(false);
        setBluePplClicked(false);
      }
    };

    if (firetruckClicked || redPplClicked || bluePplClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [firetruckClicked, redPplClicked, bluePplClicked]);

  return (
    <>
      <main ref={mainRef}>
        <section className="section-white">
          <h1>O SDH Sedlec</h1>
          <h2>Vítejte na novém officálním webu SDH Sedlec</h2>
          <p>
            Hasičský sport je disciplína, která vyžaduje nejen fyzickou sílu a obratnost, ale také pevné odhodlání, týmovou spolupráci a neochvějnou odvahu.
            Hasiči se v něm učí dovednostem, které mohou v reálném životě zachránit lidské životy, a každým tréninkem posouvají své limity.
            Vážíme si každého člena hasičského sboru nejen pro jejich nasazení ve sportu, ale především pro jejich obětavou práci, díky které zajišťují bezpečí a ochranu pro nás všechny.
          </p>

          {/* Ikony společně s dividerem jsou součástí jednoho flexbox kontejneru, aby bylo možné snadno ovládat jejich rozložení a zarovnání. */}
          <div className="sdh-stats">
            {/* Red firetruck */}
            <div className="sdh-stat">
              <img
                src={redFiretruck}
                alt="Hasičské auto" 
                className="sdh-icon" 
                id="firetruck" 
                onClick={() => setFiretruckClicked(!firetruckClicked)}
              />
              <div className="sdh-stat-label">4 Hasičské Vozy</div>
              <div className={`additional-dropdown ${firetruckClicked ? 'open' : 'closed'}`} onClick={(e) => e.stopPropagation()}>
                <p>Naše hasičské vozy jsou vybaveny nejmodernější technikou a připraveny k okamžitému zásahu 24/7.</p>
                <a href="" target="_self" rel="noopener noreferrer">
                  <p>Konkrétní typy vozidel</p>
                </a>
              </div>
            </div>
            
            {/* First divider */}
            <div 
              className={"sdh-divider"}
              id={(firetruckClicked && redPplClicked || bluePplClicked && firetruckClicked || redPplClicked && bluePplClicked ? "extra" : "")}
            />

            {/* Red Firefighters icon */}
            <div className="sdh-stat">
              <img
                // red people icon
                src={redFirefighter} 
                alt="Člen jednotky" 
                className="sdh-icon" 
                id="redPpl"
                onClick={() => {
                  setRedPplClicked(!redPplClicked);
                }}
              />
              <div className="sdh-stat-label">15 Členů Jednotky</div>
              <div
                className={`additional-dropdown ${redPplClicked ? 'open' : 'closed'}`}
                onClick={(e) => e.stopPropagation()}
               >
                <p>Náš tým tvoří 15 odvážných a vysoce kvalifikovaných členů, kteří jsou připraveni zasáhnout v každé situaci.</p>
                <a href="" target="_self" rel="noopener noreferrer">
                  <p>Seznam členů</p>
                </a>
              </div>
            </div>
            
            {/* Second divider */}
            <div
              className={"sdh-divider"}
              id={(firetruckClicked && redPplClicked || bluePplClicked && firetruckClicked || redPplClicked && bluePplClicked ? "extra" : "")}
            />

            {/* Blue Diversity icon */}
            <div className="sdh-stat">
              <img
                src={blueDiversity} 
                alt="Šťastné děti" 
                className="sdh-icon" 
                id="bluePpl"
                onClick={() => {
                  setBluePplClicked(!bluePplClicked);
                }}
              />
              <div className="sdh-stat-label">20+ Mladých hasičů</div>
                <div
                className={`additional-dropdown ${bluePplClicked ? 'open' : 'closed'}`}
                onClick={(e) => e.stopPropagation()}
                >
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
