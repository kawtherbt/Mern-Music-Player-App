import React from 'react'
import {  Form,Card} from "react-bootstrap"
import FormGroup from '../components/FormGroup'
import c from "../images/c.png"

import { HeroBg, HeroContainer, HeroContent } from "../components/HeroSection/HeroEle"

import { Button } from "../components/ButtonEle"

export default function ProfilePage() {
  return (
      
    <HeroContainer>
    <HeroBg >
        <img src={c} alt ="img"/>
     </HeroBg>
     <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
       <br /><br />
    <Card className="w-100" style={{ maxWidth: "500px" }}>
        <Card.Body className= "p-6 shadow-lg">
          <h1 className="text-center mb-4">Profile Information</h1>
        
          <Form  >
            <FormGroup name="Phone Number" label="Phone Number" id="Phone Number" type="int"/>
            <FormGroup name="Country" label="Country" id="Country" type="text"/>
            <FormGroup name="City" label="City" id="City" type="name"/>
            <FormGroup name="Postal Code" label="Postal Code" id="Postal Code" type="int"/>
            <FormGroup name="Date Of Birth" label="Date Of Birth" id="Date Of Birth" type="date"/>

            <p><br /></p>
            <Button  className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </HeroContent>
      
      </HeroContainer>
)}

