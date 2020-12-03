import React from "react";
import supImg1 from "../media/sup1.png";
import supImg2 from "../media/sup2.jpg";
import supImg3 from "../media/sup3.png";
import supImg4 from "../media/sup4.png";
import recoImg1 from "../media/reco1.jpg";
import recoImg2 from "../media/reco2.jpg";
import recoImg3 from "../media/reco5.png";
import recoImg4 from "../media/reco6.jpg";

function Investor() {
    return (
        <div id= "investor">
            <p className="support-heading">Supported By</p>
            <div>
                <div className="investor-row">
                    <img src={supImg1} />
                </div>
                <div className="investor-row">
                    <img src={supImg2} />
                </div>
                <div className="investor-row" id="sine-logo">
                    <img src={supImg3} />
                </div>
                <div className="investor-row">
                    <img src={supImg4} />
                </div>
            </div>
            <p className="support-heading">Organised By</p>
            <div>
                <div className="investor-row second-row">
                    <img src={recoImg1} />
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg2} />
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg3} />
                </div>
                <div className="investor-row second-row">
                    <img src={recoImg4} />
                </div>
            </div>
        </div>
    )
}

export default Investor;