import React from "react"
import { Form,  Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import FormGroup from "../FormGroup"
import c from "../../images/c.png"
import { HeroBg, HeroContainer, HeroContent } from "../HeroSection/HeroEle"
import { Button } from "../ButtonEle"



export default function Signup() {
  
return (
  <>
  <HeroContainer>
  <HeroBg >
      <img src={c}/>
   </HeroBg>
   <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
   <br /> <br />
  <Card className="w-100" style={{ maxWidth: "500px" }}>
    <Card.Body className= "p-6 shadow-lg">
      <h1 className="text-center mb-4">Sign Up</h1>
    
      <Form className="w-100 mt-1">
        <FormGroup name="Userame" label="Userame" id="Userame" type="name" />
        <FormGroup name="Email" label="Email" id="Email" type="email"/>
        <FormGroup name="Password" label="Password" id="Password" type="password"  />
        <FormGroup name="Confirm Password" label="Confirm Password" id="Confirm Password" type="password" />
        <br />
        <Button  className="w-100" type="submit">
          Sign Up
        </Button>
       
      </Form>
     
    </Card.Body>
    
  </Card>
  <h5 className="w-100 text-center mt-2">
     Already have an account? <Link to="/login">Log In</Link>
     </h5>
     <h4 className="w-100 text-center mt-2">
    Check your profile? <Link to="/profile">Profile</Link>
  </h4>
  </HeroContent>
      
      </HeroContainer>
  
</>
  )
}