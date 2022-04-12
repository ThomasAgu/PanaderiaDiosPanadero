import React, { useState } from 'react'
import Producto from './Producto'
import productos from '../JsObjects/Items'

const ProductosList = () => {
  const [imgAct, setImgAct] = useState(null);

  return (
    <div className='informationFrame-impar'>
      <h3 id='productos-list'>Nuestros Productos</h3>
      <div className='d-flex'>
        
        <div className="container w-50 ms-0 " id='table' >
          <div className="row " id='table-header'>
            <div className="col-5">Nombre</div>
            <div className="col-5">Cantidad</div>
            <div className="col-2">Precio</div>
          </div>
            {
              productos.map((prod) =>(
                <Producto key={prod.id} nombre={prod.nombre} precio={prod.precio} cantidad={prod.cantidad} img={prod.img} setImgAct={setImgAct}/>
              ))
            }
        </div>
    <div><img src={imgAct} alt="" id='imagenProducto' /></div>
      </div>
  </div>
  )
}

export default ProductosList