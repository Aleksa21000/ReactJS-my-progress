import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import Homepage from './pages/Home';
import RootEventsPage from './pages/RootEvents';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
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
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
