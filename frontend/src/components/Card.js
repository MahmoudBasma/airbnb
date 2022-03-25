import React from "react";
import imag from "../images/cathy.png"
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={imag} className="card--image"></img>
            <div className="card-status">
                <img src = {star} className="card--star"></img>
                <span >5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span> / person</p>
        </div>
    )
}