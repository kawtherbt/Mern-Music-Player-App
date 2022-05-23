import React from "react"
import { Form,  Card } from "react-bootstrap"
import { Link} from "react-router-dom"
import c from "../../images/c.png"

import { HeroBg, HeroContainer, HeroContent } from "../HeroSection/HeroEle"

import { Button } from "../ButtonEle"


export default function ForgotPassword() {
   

return (
  
    <HeroContainer>
    <HeroBg >
        <img src={c} alt ="img"/>
     </HeroBg>
     <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
      <Card className="w-100" style={{ maxWidth: "500px" }}>
        <Card.Body className= "p-6 shadow-lg">
          <h2 className="text-center mb-4">Password Reset</h2>
          <Form  >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required />
            </Form.Group>
            <br />
            <Button  className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <h4 className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </h4>       </Card.Body>
      </Card>
      <h5 className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </h5>
    </HeroContent>
      
    </HeroContainer>
  
  )
}