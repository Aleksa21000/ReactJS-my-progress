import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import Homepage from './pages/Home';
import RootEventsPage from './pages/RootEvents';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: 'events',
				element: <RootEventsPage />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{ index: true, element: <EventDetailPage />, action: deleteEventAction },
							{ path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
						],
					},
					{ path: 'new', element: <NewEventPage />, action: manipulateEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
