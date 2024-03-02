import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
	const error = useRouteError();

	let title = 'An error occurred!',
		message = 'Something went wrong...';

	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = '404';
		message = 'Page is not found.';
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;
