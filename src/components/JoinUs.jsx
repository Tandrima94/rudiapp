import React from "react";
import joinusImg from "../media/joinus.jpg";

function JoinUs() {
    return (
        <div id="join-us">
            <img src={joinusImg} />
            <div id="join-us-details">
                <p>Join Our Community</p>
                <div className="separator"></div>
                <p style={{fontSize: '1rem'}}>If you are interested in being a part of our team</p>
                <div className="separator"></div>
                <p style={{fontSize: '1rem'}}>Send us your resume to</p>
                <div className="separator"></div>
                {/* <p>Contact </p> */}
                <p style={{fontSize: '1rem'}}>pragyan@aavrtti.com</p>
            </div>
        </div>
    )
}

export default JoinUs;