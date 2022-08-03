import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { movieDetails } from '../../Redux/WatchMovieReducer'
import './MovieRow.css'


const MovieRow = ({api,heading}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const slidesInView = 6

    const base_img_URL = "https://image.tmdb.org/t/p/original/"

    const fetchMovies = async () => {
        const request = await fetch(api)
        const response = await request.json()
        setMovies(response.results)
    }

    useEffect(() => {
        fetchMovies()
    })

    // Function for moving slider
    const [sliderIndex, setSliderIndex] = useState(0)
    const slider = {
        transform: `translateX(calc(${sliderIndex}*-100%))`
    }

    // Left Handle
    const leftHandle = () => {
        if (sliderIndex === 0) {
            setSliderIndex(Math.ceil(movies.length / slidesInView) - 1)
        }
        else {
            setSliderIndex(sliderIndex - 1)
        }
    }
    // Right Handle
    const rightHandle = () => {
        if (sliderIndex === Math.ceil(movies.length / slidesInView) - 1) {
            setSliderIndex(0)
        }
        else {
            setSliderIndex(sliderIndex + 1)
        }
    }

    return (
        <div className='Movie'>

           
        <p className='Movie__heading'>{heading}</p>
            <div className="movies__container">
                {/* Left Handle */}
                <button className="handle handle__left"
                    onClick={leftHandle}
                ><i className="fa-solid fa-2x fa-angle-left"></i>
                </button>

                    
                <div className="Movies__Row" style={slider}>
                    {/* Displaying All Movies */}
                    {movies &&
                        movies.map((e) =>{
                            return (<div 
                            className='movieCard__container' 
                            key={e.id} 
                            onClick={()=>{dispatch(movieDetails({
                                name:e.name || e.title || e.original_name || e.original_title,
                                overview:e.overview,
                                backdrop_path:e.backdrop_path,
                                first_air_date:e.first_air_date,
                                origin_country:e.origin_country,
                                original_language:e.original_language,
                                original_name:e.original_name,
                                popularity:e.popularity,
                                vote_average:e.vote_average,
                                vote_count:e.vote_count,

                            }))
                            navigate('/MoviePage')}
                            }
                            >
                            <div className="movieCard__details">
                                <p className="movieCard__details__name">{e.name || e.title || e.original_name || e.original_title}</p>
                                <p className="movieCard__details__overview">
                                    {e.overview.length > 100? e.overview.substring(0,100) + '...':e.overview}
                                </p>
                                <div className="movieCard__details__icons">
                                    <div className="icons__playBtn">
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <div className="icons__plusBtn">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                            <img 
                                    className="movieCard" 
                                    src={`${base_img_URL}${e.poster_path}`} 
                                    alt="" 
                                />
                            </div>
                                
                            )
                        })
                    }

                </div>

                {/* Right handle */}
                <button className="handle handle__right"
                    onClick={rightHandle}
                ><i className="fa-solid fa-2x fa-angle-right"></i>
                </button>

            </div>

        </div>
    )
}

export default MovieRow