import React from "react";
import './Success.css'
import Ca from "./Ca";
import "./Ca.css"
import "./styles.css"

export default function Success() {
    return (
        <div className="successful">
            <h1 className="head">Donation Successful</h1>
            <img src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="ok" />
            <Ca img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqGXuBuo2l-pwnebDE04mzyl_0xcG9LLTaQ&usqp=CAU" title="Thank You" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nam molestias sunt accusantium tempora provident, vitae magni sed reprehenderit dignissimos minus iure qui nisi impedit omnis a maiores, blanditiis quidem." />
            <Ca img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqGXuBuo2l-pwnebDE04mzyl_0xcG9LLTaQ&usqp=CAU" title="Thank You For Help" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nam molestias sunt accusantium tempora provident, vitae magni sed reprehenderit dignissimos minus iure qui nisi impedit omnis a maiores, blanditiis quidem." />
        </div>
    )
}
