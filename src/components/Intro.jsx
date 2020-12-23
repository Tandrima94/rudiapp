import React from "react";
import logo from "../media/logo_mockup.jpg";

function Intro() {
    return (
        <div className="intro">
            <img src = {logo} alt="aavrtti-logo"/>
            <div id = "moto">
                <p>SEE THE UNSEEN</p>
            </div>
        </div>
    )
    
}

export default Intro;