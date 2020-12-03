import React from 'react'
import './home.css'
import Card from '../Card/card'


export default function Home() {
    return (
        <div className="o-home">
            <div className="o-top">
                <p>Información de los nodos</p>
                <a href="#"><p>Cerrar sesión</p></a>
            </div>
            <div className="Cards">
                <Card title={"Ambulancia"}></Card>
                <Card title={"Usuarios"}></Card>
            </div>
        </div>


    )
}