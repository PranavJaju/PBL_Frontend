import React from 'react'
import logo2 from './../images/logo2.jpg'
import './Description.css'

export default function Description() {
  return (
    <div>
        <img src={logo2} className="logo logo2" alt="..." />
        <div className="description">
          <paragraph>Hello this is description of our website!!!</paragraph>
        </div>
    </div>
  )
}
