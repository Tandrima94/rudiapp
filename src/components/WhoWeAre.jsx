import React from "react";
import Members from "../components/Members";
import pragyanImg from "../media/pragyan.png";
import kavithaImg from "../media/kavitha.jpg";
import cvkImg from "../media/cvk.jpg";
import jkImg from "../media/jkrishnan.jpg";
import priyaImg from "../media/priya.jpg";
import tandrimaImg from "../media/tandrima.jpg";
import 'aos/dist/aos.css';


function WhoWeAre() {
    return (
        <div id="who-we-are">
            <div id="team-heading">Who We Are</div>
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