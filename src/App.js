import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './Components/Signup';
import CalendarComponent from './Components/Calender';
import ChatApp from './Components/Chat';
function App() {
  return (
    <>
    <BrowserRouter>
<ChatApp/>    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
