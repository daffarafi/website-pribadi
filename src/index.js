import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
