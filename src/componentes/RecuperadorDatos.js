import React from 'react'
import { VistaPelis } from './VistaPelis'
import '../estilos/RecuperadorDatos.css'


export const RecuperadorDatos = ({pelis}) => {
 
  return (
    <div>
        
        <div className='peliculas'>
          {
            pelis.length === 0 ? 
            <p>No se ha encontrado películas</p>
            : pelis.map(peli => {
              
                return(
                  <VistaPelis 
                    key={peli.imdbID}
                    id={peli.imdbID}
                    titulo={peli.Title}
                    anio={peli.Year}
                    imagen={peli.Poster}
                  />
                )
            })
          }
        </div>
    </div>
  )
}
