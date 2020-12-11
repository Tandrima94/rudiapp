import React from "react";
import Members from "../components/Members";
import pragyanImg from "../media/pragyan.png";
import kavithaImg from "../media/kavitha.jpg";
import cvkImg from "../media/cvk.jpg";
import jkImg from "../media/jkrishnan.jpg";
import priyaImg from "../media/priya.jpg";
import tandrimaImg from "../media/tandrima.jpg";
// import 'aos/dist/aos.css';


function WhoWeAre() {
    function closeDiv() {
        document.getElementById("jkDetails").style.display = "none";
    }
    return (
        <div id="who-we-are">
            {/* <div id="team-heading">Who We Are</div> */}
            {/* <div id="separator"></div> */}
            <div className="member-row">
                <div className="each-row">
                    <Members 
                        img = {pragyanImg}
                        name="Pragyan Prasu Patnaik"
                        position="Founder & Director"
                        recognition="Alumnus, IIT Madras"
                        profile="https://www.linkedin.com/in/pragyanprasupatnaik/" />

                    <Members 
                        img = {cvkImg}
                        name="Dr C V Krishnamurthy"
                        position="Technical Advisor"
                        recognition="Professor, IIT Madras"
                        profile="https://physics.iitm.ac.in/cvkm" />

                    <Members 
                        img = {kavithaImg}
                        name="Dr Kavitha Arunachalam"
                        position="Technical Advisor"
                        recognition="Professor, IIT Madras"
                        profile="https://ed.iitm.ac.in/~akavitha/" />
                </div>
                <div className="each-row">
                    <Members 
                        img = {jkImg}
                        name="J Krishnan"
                        position="Business Mentor"
                        recognition="Alumnus, IITM & IIMC" />
                    {/* <div className="toggle" id="jkDetails" onClick={closeDiv}>
                        <div id="jkText">
                            J. Krishnan, is an alumnus of I.I.T. Madras and I.I.M. Calcutta. He has been involved with the
                            I.T. Industry in India since 1985 and has been part of the core group/promoters of various startup
                            companies (Computer Point, MicroLand). He was adviser to Satyam Infoway Limited (SIFY)
                            between 1997 &amp; 2002 and was part of the Road-show team during SIFY’s IPO and listing on the
                            NASDAQ.
                            JK started his own software development company called NetLink Technologies in 1992. He
                            successfully exited this venture when it was acquired by Deccan Chronicle. As part of Deccan
                            Chronicle’s initiatives, JK was instrumental in successfully bidding for an IPL Franchise
                            (Deccan Chargers), acted as the CEO of Deccan Chargers for the 2008 season and was part of
                            the team management in the 2009 season.
                            JK promoted UniMity Solutions in 2011, with focus on Content Management Systems, providing
                            solutions for Online Communities, Social Workspaces, Media and E-Commerce domains.
                            A Rotarian since 1986, he is the Past President of the Rotary Club of Madras Central Aadithya.
                            An active sports enthusiast, he has led the Rotary cricket team to UK, Australia, New Zealand,
                            Sri Lanka and South Africa.
                            JK is the Past President of the IIM Calcutta Alumni Chennai Chapter, and is a Charter Member
                            &amp; former Vice President of TiE Chennai. As part of TiE Chennai’s initiatives, JK is involved as
                            a mentor/advisor for various start-ups and young entrepreneurs.
                        </div>
                    </div> */}
                </div>
                <div className="each-row">
                    <Members 
                        img={priyaImg}
                        name="Sadanala Sripriya"
                        position="Design Engineer"
                        profile="https://www.linkedin.com/in/sripriya-sadanala5892/" />
                        

                    <Members 
                        img={tandrimaImg}
                        name="Tandrima Bhattacharjee"
                        position="Software Developer"
                        profile="https://www.linkedin.com/in/tandrima-bhattacharjee-508508144/" />
                </div>
                
            </div>
            
        </div>
    )
}

export default WhoWeAre;