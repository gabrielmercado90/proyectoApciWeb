import React from 'react'
import './busq.css'
import OButton from '../button/button'
import Navbar from '../navbar/navbar'
import { FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';


export default function Busqueda(props) {
    return (
        <div>

            <Navbar></Navbar>
            <div className='O-contenteR'>
                <img className="img" src={props.img} />
               

            </div>
        </div>

    )



}

