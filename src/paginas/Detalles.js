import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detalles = () => {

  const {id} = useParams()

  const [detPelis, setDetPelis] = useState({})

  const datos = () => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=ed22e599`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDetPelis(data)
      })
  }

  useEffect(() => {
    datos()
  }, [])
  //console.log(datos)

  const {Actors, Country, Title, Poster, Director, Plot, Runtime} = detPelis

  return (
    <div>
      <div>
        <p className='title'>{Title}({Runtime})</p>
        <p>Director: {Director}</p>
      </div>
      <div>
        <img src={Poster}/>
      </div>
      <p>Pais: {Country}</p>
      <p>{Actors}</p>
      <div>
        {Plot}
      </div>

    </div>
  )
}
