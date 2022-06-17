import React, { useEffect, useState } from 'react'
import { VistaPelis } from './VistaPelis'
import '../estilos/RecuperadorDatos.css'
import { SearchBox } from './SearchBox'

export const RecuperadorDatos = () => {

  const [pelis, setPelis] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const datos = e => {
    e.preventDefault()
    const url =`https://www.omdbapi.com/?s=${busqueda}&apikey=ed22e599`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const {Search} = data;

        setPelis(Search);
      })
  }

  const cambiarState = e => {
    setBusqueda(e.target.value);
  }

  return (
    <div>
        <SearchBox 
          datos={datos} 
          cambiarState={cambiarState}
        />
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
