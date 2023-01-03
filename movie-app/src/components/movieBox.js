import React from 'react'
import "./movieBox.css"

function MovieBox({movies}) {
  return (
    <>
    {movies.map(movie => (
        <div key={movie.imdbID} className='movieBoxContainer'>
        <div className='movieBox'>
          <img src={movie.Poster} alt="movie poster"/>
          <div className='descriptionBox'>
              <p><span>Title: </span>{movie.Title}</p>
              <p><span>Year of release: </span>{movie.Year}</p>
          </div>
          </div>
      </div>
    ))}
  
    </>
  )
}

export default MovieBox
