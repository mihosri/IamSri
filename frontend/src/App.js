import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BusinessCard from './components/BusinessCard/BusinessCard.jsx';
import Education from './components/Education/Education.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Awards from './components/Awards/Awards.jsx';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={BusinessCard}/>
        <Route path='/education' Component={Education}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/skills' Component={Skills}/>
        <Route path='/experience' Component={Experience}/>
        <Route path='/awards' Component={Awards}/>
      </Routes>      
    </Router>
    </>
  );
}

export default App;
