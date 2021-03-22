import React from "react";
import supImg1 from "../media/sup1.png";
import supImg2 from "../media/sup2.jpg";
import supImg3 from "../media/sup3.png";
import supImg4 from "../media/sup4.png";
import recoImg1 from "../media/reco1.jpg";
import recoImg2 from "../media/reco2.jpg";
import recoImg3 from "../media/reco5.png";
import recoImg4 from "../media/reco6.jpg";
import dstImg from "../media/dst.jpg";
import newsImg1 from "../media/news-img.png";
function Investor() {
    return (
        <div id= "investor">
            <p className="support-heading">Supported By</p>
            <div>
                <div className="investor-row">
                    <img src={supImg1} alt="investor-img" />
                </div>
                <div className="investor-row">
                    <img src={supImg2} alt="investor-img"/>
                </div>
                <div className="investor-row" id="sine-logo">
                    <img src={supImg3} alt="investor-img"/>
                </div>
                <div className="investor-row">
                    <img src={supImg4} alt="investor-img"/>
                </div>
                <div className="investor-row">
                    <img src={dstImg} alt="dst-img"/>
                </div>
            </div>
            <p className="support-heading" style={{marginTop: '5vh'}}>Recognized By</p>
            <div>
                <div className="investor-row second-row">
                    <img src={recoImg1} alt="investor-img"/>
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg2} alt="investor-img"/>
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg3} alt="investor-img"/>
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg4} alt="investor-img"/>
                </div>
            </div>
            <p className="support-heading" style={{marginTop: '5vh'}}>In the news</p>
            <div>
                <div className="investor-row second-row">
                    <a href="https://www.startus-insights.com/innovators-guide/5-top-nondestructive-testing-ndt-solutions-impacting-engineering/" target="_blank"><img src={newsImg1} alt="news-img"/></a>
                </div>
            </div>
        </div>
    )
}

export default Investor;