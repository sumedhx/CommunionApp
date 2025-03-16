import React from "react";

const FeedbackCard = ({desc,name="John",country="India"})=> {
    return(
        <div className="feedbackCard">
            <span>
                <p>{desc}</p>
                <div className="user">
                    <h3>{name}</h3>
                    <p>{country}</p>
                </div>
            </span>
        </div>
    )
}

export default FeedbackCard;