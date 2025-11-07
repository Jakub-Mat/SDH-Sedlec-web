import React from "react";
import profilFoto from '../assets/pictures/niceFace.jpg';
import profilFoto2 from '../assets/pictures/profilePic.jpg';
import "./Clenove.css";

const Clenove = () => {
    return (
        <main>
            <h1>Koho potkáte při tréninku</h1>
            <h2>Členové týmu</h2>
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
                        Vedoucí hasičů: 
                        <br />
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
                        Vedoucí hasičů: 
                        <br />
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
                        Autor stránky: 
                        <br />
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
                        Články vytvořil: 
                        <br />
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
                        Dodal zdroje: 
                        <br />
                        Jakub Matas
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
                        Trenér: 
                        <br />
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
                        Trenér: 
                        <br />
                        Radek Matas
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
                        Trenér: 
                        <br />
                        Radek Matas
                    </p>
                </div>
            </div>
            <p>Tohle samozřejmě nejsou všichni, ale věřím, že už teď se těšíte až potkáte ostatní!</p>
        </main>
    );
};

export default Clenove;