import React from 'react'
import './home.css'
import Card from '../Card/card'
import Navbar from '../navbar/navbar'
import amb from '../imgs/amb.png'
import user from '../imgs/user.png'
import { Link } from 'react-router-dom';


export default function Home() {
    // let amb = '/src/components/imgs/loginbg.png'
    return (
        <div className="o-home">
          <Navbar></Navbar>
            <div className="Cards">
            <Link to={'/busquedaA'}><Card title={"Ambulancia"} img={amb}  ></Card></Link>
            <Link to={'/busquedaU'}><Card title={"Usuarios"} img={user}></Card></Link>
                
            </div>
        </div>


    )
}