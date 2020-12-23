import React from "react";
// import AOS from "aos";
// import 'aos/dist/aos.css';
import locateImg from "../media/locate.jpg";
import identifyImg from "../media/identify.jpg";
import mapImg from "../media/map.jpg";

function WhatWeDo() {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // });
    return (
        <div id="what-we-do" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <div><b><i>Never miss or hit any utility</i></b></div>
            <div>
            <div className="what-we-do-item" id="locate">
                <div id = "aos-loc"> {/*data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src = {locateImg} alt="locate-img" />
                </div>
                <div className= "what-we-do-details" id="what-we-doLocate"> {/*data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    Our flagship product RUDI (Radar for Utility Detection and Imaging) not only detects 
                    but also locates, identifies and maps buried utilities on the go.
                </div>
            </div>
            <div className="what-we-do-item" id="identify">
                <div id = "aos-iden"> {/*data-aos="zoom-out" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src = {identifyImg} alt="identify-image"/>
                </div>
                <div className= "what-we-do-details" id="what-we-doIdentify"> {/*data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200">*/}
                    Using our technical expertise in Electromagnetics Non-Destructive Evaluation (NDE), we provide services 
                    for underground inspection and monitoring of pipe leakage and detection, localization of cable fault, identification of dead and live cables.
                
                </div>
            </div>
            <div className="what-we-do-item" id="map">
                <div id="aos-map"> {/*data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src={mapImg} alt="map-image"/>
                </div>
                <div className="what-we-do-details" id="what-we-doMap" style={{lineHeight: '3vh'}}> {/*data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                <p>Antenna design and development</p><br />
                <p>Antenna selection for GPR</p><br />
                <p>GPR software assistance</p><br />
                <p>Advance signal processing of GPR signals</p>
                
                </div>
            </div>
            </div>
        </div> 
    )
}

export default WhatWeDo;