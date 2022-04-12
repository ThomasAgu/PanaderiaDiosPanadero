import React, { useState } from 'react'


const Productos = ({nombre, precio, cantidad, img, setImgAct}) => {
 

  const handleMouseOver = (e) =>{
    setTimeout(() =>{setImgAct(img)}, 500)
    

  }
  return (
    <div className='row' id='table-body' onMouseOver={handleMouseOver}>
      <div className="col-5">{nombre}</div> 
      <div className="col-5">{cantidad}</div>
      <div className="col-2">${precio}</div>
    </div>
  )
}

export default Productos