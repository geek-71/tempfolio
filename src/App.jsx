import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Career from './pages/Career'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/Aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    
  )
}

export default App