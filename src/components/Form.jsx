import React, { useState } from 'react'
import './cool.styles.css'

const Form = ({ setFriends, friends }) => {
    let inputValues = {
        name:'',
        email: '',
        role: ''
    }


    function handleSubmit(e) {
        e.preventDefault()
        setFriends([...friends, inputValues])

    }
    function handleChange(e) {
        inputValues[e.target.name] = e.target.value
        console.log(inputValues)
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" id="name" placeholder="Enter a Name" onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input type="email" name="email" id="email" placeholder='email' onChange={handleChange}/>

            <label htmlFor='roles'>Roles</label>
            <select id='roles' onChange={handleChange} name='role'>
                <option>frontend</option>
                <option>backend</option>
                <option>fullstack</option>
            </select>
            <input type="submit" value="Submit" onSubmit={handleSubmit}/>
        </form>
    )
}

export default Form