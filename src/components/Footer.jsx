import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
       <footer>
       <div className="footer-logo">
                <Link to="/"><h1>Communion</h1></Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/events" >Events</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </nav>
        <a 
            className="cta-Btn"
            href="https://github.com/sumedhx" 
            target="_blank"
            onMouseOver={(e) => e.target.style.background = "#433bff"}
            onMouseOut={(e) => e.target.style.background = "#2f27ce"}
            >
            Created By Sumedh
        </a>
       </footer >
    )
}

export default Footer