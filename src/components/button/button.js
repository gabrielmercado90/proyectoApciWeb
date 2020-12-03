import React from 'react';
import './button.css'

function OButton({label, onClick}) {
    return (
        <button className="o-button" onClick={onClick}>{label}</button>
    );
}

export default OButton;