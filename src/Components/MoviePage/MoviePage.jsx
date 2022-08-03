import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './MoviePage.css'

const MoviePage = () => {

  const navigate = useNavigate()
  const banner = useSelector(state => state.movieData.value)

  useEffect(()=>{
    if(banner.name === ''){
      navigate('/')
    }
  })
  console.log(banner);
  return (
    <div className='MoviePage'>
      <Link to={'/'}>
      <button className="backToHome">
        <i class="fa-solid fa-arrow-left-long"></i>
        Back
      </button>
      </Link>
      <Banner banner={banner} />
      {/* 
      first_air_date
      origin_country
      original_language
      original_name
      popularity
      vote_average
      vote_count
      */}
      <div className="MoviePageDetails">
        <p><span>First Air Date: </span>{banner.first_air_date}</p>
        <p><span>Origin Country: </span>{banner.origin_country}</p>
        <p><span>Original Language: </span>{banner.original_language}</p>
        <p><span>Original Name: </span>{banner.original_name}</p>
        <p><span>Popularity: </span>{banner.popularity}</p>
        <p><span>Vote Average: </span>{banner.vote_average}</p>
        <p><span>Vote Count: </span>{banner.vote_count}</p>
      </div>
    </div>
  )
}

export default MoviePage