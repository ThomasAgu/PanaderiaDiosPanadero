import React from 'react'
import {faCameraRetro, faPhone, faAt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = () => {
  return (
    <div className='informationFrame-par'>
        <h3 id='contacto'>Contactenos</h3>
        <div className="container text-center" id='contact-icons'>
            <span><div className='navBar-item'><a href="https://www.instagram.com/francisco_barrot/" target="_blank" rel="noreferrer" ><FontAwesomeIcon id='instagram' icon={faCameraRetro} /></a></div></span>
            <span><div className='navBar-item'><a href="https://wa.me/542213631413" target="_blank" rel="noreferrer" ><FontAwesomeIcon id='' icon={faPhone} /></a></div></span>
            <span><div className='navBar-item'><a href="mailto:thomas40651@gmail.com" target="_blank" rel="noreferrer" ><FontAwesomeIcon id='' icon={faAt} /></a></div></span>
        </div>
    </div>
  )
}

export default Contacto