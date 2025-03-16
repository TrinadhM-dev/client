import React from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Experience from "./pages/Experience";
import ProjectDisplay from './pages/ProjectDisplay';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Project />}></Route>
          <Route path='/project/:id' element={<ProjectDisplay />} ></Route>
          <Route path='/experience' element={<Experience/>}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App