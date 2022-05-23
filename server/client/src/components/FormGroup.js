import React from 'react'
import { Form} from "react-bootstrap"
function FormGroup({name,label,type,id,onChangeHandler}) {
  return (
    <Form.Group name ={name} id={id} onChange={onChangeHandler}>
              <Form.Label >{label}</Form.Label>
              <Form.Control type={type}  required  />
    </Form.Group>
  )
}

export default FormGroup