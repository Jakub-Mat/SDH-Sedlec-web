import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

function Materialy() {
    return (
        <>
            <h1>Materiály ke stažení</h1>
            <p>Zde najdete materiály ke stažení pro členy SDH Sedlec.</p>
            <ul className="materialy-list">
                <li>
                    <a href="" download>
                        Materiál 1 (PDF)
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Materialy;