import React, { useState } from 'react'
import './cool.styles.css'


const Friend = ({ name , email , role}) => {
    return (
        <div>
            <h1>{name}</h1>
            <span>{`EMAIL: ${email} ROLE: ${role}`}</span>
        </div>
       
   
    )
}

export default Friend