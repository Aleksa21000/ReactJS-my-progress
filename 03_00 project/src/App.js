import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [users, setUsers] = useState([]);

	const onAddUserHandler = (addedUser) => {
		setUsers(prevUsers => {
			return [addedUser, ...prevUsers];
		});
	}

	return (
		<div>
			<AddUser onAddUser={onAddUserHandler} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
