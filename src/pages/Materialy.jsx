import React from "react";
import "./Materialy.css";

function Materialy() {
    return (
        <>
            <h1>Materiály ke stažení</h1>
            <p>Zde najdete materiály ke stažení pro členy SDH Sedlec.</p>
            <div className="materialy">
                <h2 id="tableTitle">Materiály</h2>
                <div className="materialy-table-container">
                    <table className="materialy-table">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 150kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Preventista - Materiál 1 (150 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 500kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Strojník - Materiál 2 (500 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 1MB.pdf" target="_blank" rel="noopener noreferrer">
                                        Velitel - Materiál 3 (1 MB, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 150kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Cvičitel - Materiál 1 (150 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 500kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Realista - Materiál 2 (500 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 1MB.pdf" target="_blank" rel="noopener noreferrer">
                                        Hlasatel - Materiál 3 (1 MB, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 150kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Podnikatel - Materiál 1 (150 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 500kB.pdf" target="_blank" rel="noopener noreferrer">
                                        Optimista - Materiál 2 (500 kb, PDF)
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/PdfFiles/example - 1MB.pdf" target="_blank" rel="noopener noreferrer">
                                        Skladník - Materiál 3 (1 MB, PDF)
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Materialy;