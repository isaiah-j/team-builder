import React, {useState} from 'react'
import Friend from './friend'
import './cool.styles.css'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core/'

const FriendsList = ({friends}) => {
    return(
        <div className="container">
        
            <h1 className='fl-h1'>Users</h1>

            <div className="friends-list">
                {friends.map((person) => {
                    let {first_name, last_name, email} = person
                    return <Friend
                        first_name={first_name}
                        last_name={last_name}
                        email={person.email}
                        role={person.role}>
                    </Friend>
                })}


            </div>
            <Link className="next-link" to="/">
                <Button>Add Teammate</Button>
            </Link>
        </div>
       
    )
}

export default FriendsList