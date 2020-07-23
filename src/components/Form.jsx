import React, { useState, useEffect } from 'react';
import './cool.styles.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';

import * as Yup from 'yup';

const Form = ({ friends, setFriends, postUser }) => {
	const formSchema = Yup.object().shape({
		first_name: Yup.string(),
		email: Yup.string().email('Must be a valid email address.').required('Must include email address.'),
		password: Yup.string().min(6, 'Passwords must be at least 6 characters long.').required('Password is Required')
	});

	let schema = Yup.string();

	schema.isValid('hello word').then((valid) => console.log(valid));

	let [ formValues, setFormValues ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	});

	const [ errors, setErrors ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		e.persist();
		Yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors[0]
				});
			});

		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		formSchema.isValid(formValues).then((valid) => {
			if (valid) {
				postUser(formValues);
			}
			if (!valid) {
				alert('Not valid');
			}
		});
	}

	return (
		<div className="form-container">
			<h1>Team Builder</h1>
			<form className="form" onSubmit={handleSubmit}>
				<TextField type="text" name="first_name" id="name" label="name" onChange={handleChange} />

				<TextField type="email" name="email" id="name" label="email" onChange={handleChange} />
				<TextField type="password" name="password" id="name" label="password" onChange={handleChange} />

				{/* <Button type="submit" value="Submit" onSubmit={handleSubmit} color='primary'>Add Teammate</Button> */}
				<div className="checkbox">
					<InputLabel label="chek">I accept</InputLabel>
					<Checkbox
						labelid="chek"
						className="check"
						value="checkedA"
						inputProps={{ 'aria-label': 'Checkbox A' }}
					/>
				</div>
				{errors.email.length > 0 ? <p>{errors.email}</p> : null}
				{errors.password.length > 0 ? <p>{errors.password}</p> : null}

				<Button type="submit" variant="contained" color="secondary">
					Add User
				</Button>
			</form>
			<Link className="bottom-link" to="/team">
				<Button>VIEW TEAMMATES</Button>
			</Link>
		</div>
	);
};

export default Form;
