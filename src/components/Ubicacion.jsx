import React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const Ubicacion = () => {
  return (
    <div className='informationFrame-impar'>
        <h3>Encuentrenos</h3>
        <div className="container w-75" id='mapa'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.8506534130865!2d-57.96108661382891!3d-34.92143829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e632bb6065c1%3A0xc1c39d6f5f388aa9!2sDiag.%2073%202065%2C%20B1900FKI%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1647452045725!5m2!1ses-419!2sar"  id='googleMap' />
        </div>
    </div>
  )
}

export default Ubicacion