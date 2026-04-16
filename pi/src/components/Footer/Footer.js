import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-contenido">
                <div className="footer-nombres">
                    <p className="footer-nombre">Maria Aispuru</p>
                    <p className="footer-nombre">Matias Hilarion Blousson</p>
                    <p className="footer-nombre">Rosario Villafañe</p>
                </div>

                <p className="footer-copy">Copyright © Dashboard 2022</p>
            </div>
        </footer>
    )
}

export default Footer;