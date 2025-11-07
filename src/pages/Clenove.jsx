import React from "react";
import profilFoto from '../assets/pictures/niceFace-removebg.png';
import profilFoto2 from '../assets/pictures/profilePic.jpg';
import blueDiversity from '../assets/svg/BlueDiversity.svg';
import redFirefighter from '../assets/svg/RedFirefighters.svg';
import "./Clenove.css";

const Clenove = () => {
    return (
        <main>
            <h1>Koho potkáte při tréninku</h1>
            <h2>Členové SDH Sedlec</h2>
            <div className="clenove-container">
                {/* Profil 1 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Stanislav Pokštefl"
                        className="profil-foto"
                        style={{ backgroundColor: "#590A0A" }}
                    />
                    <p className="profil-role">
                        Stanislav Pokštefl
                    </p>
                </div>

                {/* Profil 2 */}
                <div className="profil">
                    <img
                        src={profilFoto2}
                        alt="Josef Sistek"
                        className="profil-foto"
                        style={{ backgroundColor: "#84B1D9" }}
                    />
                    <p className="profil-role">
                        Josef Sistek
                    </p>
                </div>

                {/* Profil 3 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Jakub Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#D0B229" }}
                    />
                    <p className="profil-role">
                        Jakub Matas
                    </p>
                </div>

                {/* Profil 4 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Jakub Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#7A4D8B" }}
                    />
                    <p className="profil-role">
                        Jakub Matas
                    </p>
                </div>

                {/* Profil 5 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Jakub Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#97A483" }}
                    />
                    <p className="profil-role">
                        Chlebák12
                    </p>
                </div>

                {/* Profil 6 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Radek Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#1E9896" }}
                    />
                    <p className="profil-role">
                        Radek Matas
                    </p>
                </div>
                {/* Profil 7 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Radek Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#2C4001" }}
                    />
                    <p className="profil-role">
                        Vit Matas 
                    </p>
                </div>
                {/* Profil 8 */}
                <div className="profil">
                    <img
                        src={profilFoto}
                        alt="Radek Matas"
                        className="profil-foto"
                        style={{ backgroundColor: "#990000" }}
                    />
                    <p className="profil-role">
                        Ségra Vítka
                    </p>
                </div>
            </div>
            <p>Tohle samozřejmě nejsou všichni, ale věřím, že už teď se těšíte až potkáte ostatní!</p>

            <section className="info-section">
                <div>
                            <img src={redFirefighter} alt="ikona hasiči" className="info-icon" />
                </div>
                <h1>
                    15 Členů Jednotky
                </h1>
                <p className="info-text">
                        Členové hasičské dobrovolné jednotky jsou opravdoví hrdinové, kteří denně prokazují svou odvahu, obětavost a odhodlání. Bez jejich neúnavné práce by naše komunity nemohly být tak bezpečné, jak jsou. Tito lidé riskují své životy, aby zachránili majetek a, především, lidské životy. Je obdivuhodné, jak se dokážou postavit nebezpečným situacím, ať už jde o požáry, povodně nebo jiné krizové momenty.
                </p>
            </section>
            
            <section className="info-section" id="blueSection">
                <div>
                    <img src={blueDiversity} alt="ikona mladí hasiči" className="info-icon" />
                </div>
                <h1 style={{ color: "#084B8A" }}>
                    20 a více Mladých hasičů
                </h1>
                <p className="info-text">
                        Mladí hasiči jsou inspirující příklad zapálení a odhodlání. Je úžasné vidět, jak se s nadšením věnují tréninkům, neustále se snaží zlepšovat a rozvíjet své dovednosti. I když jsou mladí, již teď prokazují velkou zodpovědnost a týmového ducha, což je základem jejich silného kolektivu. Každý trénink je pro ně příležitostí učit se nové věci a připravovat se na situace, které mohou nastat.
                </p>
            </section>
        </main>
    );
};

export default Clenove;