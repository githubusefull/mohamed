import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './Contact.css';





function Contact( ) {

  return (
    <>
     

      <Modal.Header closeButton className="send">
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className="send">
          <Form className="send">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}  placeholder="message"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="send"> 
        <Button variant="outline-dark">Close</Button>
          <Button variant="dark" className="m-2">Send</Button>
        </Modal.Footer>
    
</>

  )
}

export default Contact;