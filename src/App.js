import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // This should include your Tailwind CSS file

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Fiscal from './pages/Fiscal';
import PaieConseilSocial from './pages/PaieConseilSocial';
import ConseilGestion from './pages/ConseilGestion';
import Audit from './pages/Audit';
import FormationComptabiliteFiscalite from './pages/FormationComptabiliteFiscalite';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/fiscale' element={<Fiscal />} />
          <Route path='/paie-conseil-social' element={<PaieConseilSocial />} />
          <Route path='/conseil-gestion' element={<ConseilGestion />} />
          <Route path='/audit' element={<Audit />} />
          <Route path='/formation-comptabilite-fiscalite' element={<FormationComptabiliteFiscalite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
