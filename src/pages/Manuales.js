import React from 'react';

// Define una constante para el enlace de Google Drive
const GOOGLE_DRIVE_LINK = 'https://drive.google.com/file/d/1xSUy4kPnGGZ0AX3w5JOKRgqu0pSNIS_6/view';

// Componente ReportsOne que redirige al enlace de Google Drive al hacer clic
export const ReportsOne = () => {
  // Función para redirigir al enlace de Google Drive
  const redirectToGoogleDrive = () => {
    window.location.href = GOOGLE_DRIVE_LINK;
  };

  return (
    <div className='reports'>
      <h1 onClick={redirectToGoogleDrive}>Manuales/Autoclave</h1>
    </div>
  );
};

// Componente MANUALES
export const MANUALES = () => {
  return (
    <div className='reports'>
      <h1>MANUALES</h1>
    </div>
  );
};

// Componentes ReportsTwo, ReportsThree, etc.
export const ReportsTwo = () => {
  return (
    <div className='reports'>
      <h1>Manuales/Fujifilm</h1>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1>Manuales/SPECTRUM</h1>
    </div>
  );
};
