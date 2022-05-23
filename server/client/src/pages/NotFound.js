import React from "react";
import {HeroContainer,  HeroContent} from '../components/HeroSection/HeroEle'

function NotFound() {
  return (
    <div style={{backgroundColor: "white"}}>
    <HeroContainer>
    <HeroContent>
 <div>
     <p style={{color:"white" , fontSize:"50pt"}}>
         NOT FOUND 
     </p>
 </div>
  
 </HeroContent>
 </HeroContainer>
</div>
    

  );
}

export default NotFound;