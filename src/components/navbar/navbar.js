import React from 'react'
import './navbar.css'



export default function Navbar (props){
    return(
        <div>
            <div className="o-top">
    <a href="/home">Información de los nodos {props.nodo}</a>
                <a href="/"><p>Cerrar sesión</p></a>
            </div>
        </div>

    )



}

