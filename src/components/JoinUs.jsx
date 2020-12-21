import React from "react";
import joinusImg from "../media/joinus.jpg";

function JoinUs() {
    return (
        <div id="join-us">
            <img style={{opacity: '20%'}} src={joinusImg} />
            <div id="join-us-details">
                <p>Join Our Team</p>
                {/* <div className="separator"></div> */}
                <p style={{fontSize: '1rem'}}>If you are interested in being a part of our team</p>
                {/* <div className="separator"></div> */}
                <p style={{fontSize: '1rem'}}>Send us your resume to</p>
                {/* <div className="separator"></div> */}
                {/* <p>Contact </p> */}
                <a href="mailto:pragyan@aavrtti.com" style={{fontSize: '1rem'}, {color: 'deepskyblue'}}>pragyan@aavrtti.com</a>
            </div>
        </div>
    )
}

export default JoinUs;