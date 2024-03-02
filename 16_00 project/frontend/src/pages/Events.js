import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
	{ id: 'e1', title: 'First Element' },
	{ id: 'e2', title: 'Second Element' },
];

const EventsPage = () => {
	return (
		<>
			<h1>EventsPage</h1>
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li key={event.id}>
						<Link to={event.id}>{event.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default EventsPage;
