import React from 'react'
import './card.css'

export default function Card (props){
    return(
        <div className="o-card-container">

        <p>{props.title}</p>
        <div className="o-card">
            <img/>
        </div>

    </div>
    )
}