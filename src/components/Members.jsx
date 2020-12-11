import React from "react";
import { ReactComponent as Profile} from "../media/person-outline.svg";

function Members(props) {
    function toggleDiv(e) {
        e.preventDefault();
        // document.getElementById("jkDetails").classList.remove("display-none");
        document.getElementById("jk-details").style.display = "flex";
    }
    if (props.name== "J Krishnan") {
        return (
            <div
                className="team-members">
                {/*data-aos="zoom-in" 
                data-aos-duration="800" 
                data-aos-easing="ease-in-sine" 
                data-aos-delay="200"*/}
                <img src = {props.img} alt={props.name} />
                <div 
                    className="member-details">
                    <p><b>{props.name}</b></p>
                    <p>{props.position}</p>
                    <p>{props.recognition}</p>
                    <a href="#" onClick={toggleDiv}><Profile /></a>
                </div>
            </div>
        )
    }
    return (
        <div
            className="team-members">
            {/*data-aos="zoom-in" 
            data-aos-duration="800" 
            data-aos-easing="ease-in-sine" 
            data-aos-delay="200"*/}
            <img src = {props.img} alt={props.name} />
            <div 
                className="member-details">
                <p><b>{props.name}</b></p>
                <p>{props.position}</p>
                <p>{props.recognition}</p>
                <a href={props.profile} target="_blank"><Profile /></a>
            </div>
        </div>
    )
}

export default Members;