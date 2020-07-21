import React, {useState} from 'react'
import Friend from './friend'
import './cool.styles.css'

const FriendsList = ({friends}) => {
    return(
        <div className="friends-list">
            {friends.map((person) => {
                return <Friend 
                        name={person.name} 
                        email={person.email} 
                        role ={person.role}>
                        </Friend>
                
            })}
        </div>
    )
}

export default FriendsList