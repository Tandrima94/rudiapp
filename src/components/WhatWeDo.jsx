import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import locateImg from "../media/locate.jpg";
import identifyImg from "../media/identify.jpg";
import mapImg from "../media/map.jpg";

function WhatWeDo() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div id="what-we-do">
            <div className="what-we-do-item" id="locate">
                <div id = "aos-loc"> {/*data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src = {locateImg} />
                </div>
                <div className= "what-we-do-details" id="what-we-doLocate"> {/*data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    Our flagship product RUDI (Radar for Utility Detection and Imaging) not only detects 
                    but also locates, identifies and maps buried utilities on the go.
                </div>
            </div>
            <div className="what-we-do-item" id="identify">
                <div id = "aos-iden"> {/*data-aos="zoom-out" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src = {identifyImg} />
                </div>
                <div className= "what-we-do-details" id="what-we-doIdentify"> {/*data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200">*/}
                orem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Integer quis dui sapien. In eu ex non ligula tincidunt volutpat sed ac lorem.
                
                </div>
            </div>
            <div className="what-we-do-item" id="map">
                <div id="aos-map"> {/*data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    <img src={mapImg} />
                </div>
                <div className="what-we-do-details" id="what-we-doMap"> {/*data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                orem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis dui sapien. In eu ex non ligula tincidunt volutpat sed ac lorem. 
                
                </div>
            </div>
        </div> 
    )
}

export default WhatWeDo;