import React from "react";
import star from "../images/star.png"
export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText 
            && 
            <div className="card--badge"> {badgeText}</div>}
            
            <img src={require(`../images/${props.img}`)}
             className="card--image"></img>
            <div className="card-status">
                <img src = {star} className="card--star"></img>
                <span >{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span> / person</p>
        </div>
    )
}