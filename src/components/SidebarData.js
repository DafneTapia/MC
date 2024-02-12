import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData =[
      {
        title: 'CAPACITACIONES',
        path: '/capacitaciones',
      },
      {
        title: 'CARTAS',
        path: '/cartas',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Resguardo',
                path: '/cartas/resguardo',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Justificación',
                path: '/cartas/justificacion',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
      },
      {
      title: 'CERTIFICADOS',
      path: '/certificados',
      },
      {
        title: 'CONTRATOS PROOVEDORES',
        path: '/contratos',
      },
      {
        title: 'EQUIPOS EXTERNOS',
        path: '/externos',
      },
      {
        title: 'GUÍAS RÁPIDAS',
        path: '/guias',
      },
      {
        title: 'HOJAS DE SEGURIDAD',
        path: '/seguridad',
      },
      {
          title: 'MANUALES',
          path: '/manuales',
          iconClosed: <RiIcons.RiArrowDownSFill/>,
          iconOpened: <RiIcons.RiArrowUpSFill/>,
          subNav: [
              {
                  title: 'Autoclave',
                  path: '/manuales/autoclave',
                  icon: <IoIcons.IoIosPaper/>,
              },
              {
                  title: 'Fujifilm',
                  path: '/manuales/fujifilm',
                  icon: <IoIcons.IoIosPaper/>,
              },
              {
                  title: 'Monitor de signos vitales SPECTRUM',
                  path: '/manuales/SPECTRUM',
                  icon: <IoIcons.IoIosPaper/>,
              },
              {
                title: 'Pentero',
                path: '/manuales/pentero',
                icon: <IoIcons.IoIosPaper/>,
              },
          ]
      },
      {
        title: 'ORDENES DE SERVICIO',
        path: '/ordenes',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Bajas, entradas y salidas',
            path: '/ordenes/bes',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Biomédica',
            path: '/ordenes/biomedica',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Bombas de infusión y perfusores',
            path: '/ordenes/bip',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Camas de hospitalización',
            path: '/ordenes/ch',
            icon: <IoIcons.IoIosPaper />
          },{
            title: 'CDI',
            path: '/ordenes/cdi',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Certificados imagen',
            path: '/ordenes/ci',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'CEYE',
            path: '/ordenes/ceye',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Compras y facturas, rentas y cotización',
            path: '/ordenes/cfrc',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Cuneros',
            path: '/ordenes/cuneros',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Equipos en baja',
            path: '/ordenes/eb',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Hemodinamia',
            path: '/ordenes/hemodinamia',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Hospitalización',
            path: '/ordenes/hospitalizacion',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Imageneología',
            path: '/ordenes/imageneologia',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Inhaloterapia',
            path: '/ordenes/inhaloterapia',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Ordenes de servicio internas DIB',
            path: '/ordenes/osi',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Quirófano',
            path: '/ordenes/quirofano',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'UCI',
            path: '/ordenes/uci',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'UCIN',
            path: '/ordenes/UCIN',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Urgencias',
            path: '/ordenes/urgencias',
            icon: <IoIcons.IoIosPaper />
          },
        ]
        
      },
      {
        title: 'ENTRADA DE E.M.',
        path: '/entrada',
      }

]