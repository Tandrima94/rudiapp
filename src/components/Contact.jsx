import React, { useEffect } from "react";
import iitrpImg from "../media/iitmrp.jpg_large";
import aavrtti_logo from "../media/aavrtti_logo.png";
import pragyanImg from "../media/pragyan.png";
import kavithaImg from "../media/kavitha.jpg";
import cvkImg from "../media/cvk.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ReactComponent as CallLogo } from "../media/call-outline.svg";
import { ReactComponent as MailLogo } from "../media/mail-outline.svg";
import { ReactComponent as HomeLogo } from "../media/home.svg";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Link } from "react-router-dom";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 12.990409030413858, lng:80.24227386443107 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div id="contact-main">
            <nav id="contact-nav">
                <div id = "contact-brand" className="navbar-brand">
                    <img src={aavrtti_logo} alt="Aavrtti Logo" />
                    <div>
                        <p>AAVRTTI</p>
                        <p>Technologies</p>
                    </div>
                </div>
                <div id="contact-home">
                    
                        <div id="home-logo"><HomeLogo /></div>
                        <Link to={"/"} ><p>Home</p></Link>
                    
                </div>
            </nav>
            <div id="contact-intro">

                <div id="contact-img"><img src={iitrpImg} /></div>
                <div id="contact-us">
                {/* data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">Contact Us</div> */}
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200"><p>Contact Us</p></div> 
                    <div id = "contact-detail" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                        <p>AAVRTTI Technologies</p>
                        <div id="address">
                            32, Kanagam Rd, Tharamani, Chennai, Tamil Nadu 600113
                        </div>
                        <div id="ph-mail">
                            <div className="logo">
                                <CallLogo />
                                <p>+91 72006 02200</p>
                            </div>
                            <div className="spacer"></div>
                            <div className="logo">
                                <MailLogo />
                                <p>pragyan@aavrtti.com</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="gmap" >
                    <WrappedMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>
            <div id="team">
                <div id="team-heading">Our Team</div>
                <div id="separator"></div>
                <div className="team-members" id="pragyan" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200">
                    <img src={pragyanImg} />
                    <div className="member-details">
                        <p><b>Pragyan Prasu Patnaik</b></p>
                        <p>Founder And Director, Aavrtti Technologies</p>
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
        </div>
        
    )
}

export default Contact;