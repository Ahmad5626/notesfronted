import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Signup from './component/signup/Signup';
import Notes from './pages/Notes/Notes';
import NotesSubject from './pages/NotesSubject/NotesSubject';
import Chapter from './pages/Chapter/Chapter';
import Chapterpdf from './pages/Chapterpdf/Chapterpdf';
import Subcription from './pages/Subcription/Subcription';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/singup" element={<Signup/>} />
        {/* <Route path="/notes" element={<Notes/>} /> */}
        <Route path="/notessubject" element={<NotesSubject/>} />
        <Route path="/notessubject/:id" element={<Chapter/>} />
        <Route path="/chapterpdf/:id" element={<Chapterpdf/>} />
        <Route path="/Subscription" element={<Subcription/>} />
        </Routes>
        </BrowserRouter>
  </>
  );
}

export default App;
