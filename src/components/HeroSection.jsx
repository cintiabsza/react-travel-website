import React from "react"
import '../App.css'
import './HeroSection.css'
import {Button} from './Button'

//original code uses a video on heroSection. 
function HeroSection(){
    return (
   <>
    <div className='hero-container'>
      <video src='' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >GET STARTED</Button>
            <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            //onClick={console.log('hey')}
            >WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
   </> 
    )
}

export default HeroSection  

//background image comes from css file 