// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed; /* Establece la posición fija */
  bottom: 0; /* Coloca el footer en la parte inferior de la pantalla */
  background-color: #9E1D5B; /* Establece el color de fondo del footer */
  color: #fff; /* Establece el color del texto */
  padding: 12px; /* Ajusta el espacio interior del footer según tus necesidades */
  text-align: center; /* Centra el contenido del footer */
  width: 100%;
  margin-bottom: 0px;
  font-size: 15px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Agrega aquí el contenido del footer */}
      © 2023. Todos los derechos reservados Médica Campestre<br />
      Diseño y Desarrollo: Dafne Tapia 
    </FooterContainer>
  );
};

export default Footer;
