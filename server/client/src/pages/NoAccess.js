import React from 'react'
import {HeroContainer,  HeroContent} from '../components/HeroSection/HeroEle'



function NoAccess() {
  return (
    <div style={{backgroundColor: "white"}}>
       <HeroContainer>
       <HeroContent>
    <div>
        <p style={{color:"white", fontSize:"50pt"}}>
            ACCESS DENIED 
        </p>
    </div>
     
    </HeroContent>
    </HeroContainer>
</div>
  )
}

export default NoAccess