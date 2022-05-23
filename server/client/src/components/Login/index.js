import React from "react"
import { Form,  Card } from "react-bootstrap"
import { Link} from "react-router-dom"
import FormGroup from "../FormGroup"
import c from "../../images/c.png"
import { HeroBg, HeroContainer, HeroContent } from "../HeroSection/HeroEle"
import { Button } from "../ButtonEle"

export default function Login() { 
  

return (
    <>
    <HeroContainer>
    <HeroBg >
        <img src={c} alt ="img"/>
     </HeroBg>
     <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
      <Card className="w-100" style={{ maxWidth: "500px" }}>
        <Card.Body className= "p-6 shadow-lg">
          <h1 className="text-center mb-4">Log In</h1>
          <Form  >
            <FormGroup name="Email" label="Email" id="Email" type="email" />
            <FormGroup name="Password" label="Password" id="Password" type="password" /> <br />
            <Button  className="w-100" type="submit" > 
            

               Log In
            </Button>
            <h5 className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </h5>
          
          </Form>
         
        </Card.Body>
      </Card>
      <h4 className="w-100 text-center mt-2" >
        Need an account? <Link to="/signup">Sign Up</Link>
      </h4>
      </HeroContent>
      
      </HeroContainer>
    </>
  )
}