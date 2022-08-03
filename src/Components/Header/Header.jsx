import React, { useState } from 'react'
import './Header.css'

const Header = () => {

    const [headerBg, setHeaderBg] = useState({backgroundColor:'transparent'})
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 50){
            setHeaderBg({backgroundColor:'rgb(13, 13, 13)'})
        }
        else{
            setHeaderBg({backgroundColor:'transparent'})
        }
    })
    

  return (
    <div className='Header' style={headerBg}>

        <div className="Header__Logo">
            <img 
            src="Logo.png" 
            alt="Header" 
            />
        </div>

        <div className="Header__NavBar">
            <p>Home</p>
            <p>Trending</p>
            <p>Top Rated</p>
            <p>Saved</p>
        </div>

        <div className="Header__MyAccount">
            <img 
            src="Avatar.png" 
            alt="Account Avatar" 
            />
            <div className="header__MyAccount__dropDown">
                <h3>Jayant</h3>
                <p>My Account</p>
                <p>Setting</p>
                <hr/>
                <p>Sign Out</p>
            </div>
        </div>

    </div>
  )
}

export default Header