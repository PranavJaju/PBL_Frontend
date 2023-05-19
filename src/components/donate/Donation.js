import React, { useState } from 'react';
import './Donation.css';
import { NavLink } from "react-router-dom"
import Cards from "../cards/Cards"


    const Donation = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        name: "",
        tag: "",
        date:"date",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

           setIsSubmit(true);
        // if (!formErrors) {
        //    setIsSubmit(true);
        //  }
    };
    
    return (
        <div className="DonationContainer">
            <div className="headbar">
                <h1>Donation page</h1>
            </div>

            <div className="inputcontainer">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name" >Food name</label>
                        <input type="text" name="name" id="name" value={user.name}  placeholder="Food name" onChange={changeHandler}/>
                    </div>    
                    <div className="input-group">
                        <label htmlFor="date" >Expiry Date</label>
                        <input type="date" name="date" id="date" value={user.date} onChange={changeHandler}/>
                    </div>  
                    <div className="input-group">
                        <label htmlFor="date" >Quantity</label>
                        <input type="Number" name="quantity" id="quantity" value={user.quantity} onChange={changeHandler}/>
                    </div>  
                    <div className="input-group">
                        <label htmlFor="tag" >Tag</label>
                        <input type="text" name="tag" id="tag" value={user.tag}  placeholder="e.g.Curry,Chapati" onChange={changeHandler}/>
                    </div>  
                    <button type="submit" className="submit-btn">
                    <NavLink to="/success">Submit</NavLink>
                    </button>
                </form>
            </div>

            <div className="Expired/prev-donations">
                <Cards/>
            </div>
        </div>
    )
}

export default Donation