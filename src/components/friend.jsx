import React, { useState } from 'react'
import './cool.styles.css'


const Friend = ({ first_name , last_name , email }) => {
    return (
        <div>
            <div className="friend-container">
                    <div className="person-info">
                        <h2>{first_name} {last_name}</h2>
                        <span>({email})</span>
                </div>
                
            </div>
        </div>
       
       
   
    )
}

export default Friend