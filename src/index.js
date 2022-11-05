import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Services from './routes/Services';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route>
				<Route index={true} element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='services' element={<Services />} />
			</Route>
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
