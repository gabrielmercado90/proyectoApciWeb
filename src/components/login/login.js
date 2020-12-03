import React from 'react'
import './login.css'
import OButton from '../button/button'
import { Link, useHistory } from 'react-router-dom';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';




export default function Login() {
    const history = useHistory()
    const handleOnSubmit = () => {
        history.push(`/Home`);
    }
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
            <OButton label={"Ingresar"} onClick={handleOnSubmit}></OButton>
        </div>
        </div>

    )
}