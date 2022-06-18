import React, { useState,  useEffect} from 'react'

export const Cartelera = () => {

  const api_key = 'api_key=12be0a14f304bce6c8d62fd5a2c218b2';
  const url_base = 'https://api.themoviedb.org/3';
  const api_url = url_base + '/discover/movie?sort_by=popularity.desc&'+api_key;
  //const img_url = 'https://image.tmdb.org/t/p/w500';

  const [archivo, setArchivo] = useState('')

  const getMovies = () => {
    
    fetch(api_url)
      .then(resp => resp.json())
      .then(data => {
        //console.log(data.results)
        setArchivo(data.results)
      })
  }
  
  useEffect(() => {
    getMovies()
  }, [])
  
  console.log(archivo)
    return(
      <>
        <ol >
          {/*
            archivo.forEach(movie => 
              <li key={movie.id}>{movie.title}</li>
            )
            */}
        </ol>
      </>
    )
  
}

