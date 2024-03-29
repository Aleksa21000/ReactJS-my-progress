import React, { useState, useRef } from "react";

import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();

		const enteredUsername = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)",
			});

			return;
		}
		if (enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (more then 0)",
			});

			return;
		}

		const userData = {
			name: enteredUsername,
			age: enteredAge,
			id: Math.random().toString(),
		};

		props.onAddUser(userData);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const setErrorHandler = () => {
		setError();
	};

	return (
		<Wrapper>
			{error && <ErrorModal title={error.title} message={error.message} onErrorCancel={setErrorHandler} />}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
