import React from 'react'
import './card.css'
import OButton from '../button/button'
import { Link, useHistory } from 'react-router-dom';

export default function Card (props){
    const history = useHistory()
    const handleOnSubmit = () => {
        history.push(`/resultado`);
    }
    return(
        <div className="o-card-container">
        <p>{props.title}</p>
        <div className="o-card">
            <img className="o-card-ims" src={props.img}/>
        </div>

    </div>
    )
}