import Donation from './components/donate/Donation'
import Register from './components/login/register/Register'
import Profile from './components/login/Profile';
import Login from './components/login/Login'
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import React from 'react';
import Receive from './components/receive/Receive'
import Success from './components/success/Success'
import { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/#" element={
          userstate && userstate._id ? (
            <Profile
              setUserState={setUserState}
              username={userstate.fname}
            />
          ) : (
            <Login setUserState={setUserState} />
          )
        }></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/donate" element={<Donation />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/receive" element={<Receive/>}></Route>
        <Route exact path="/success" element={<Success />}></Route>
        <Route exact path="/login" element={<Login setUserState={setUserState} />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
