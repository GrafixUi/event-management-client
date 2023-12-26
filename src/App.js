import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/eventlist/eventlist';
import Eventselection from "../src/component/eventselection/Eventselectionn";
import Eventticket from "../src/component/eventticket/Eventticket";
import Confirmticket from './component/confirmticket/Confirmticket';
import Confirmbooking from './component/confirmbooking/Confirmbooking';
import Movieselection from './component/movieselection/Movieselection';
import Moviesticket from './component/moviestickets/Moviesticket';
import About from "./pages/about/About";
import Register from './component/register/Register';
import Login from './component/login/Login';
import Vendorlogin from './component/vendorlogin/Vendorlogin';
import Contact from './pages/contact/Contact';
import Movieslist from './component/movieslist/Movieslist';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<List />} />
        <Route path='/movielist' element={<Movieslist />} />
        <Route path='/eventselection' element={<Eventselection />} />
        <Route path='/eventticket' element={<Eventticket />} />
        <Route path='/moviesticket' element={<Moviesticket />} />
        <Route path='/movieselection' element={<Movieselection />} />
        <Route path='/confirmticket' element={<Confirmticket />} />
        <Route path='/booking' element={<Confirmbooking />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/vendorlogin' element={<Vendorlogin />} />
      </Routes>
  );
}

export default App;
