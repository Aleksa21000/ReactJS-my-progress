import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
	const onAddMeetupHandler = (enteredData) => {
		console.log(enteredData);
	};

	return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetup;
