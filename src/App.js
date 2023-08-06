import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Contacts from './views/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='home' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='contacts' element={<Contacts />}/>
    </Routes>
  );
}

export default App;
