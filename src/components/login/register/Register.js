import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        name: "",
        email: "",
        mobile: Number,
        password: "",
        address:"",
        cpassword: "",
        latitude:Number,
        longitude:Number
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            error.name = "Name is required";
        } else if (values.name.length < 4) {
            error.name = "Name must be of minimum 3 characters";
        }
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email format!";
        }
        if (!values.mobile) {
            error.mobile = "mobile is required";
        }
        else if (values.mobile.length !== 10) {
            error.mobile = "mobile must be of 10 digits";
        } else
            if (!values.password) {
                error.password = "Password is required";
            } else if (values.password.length < 4) {
                error.password = "Password must be more than 4 characters";
            } else if (values.password.length > 10) {
                error.password = "Password cannot exceed more than 10 characters";
            }
        if (!values.cpassword) {
            error.cpassword = "Confirm Password is required";
        } else if (values.cpassword !== values.password) {
            error.cpassword = "Confirm password and password should be same";
        }
        return error;
    };

    function getLocation() {
        navigator.geolocation.getCurrentPosition(FetchPosition);
    }

    function FetchPosition(position) {
        user.latitude=position.coords.latitude;
        user.longitude=position.coords.longitude;
    }

    const signupHandler = (e) => {
        e.preventDefault();
        getLocation();

        console.log(user);
        setFormErrors(validateForm(user));

        fetch("/SignUp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        setIsSubmit(true);
        if (!formErrors) {
            setIsSubmit(true);
        }
    };

    return (
        <>
            <div className="RegisterContainer">
                <form>
                    <h1>Create your account</h1>
                    <p className="name">{formErrors.name}</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={changeHandler}
                        value={user.name}
                    />
                    <p className="email">{formErrors.email}</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={changeHandler}
                        value={user.email}
                    />
                    <p className="phone">{formErrors.mobile}</p>
                    <input
                        type="Number"
                        name="mobile"
                        id="mobile"
                        placeholder="Mobile Number"
                        onChange={changeHandler}
                        value={user.mobile}
                    />
                    <p className="pass">{formErrors.password}</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={changeHandler}
                        value={user.password}
                    />
                    <p className="pass">{formErrors.cpassword}</p>
                    <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm Password"
                        onChange={changeHandler}
                        value={user.cpassword}
                    />
                    <p className="address">{formErrors.address}</p>
                    <input
                        type="string"
                        name="address"
                        id="address"
                        placeholder="Address"
                        onChange={changeHandler}
                        value={user.address}
                    />
                    <button type="submit" onClick={signupHandler}>
                        Register
                    </button>
                </form>
                <NavLink to="/login">Already registered? Login</NavLink>
            </div>
        </>
    );
};
export default Register;