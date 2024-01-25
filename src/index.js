import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import List from './pages/eventlist/eventlist';
import Confirmbooking from './component/confirmbooking/Confirmbooking';
import Eventselection from "./component/eventselection/Eventselectionn"
import Movieselection from './component/movieselection/Movieselection';
import About from "./pages/about/About";
import Register from './component/register/Register';
import Login from './component/login/Login';
import Vendorlogin from './component/vendorlogin/Vendorlogin';
import Contact from './pages/contact/Contact';
import Confirmticket from './component/confirmticket/Confirmticket';
import Moviesticket from './component/moviestickets/Moviesticket';
import Eventticket from "./component/eventticket/Eventticket";
import Movieslist from './pages/movieslist/Movieslist';
import Venuelist from './pages/venuelist/Venuelist';
import Organizer from "./component/organizer/Organizer";
import ConfirmMovieTicket from './component/confirmmovieticket/ConfirmMovieTicket';
import Favorites from './component/favorites/Favorites';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/eventslist",
    element: <List />,
  },
  {
    path: "/movieslist",
    element: <Movieslist />,
  },
  {
    path: "/venuelist",
    element: <Venuelist />,
  },
  {
    path: "/eventselection",
    element: <Eventselection />,
  },
  {
    path: "/movieselection",
    element: <Movieselection />,
  },
  {
    path: "/eventticket",
    element: <Eventticket />,
  },
  {
    path: "/moviesticket",
    element: <Moviesticket />,
  },
  {
    path: "/confirmticket",
    element: <Confirmticket />,
  },
  {
    path: "/confirmmovieticket",
    element: <ConfirmMovieTicket />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/confirmbooking",
    element:<Confirmbooking/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/vendorlogin",
    element: <Vendorlogin />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/organizer",
    element: <Organizer />
  },
  {
    path:"/favorites",
    element: <Favorites />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

