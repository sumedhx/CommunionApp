import React from "react";

const InfoCard = ({title,desc})=>{

    return(
        <div className="cardContainer">
            <h1 className="cardTitle">{title}</h1>
            <p className="cardDesc">{desc}</p>
        </div>
    )
}

export default InfoCard;