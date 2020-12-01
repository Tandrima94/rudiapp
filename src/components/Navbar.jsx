import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import aavrtti_logo from "../media/aavrtti_logo.png";

function Navbar(props)
{
    function showMenu() {
        if (document.getElementById("check").checked) {
            document.getElementById('navmenu').classList.add('menu-clicked');
        } else {
            document.getElementById('navmenu').classList.remove('menu-clicked');
        }
    }

    function menuSelect() {
        var activeLinks = document.getElementById("navmenu").getElementsByClassName("active");
        if (activeLinks != null && activeLinks.length > 0) {
            activeLinks[0].classList.remove("active");
        }
        document.activeElement.classList.add("active");
        document.getElementById("check").checked = false;
        document.getElementById("navmenu").classList.remove('menu-clicked');
    }

    function openNewWindow() {
        const newWindow = window.open('/Contact');
        if (newWindow) newWindow.opener = null
    }
    
    return (
        <nav id = "navbar">
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <div id="brand" className="navbar-brand">
                <img src={aavrtti_logo} alt="Aavrtti Logo" />
                <div>
                    <p>AAVRTTI</p>
                    <p>Technologies</p>
                </div>
            </div>
            <input type="checkbox" id="check" onClick={showMenu} />
            <ul id="navmenu">
            <li>
                <a id="a-home" href="#home" onClick={menuSelect}>
                    Home
                </a>
            </li>
            <li>
                <a id="a-about" href="#about" onClick={menuSelect}>
                    About
                </a>
            </li>
            <li>
                <a id="a-product" href="#product" onClick={menuSelect}>
                    Product and Services
                </a>
            </li>
            <li>
                <a id="a-investor" href="#investor" onClick={menuSelect}>
                    Investors
                </a>
            </li>
            {/* <li>
                <a id="a-team" href="#team" onClick={menuSelect}>
                    Team
                </a>
            </li> */}
            <li>
                <Link onClick={openNewWindow}>
                {/* <a id="a-contact" href="#contact" onClick={openNewWindow} > */}
                    Contact
                </Link>
                {/* </a> */}
            </li>
      </ul>
    </nav>
    )
}

export default Navbar;