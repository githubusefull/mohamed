import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

import './Signup.css';
function Signup() {
  return (
    <div className='form-sign'>
       <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="name" className='name' placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" className='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" className='phone' placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" className='password' placeholder="Password" />
      </Form.Group>
      <Button variant="dark" className='my-4' type="submit">
        Sign Up
      </Button>
    </Form>
   </div>
  );
}


export default Signup;