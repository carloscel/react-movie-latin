import React from 'react'

export const SearchBox = ({datos, cambiarState}) => {
  return (
    <form onSubmit={datos}>
        <input 
            type='text' 
            placeholder='Buscar Películas'
            onChange={cambiarState}
        />
        <button type='submit'>Buscar</button>
    </form>
  )
}
