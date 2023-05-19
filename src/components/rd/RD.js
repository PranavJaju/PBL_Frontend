import React from 'react'
import logo1 from './../images/logo1.jpg';
import logo2 from './../images/logo2.jpg';
import './RD.css'

export default function RD() {
  return (
    <div>
       <button><img src={logo1} className="logo logo1" alt="..." /></button>
       <button><img src={logo2} className="logo logo2" alt="..." /></button>
    </div>
  )
}
