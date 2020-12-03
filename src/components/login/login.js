import React from 'react'
import './login.css'
import OButton from '../button/button'
import { FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';




export default function Login() {
    return (
        <div className="o-container-login">
        <div className="o-login">
            <h3>Inicio de sesión</h3>
            <div>
            <p>Cédula</p>
            <TextField
                    />
            </div>
            <div>
            <p>Contraseña</p>
            <TextField
             type={ 'password'}
                    />
            </div>
            <OButton label={"Ingresar"}></OButton>
        </div>
        </div>

    )
}