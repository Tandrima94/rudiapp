import React from "react";
import pragyanImg from "../media/pragyan.png";
import kavithaImg from "../media/kavitha.jpg";
import cvkImg from "../media/cvk.jpg";
import priyaImg from "../media/priya.jpg";
import tandrimaImg from "../media/tandrima.jpg";
import 'aos/dist/aos.css';


function WhoWeAre() {
    return (
        <div id="who-we-are">
            <div id="team-heading">Our Team</div>
            <div id="separator"></div>
            <div className="member-row">
                <div className="each-row">
                    <div className="team-members" id="pragyan" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <img src={pragyanImg} />
                        <div className="member-details">
                            <p><b>Pragyan Prasu Patnaik</b></p>
                            <p>Founder & Director, Aavrtti Technologies</p>
                            <p>Alumnus, IIT Madras</p>
                        </div>
                    </div>
                    <div className="team-members" id="cvk" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <img src={cvkImg} />
                        <div className="member-details">
                            <p><b>Dr C V Krishnamurthy</b></p>
                            <p>Technical Advisor, Aavrtti Technologies</p>
                            <p>Professor, IIT Madras</p>
                        </div>
                    </div>
                    <div className="team-members" id="kavitha" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <img src={kavithaImg} />
                        <div className="member-details">
                            <p><b>Dr Kavitha Arunachalam</b></p>
                            <p>Technical Advisor, Aavrtti Technologies</p>
                            <p>Professor, IIT Madras</p>
                        </div>
                    </div>
                </div>
                <div className="each-row">
                    <div className="team-members" id="priya" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                            <img src={priyaImg} />
                            <div className="member-details">
                                <p><b>Sadanala Sripriya</b></p>
                                <p>Design Engineer, Aavrtti Technologies</p>
                            </div>
                    </div>
                    <div className="team-members" id="tandrima" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                            <img src={tandrimaImg} />
                            <div className="member-details">
                                <p><b>Tandrima Bhattacharjee</b></p>
                                <p>Software Developer, Aavrtti Technologies</p>
                            </div>
                    </div>
                </div>
                

                {/* <span>
                    <div className="team-members" id="kavitha" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <img src={kavithaImg} />
                        <div className="member-details">
                            <p><b>Dr Kavitha Arunachalam</b></p>
                            <p>Technical Advisor, Aavrtti Technologies</p>
                            <p>Professor, IIT Madras</p>
                        </div>
                    </div>
                    <div className="team-members" id="kavitha" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <img src={kavithaImg} />
                        <div className="member-details">
                            <p><b>Dr Kavitha Arunachalam</b></p>
                            <p>Technical Advisor, Aavrtti Technologies</p>
                            <p>Professor, IIT Madras</p>
                        </div>
                    </div>
                </span> */}
            </div>
            
        </div>
    )
}

export default WhoWeAre;