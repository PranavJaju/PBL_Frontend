import React from "react";
import './Cards.css'
import imag from '../images/itachi.jpg'


function Cards(promp) {

    function Handledonate() {
        alert("You are in My Genjustu")
    }
    return (
        <div className="cards">
            <div className="total-card">
                <div className="imgadd">
                    <img src={imag}></img>
                </div>
                <div className="cardcontent">
                    <div className="title">
                        <h3>Location: {promp.location}</h3>
                    </div>
                    <div className="body">
                        <h3>Time: {promp.time}</h3>
                    </div>
                    <div className="btn">
                        <button type="submit" className="submit-btn" onClick={Handledonate}>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Cards;
