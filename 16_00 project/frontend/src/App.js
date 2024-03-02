import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import Homepage from './pages/Home';
import RootEventsPage from './pages/RootEvents';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

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
							{ index: true, element: <EventDetailPage /> },
							{ path: 'edit', element: <EditEventPage /> },
						],
					},
					{ path: 'new', element: <NewEventPage />, action: newEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
