import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';


import MC_LOGO from '../images/MC_LOGO.png'; // Ajusta la ruta de importación según la ubicación real de la imagen MC_LOGO
import MC from '../images/MC.png'; // Ajusta la ruta de importación según la ubicación real de la imagen MC

const Nav = styled.div`
  background: #E6E6E6;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;


const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem; /* Ajusta el tamaño de la fuente según tus necesidades */
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const MCLogoImage = styled.img`
  width: 80px; /* Ajusta el ancho de la imagen MC_LOGO según tus necesidades */
  margin-right: 14px; /* Agrega un margen derecho opcional */
  margin-left: 35px;
  margin-top: 5px;
`;

const MCImage = styled.img`
  width: 210px; /* Ajusta el ancho de la imagen MC según tus necesidades */
  margin-left: 0px;
`;

const SidebarNav = styled.nav`
  background: #808080;
  width: 300px;
  overflow-y: auto;
  height: 100vh; 
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  /* Estilos de la barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 12px; /* Ajusta el ancho de la barra de desplazamiento según tus preferencias */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Hace que la barra de desplazamiento sea inicialmente transparente */
    transition: background-color 0.3s; /* Añade una transición para que sea suave */
  }
  &:hover {
    /* Al pasar el mouse sobre la barra lateral, muestra la barra de desplazamiento */
    &::-webkit-scrollbar-thumb {
      background-color: #666; /* Cambia el color de la barra de desplazamiento al pasar el mouse */
    }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{color: '#808080'}}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
            <MCLogoImage src={MC_LOGO} alt="Logo" />
            <MCImage src={MC} alt="MC" />
          </NavIcon>
        </Nav>
      </IconContext.Provider>

      <IconContext.Provider value={{color: '#E6E6E6'}}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
