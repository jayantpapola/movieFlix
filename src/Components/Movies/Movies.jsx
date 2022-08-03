import React from 'react'
import MovieRow from '../MovieRow/MovieRow'
import request from '../../APIs/APIs'
import './Movies.css'

const Movies = () => {
  return (
    <div className='Movies'>
      <MovieRow heading={'Netflix Originals'} api={request.fetchNetflixOriginals}/>
      <MovieRow heading={'Top Rated'} api={request.fetchTopRated}/>
      <MovieRow heading={'Trending'} api={request.fetchTrending}/>
      <MovieRow heading={'Action Movies'} api={request.fetchActionMovies}/>
      <MovieRow heading={'Comedy Movies'} api={request.fetchComedyMovies}/>
      <MovieRow heading={'Horror Movies'} api={request.fetchHorrorMovies}/>
      <MovieRow heading={'Romantic Movies'} api={request.fetchRomanticMovies}/>
      <MovieRow heading={'For kids'} api={request.fetchUnknown}/>
      <MovieRow heading={'For kids'} api={request.fetchNetflixOriginalsPart2}/>
    </div>
  )
}

export default Movies