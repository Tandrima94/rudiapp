import React from "react";
import joinusImg from "../media/joinus.jpg";

function JoinUs() {
    return (
        <div id="join-us">
            <img style={{opacity: '20%'}} src={joinusImg} alt="join-us-img"/>
            <div id="join-us-details">
                <p>Join Our Team</p>
                <p style={{fontSize: '1rem'}}>If you are interested in being a part of our team</p>
                <p style={{fontSize: '1rem'}}>Send us your resume to</p>
                <a href="mailto:pragyan@aavrtti.com" style={{fontSize: '1rem'}, {color: 'deepskyblue'}}>pragyan@aavrtti.com</a>
            </div>
        </div>
    )
}

export default JoinUs;