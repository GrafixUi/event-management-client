import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./Component/navbar/Navbar"
import Home from './pages/home/Home';
import List from './pages/list/List';
import Events from './pages/singleEvent/events'
import About from "./pages/about/About"
import Eventselection from './pages/eventselection/Eventselection';
import Booking from './pages/booking/Booking';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<List/>} />
        <Route path='/events/:id' element={<Events/>} />
        <Route path='/about' element={<About />} />
        <Route path='/eventpage' element={<Eventselection />} />
        <Route path='/booking' element={<Booking/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
