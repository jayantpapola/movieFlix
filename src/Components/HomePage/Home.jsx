import React, { useEffect, useState } from 'react'

import './Home.css'
import Header from '../Header/Header'
import request from '../../APIs/APIs'
import Banner from '../Banner/Banner'
import Movies from '../Movies/Movies'

const Home = () => {

  const [banner, setBanner] = useState()

    const fetchMovie = async () =>{
        const req = await fetch(request.fetchNetflixOriginals)
        const res = await req.json()
        console.log(res.results);
        setBanner(res.results[Math.floor(Math.random() * res.results.length - 1)])
    }
    
    useEffect(()=>{
        fetchMovie()
    },[])

  return (
    <div className='Home'>
        <Header/>
        <Banner banner={banner} moreInfo/>
        <Movies/>
    </div>
  )
}

export default Home