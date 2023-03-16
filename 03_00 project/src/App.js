import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [users, setUsers] = useState([]);

	const onAddUserHandler = (addedUser) => {
		setUsers((prevUsers) => {
			return [addedUser, ...prevUsers];
		});
	};

	return (
		<>
			<AddUser onAddUser={onAddUserHandler} />
			<UsersList users={users} />
		</>
	);
}

export default App;
