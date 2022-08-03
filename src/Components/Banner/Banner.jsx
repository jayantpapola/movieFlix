import React from 'react'
import './Banner.css'

const Banner = ({banner, moreInfo}) => {

  const base_img_URL ="https://image.tmdb.org/t/p/original/"
  
  return (
    <div className='Home__Banner'>
      <div className="Banner__description">
        <h1>{banner && banner.name}</h1>
        
        <div className="Banner__description__buttons">
          <button>
            <i className="fa-solid fa-play"></i>
            Play
          </button>
          <button>
            <i className="fa-solid fa-plus"></i>
            Add to PlayList
          </button>
          {moreInfo && <button>
            <i className="fa-solid fa-circle-info"></i>
            More Info
          </button>}
        </div>
        <p>{banner && banner.overview}</p>
      </div>
    {banner && 
      <img className='Banner' src={`${base_img_URL}${banner.backdrop_path}`} alt="" />
    }
    <div className="Banner__bottom"></div>
    </div>
  )
}

export default Banner