import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambia 'Switch' por 'Routes'
import React from 'react';
import Footer from './components/Footer'; // Ajusta la ruta de importación según la ubicación real de Footer.js
import Overview from './pages/Overview';
import { MANUALES, ReportsOne, ReportsTwo, ReportsThree } from './pages/Manuales';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/manuales' element={<MANUALES />} />
        <Route path='/manuales/autoclave' element={<ReportsOne />} />
        <Route path='/manuales/fujifilm' element={<ReportsTwo />} />
        <Route path='/manuales/SPECTRUM' element={<ReportsThree />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer /> {/* Agrega el componente Footer al final de tu aplicación */}
    </Router>
  );
}

export default App;

