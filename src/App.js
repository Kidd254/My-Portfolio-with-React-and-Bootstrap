import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contacts from './views/Contacts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
