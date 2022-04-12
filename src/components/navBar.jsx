import React from 'react'
import Logo from './Logo'
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const navBar = () => {
  return (
    <div>
      <nav id='navBar'>
        <Logo />
        <div className='navBar-item'><a href="#">Inicio</a></div>
        <div className='navBar-item'><a href="#nosotros">Nosotros</a></div>
        <div className='navBar-item'><a href="#productos-list">Productos</a></div>
        <div className='navBar-item'><a href="#contacto">Contacto</a></div>
        <div className='navBar-item'><a href="#mapa">Ubicacion</a></div>
        {/* Contactos */}
        <div className='navBar-item'><a href="https://www.instagram.com/lo.matias/" target="_blank" rel="noreferrer" ><FontAwesomeIcon id='instagram' icon={faCameraRetro} /></a></div>
        
        
      </nav>
    </div>
  )
}

export default navBar