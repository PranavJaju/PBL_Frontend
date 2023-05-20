import React, { useState } from "react";
import "./Donation.css";
import { NavLink } from "react-router-dom";
import Cards from "../cards/Cards";
import logo from "../images/logo.png";

const Donation = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    tag: "",
    date: "date",
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
    <div>
      <div className="DonationContainer">
        <div className="logo-section">
          <img src={logo} alt="..." />
        </div>

        <div className="inputcontainer">
          <h1>Donation page</h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input_group">
              <label htmlFor="name">Food name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                placeholder="Food name"
                onChange={changeHandler}
              />
            </div>
            <div className="input_group">
              <label htmlFor="date">Expiry Date</label>
              <br />
              <input
                type="date"
                name="date"
                id="date"
                value={user.date}
                onChange={changeHandler}
              />
            </div>
            <div className="input_group">
              <label htmlFor="date">Quantity</label>
              <br />
              <input
                type="Number"
                name="quantity"
                id="quantity"
                value={user.quantity}
                placeholder="No of People it can feed"
                onChange={changeHandler}
              />
            </div>
            <div className="input_group">
              <label htmlFor="tag">Food Item</label>
              <br />
              <input
                type="text"
                name="tag"
                id="tag"
                value={user.tag}
                placeholder="e.g.Curry,Chapati"
                onChange={changeHandler}
              />
            </div>
            <NavLink to="/success">
              <button type="submit" className="submit-btn1">
                Submit &nbsp;<i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
            </NavLink>
          </form>
        </div>
      </div>
      <div className="active_donations">
      <div className="heading-active">
        <h1>ACTIVE DONATIONS </h1>
      </div>
      <div className="prev-donations"> 
        <Cards />
        <Cards />
        <Cards />
      </div>
      </div>


    </div>
  );
};

export default Donation;
