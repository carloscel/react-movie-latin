import React, { useState } from 'react'
import {RecuperadorDatos} from './RecuperadorDatos'

export const SearchBox = () => {

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
    <>
      <form onSubmit={datos}>
          <input 
              type='text' 
              placeholder='Buscar Películas'
              onChange={cambiarState}
          />
          <button type='submit'>Buscar</button>
      </form>
      <RecuperadorDatos pelis={pelis}/>
    </>
  )
}
