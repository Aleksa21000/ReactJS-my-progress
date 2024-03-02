import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootPage from './pages/Root';
import RootEventsPage from './pages/RootEvents';
import Homepage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: 'events',
				element: <RootEventsPage />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: async () => {
							const response = await fetch('http://localhost:8080/events');

							if (!response.ok) {
								// ...
							} else {
								const resData = await response.json();
								return resData.events;
							}
						},
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