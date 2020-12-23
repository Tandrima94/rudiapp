import React  from "react";
import Home from "./Home";
import Product from "./Product";
import TechnologyDetail from "./TechnologyDetail";
import Investor from "./Investor";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import { ReactComponent as Close } from "../media/close.svg";


function HomePage() {

    function initialDynamicSetup() {
        if (document.location.href.split('/')[3] === "join-us")
            return;
        if (document.location.hash === "") {
          var scrollDistance = Math.ceil(document.documentElement.scrollTop);
          console.log(scrollDistance);
          if (scrollDistance === 0) {
            document.querySelector("#navmenu li a").classList.add('active');
          } else {
            var links = document.getElementById("navmenu").getElementsByTagName("a");
            if (links.length > 0) {
                var prev = links[0];
                if (document.getElementById(prev.id.replace('a-', '')).offsetTop <= scrollDistance) {
                    prev.classList.add('active');
                }
                for (let i = 1; i < links.length; i++) {
                    const link = links[i];
                    if (link.id.replace('a-', '') === 'join-us'){
                        break;
                    }
                    if (document.getElementById(link.id.replace('a-', '')).offsetTop > scrollDistance) {
                        break;
                    }
                    prev.classList.remove('active');
                    link.classList.add('active');
                    prev = link;
                }
            }
          }
        } else {
          if (document.getElementById(document.location.hash.replace('#', '')) != null) {
            document.getElementById('a-' + document.location.hash.replace('#', ''))
            .classList.add('active');
          }
        }
    }
    
    function onScrollListener() {
        // var scrollDistance = Math.ceil(document.querySelector("#root > div").scrollTop);
        var scrollDistance = Math.ceil(document.documentElement.scrollTop);
        console.log(scrollDistance);
        if (document.getElementById("navmenu") !== null){
            var links = document.getElementById("navmenu").getElementsByTagName("a");
        }
        
        Array.from(links).forEach((link) => {
            if(link.id.replace('a-', '') !== 'join-us'){
                if (document.getElementById(link.id.replace('a-', '')).offsetTop <= scrollDistance) {
                    var activeLink = document.querySelector("#navmenu li a.active");
                    if (activeLink !== null) {
                        activeLink.classList.remove('active');
                        link.classList.add('active');
                    }
                }
            }
        });
    }

    function closeDiv() {
        document.getElementById("jk-details").style.display = "none";
    }
    window.addEventListener("load", initialDynamicSetup);
    window.addEventListener("scroll", onScrollListener);
    return (
        <div>
            <div className="toggle" id="jk-details">
                <label onClick={closeDiv}><Close /></label>
                <div id="jk-text">
                    <p>J. Krishnan, is an alumnus of I.I.T. Madras and I.I.M. Calcutta. He has been involved with the
                    I.T. Industry in India since 1985 and has been part of the core group/promoters of various startup
                    companies (Computer Point, MicroLand). He was adviser to Satyam Infoway Limited (SIFY)
                    between 1997 &amp; 2002 and was part of the Road-show team during SIFY’s IPO and listing on the
                    NASDAQ.</p><br />
                    <p>JK started his own software development company called NetLink Technologies in 1992. He
                    successfully exited this venture when it was acquired by Deccan Chronicle. As part of Deccan
                    Chronicle’s initiatives, JK was instrumental in successfully bidding for an IPL Franchise
                    (Deccan Chargers), acted as the CEO of Deccan Chargers for the 2008 season and was part of
                    the team management in the 2009 season.</p><br />
                    <p>JK promoted UniMity Solutions in 2011, with focus on Content Management Systems, providing
                    solutions for Online Communities, Social Workspaces, Media and E-Commerce domains.
                    A Rotarian since 1986, he is the Past President of the Rotary Club of Madras Central Aadithya.
                    An active sports enthusiast, he has led the Rotary cricket team to UK, Australia, New Zealand,
                    Sri Lanka and South Africa.</p><br />
                    <p>JK is the Past President of the IIM Calcutta Alumni Chennai Chapter, and is a Charter Member
                    &amp; former Vice President of TiE Chennai. As part of TiE Chennai’s initiatives, JK is involved as
                    a mentor/advisor for various start-ups and young entrepreneurs.</p>
                </div>
            </div>        
            <Home />
            <WhatWeDo />
            <Product />
            <TechnologyDetail />
            <WhoWeAre />
            <Investor />
            <Contact />
        </div>
    )
}

export default HomePage;