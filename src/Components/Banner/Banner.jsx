import React, { useEffect, useState } from 'react'
import './Banner.css'

const Banner = ({banner, moreInfo}) => {

  const base_img_URL ="https://image.tmdb.org/t/p/original/"

  const [bannerOverview, setBannerOverview] = useState()

  useEffect(() => {
  if(banner){
    if(banner.overview.length > 200){
      setBannerOverview(banner.overview.substring(0,200) + '...')
    }
    else{
      setBannerOverview(banner.overview)
    }
  }
  },[banner])
  
  
  
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
        <p>{bannerOverview}</p>
      </div>
    {banner && 
      <img className='Banner' src={`${base_img_URL}${banner.backdrop_path}`} alt="" />
    }
    <div className="Banner__bottom"></div>
    </div>
  )
}

export default Banner