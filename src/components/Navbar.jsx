import React from "react";
import { Link } from "react-router-dom";
import aavrtti_logo from "../media/aavrtti_logo.png";

function Navbar()
{
    function showMenu() {
        if (document.getElementById("check").checked) {
            document.getElementById('navmenu').classList.add('menu-clicked');
        } else {
            document.getElementById('navmenu').classList.remove('menu-clicked');
        }
    }

    function menuSelect() {
        var activeLinks = document
        .getElementById("navmenu")
        .getElementsByClassName("active");
        
        if (activeLinks != null && activeLinks.length > 0) {
            activeLinks[0].classList.remove("active");
        }
        document.activeElement.classList.add("active");
        document.getElementById("check").checked = false;
        document.getElementById("navmenu").classList.remove('menu-clicked');
    }

    function openNewWindow() {
        const newWindow = window.open('/join-us');
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
                    {/* <p>Technologies</p> */}
                </div>
            </div>
            <input type="checkbox" id="check" onClick={showMenu} />
            <ul id="navmenu">
            <li>
                <a id="a-home" className="menu" href="#home" onClick={menuSelect}>
                    Home
                </a>
            </li>
            <li>
                <a id="a-what-we-do" className="menu" href="#what-we-do" onClick={menuSelect}>
                    What We Do
                </a>
            </li>
            <li>
                <a id="a-who-we-are" className="menu" href="#who-we-are" onClick={menuSelect}>
                    Who We Are
                </a>
            </li>
            <li>
                <a id="a-contact" className="menu" href="#contact" onClick={menuSelect}>
                    Contact
                </a>
            </li>
            <li>
                <Link id="a-join-us" to="/" onClick={openNewWindow}>
                    Join Us
                </Link>
            </li>
            {/* <li className="dropdown">
                <a id="a-in-the-news" href="#">
                    In The News
                </a>
                <div className="dropdown-area">
                    <span>
                        <img src={news_img} style="height:"/>
                        <a href="https://www.startus-insights.com/innovators-guide/5-top-nondestructive-testing-ndt-solutions-impacting-engineering/" target="_blank">
                        5 Top NDT Solutions Impacting Engineering
                        </a>
                    </span>
                    
                </div>
            </li> */}
      </ul>
    </nav>
    )
}

export default Navbar;