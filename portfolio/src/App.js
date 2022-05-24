
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './style/App.css';

function App() {


  return (
    <div className="App">
      <div className='banner'>
        <h1>Yang</h1>
      </div>
      <div className = 'header'>
        <Nav />
        <br />
        <br />
      </div>
      <div className='routes'>
        <main>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/aboutme' element = {<AboutMe />} />
            <Route path='/projects' element = {<Projects />} />
            <Route path='/resume' element = {<Resume />} />
          </Routes> 
        </main>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
