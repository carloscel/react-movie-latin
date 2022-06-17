import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/VistaPelis.css'

export const VistaPelis = ({imagen, titulo, anio, id}) => {
  
  return (
    <Link to={id} className='card'>
      <div className='card-imagen'>
        <img className='imagen' src={imagen}/>
      </div>
      <div className='card-descripcion'>
        <p className='titulo'>{titulo}</p>
        <p className='anio'>{anio}</p>
      </div>
    </Link>
    
  )
}
