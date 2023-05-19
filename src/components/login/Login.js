import React, { useState, useEffect } from "react";
import './Login.css'
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import logo2 from "../images/logo2.png"

const Login = ({ setUserState }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        email: "",
        password: "",
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
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        return error;
    };

    const loginHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        fetch("/SignIn", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        console.log(JSON.stringify(user))   
             
        setIsSubmit(true);
        // if (!formErrors) {

        // }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            axios.post("#", user).then((res) => {
                alert(res.data.message);
                setUserState(res.data.user);
                navigate("/", { replace: true });
            });
        }
    }, [formErrors]);
    return (
        <div className="login-box">
            <div className="login-image">
                <img src={logo2} alt="" />
            </div>
            <div className="LoginContainer">
                <form>
                    <h1>Login</h1>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={changeHandler}
                        value={user.email}
                    />
                    <p className="pass">{formErrors.email}</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={changeHandler}
                        value={user.password}
                    />
                    <p className="password">{formErrors.password}</p>
                    <button type="submit" onClick={loginHandler}>
                        Login
                    </button> <br></br>
                    <NavLink to="/signup">Not yet registered? Register Now</NavLink>
                </form>

            </div>
        </div>

    );
};
export default Login;