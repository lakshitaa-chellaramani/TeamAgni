import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './Components/Signup';
import CalendarComponent from './Components/Calender';
import ChatApp from './Components/Chat';
import Chat from './Components/Chat'
import Calender from './Components/Calender'
import EventListing from './Components/EventListing';
import EventDetails from './Components/EventDetails';
import EventRegisteration from './Components/EventRegisteration';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/events" component={<EventListing/>} />

    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
