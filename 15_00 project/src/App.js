import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import Products from './pages/Products';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products', element: <Products /> },
			{ path: '/products/:productId', element: <ProductDetailPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
