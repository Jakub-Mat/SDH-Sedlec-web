import React from 'react';
import './App.css'
import './components/Header.css'
import Header from './components/Header.jsx'
import './components/Footer.css'
import Footer from './components/Footer.jsx'


import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Clenove from './pages/Clenove.jsx'
import Kronika from './pages/Kronika.jsx'
import Login from './pages/Login.jsx'
import Materialy from './pages/Materialy.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materialy" element={<Materialy />} />
          <Route path="/clenove" element={<Clenove />} />
          <Route path="/kronika" element={<Kronika />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
