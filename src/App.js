import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/friendsList';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';
import { Select, MenuItem } from '@material-ui/core';
import * as Yup from "yup";
import axios from 'axios'





const formSchema = Yup.object().shape({
	email: Yup
		.string()
		.email("Must be a valid email address.")
		.required("Must include email address."),
	password: Yup
		.string()
		.min(6, "Passwords must be at least 6 characters long.")
		.required("Password is Required"),
  	terms: Yup
		.boolean()
		.oneOf([true], "You must accept Terms and Conditions")
	// required isn't required for checkboxes.
});



function App() {
	let [ friends, setFriends ] = useState([]);

	const getUsers = () => {
		axios.get('https://reqres.in/api/users/')
		.then((res) => res.data.data)
		.then(data => {
			setFriends(data)
		}).catch(() => {
			alert('Mission failed, we\'ll get them next time')
		})
	}
	const postUser = user => {
		axios.post('https://reqres.in/api/users/', user)
		.then((res) => {
			console.log(res.data)
			setFriends([...friends, res.data])
		})
		.catch()
	}

	useEffect( () => {
		 getUsers()
	},[])


	return (
		<div className="">
			<Route exact path="/" render={(props) => <Form history={props.history} friends={friends} setFriends={setFriends} postUser={postUser}/>} />
			<Route path="/team" render={() => <FriendsList friends={friends} />} />
		</div>
	);
}

export default App;
