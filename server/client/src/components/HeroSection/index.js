import React, {useState} from 'react'
import {Button} from '../ButtonEle'
import { Link} from "react-router-dom"
import { VideoBg } from './HeroEle'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroEle'
import bg from "../../images/bg.jpg"
import video from "../../videos/v3.mp4"

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg >
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          
          <HeroH1 style={{textShadow:"2px 2px gray"}}>Bring Music To Life</HeroH1>
          <HeroP>
            Listen and discover.
            In perfect harmony.
          </HeroP>
<HeroBtnWrapper >
          <Button  className="w-100" type="submit"  primary="true" dark="true" >
          <Link style={{color: "white"}} to="/signup" > Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Link>
        </Button></HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default HeroSection