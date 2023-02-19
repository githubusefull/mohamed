import React from 'react'
import './Signup.css'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput

}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import react from '../Projects/Imgs/react-picc.png';

function Signup() {
  return (
    
    <MDBContainer fluid  className='d-flex justify-content-center align-items-center'>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8'>

          <MDBCard className='my-5 rounded-3' style={{maxWidth: '800px'}}>
            <MDBCardImage src={react} className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Sign Up Info</h3>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput wrapperClass=' mb-4' placeholder='name' type="text"/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput wrapperClass=' mb-4' placeholder='email' type="email"/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput wrapperClass=' mb-4' placeholder='password' type="password"/>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput wrapperClass='mb-4' placeholder='registration code'  type='text'/>
                </MDBCol>
              </MDBRow>

            </MDBCardBody>
            <MDBCol md='12' className='text-center'>
                
                 <Button variant="dark" className="signup-button">Sign Up</Button>
               
              </MDBCol>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}


export default Signup;