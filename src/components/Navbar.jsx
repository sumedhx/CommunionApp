import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="navbar">
            
            <div className="logo">
                <Link to="/"><h1>Communion</h1></Link>
                <button onClick={() => setIsOpen(!isOpen)} > ☰ </button>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/events" >Events</Link></li>
                    <li><Link to="/about" >About</Link></li>
                </ul>
            </nav>
            <Link 
                className="cta-Btn"
                to="/events" 
                onMouseOver={(e) => e.target.style.background = "#433bff"}
                onMouseOut={(e) => e.target.style.background = "#2f27ce"}
                >
                Explore Events
            </Link>
        </div>
    )
}

export default Navbar;