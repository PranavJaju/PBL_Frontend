import React from "react";
import './Ca.css'

export default function Ca({ img, title, content }) {
    return (
        <div>
            <div className="total-card">
                <div className="imgadd">
                    <img src={img}></img>
                </div>
                <div className="cardcontent">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="body">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
