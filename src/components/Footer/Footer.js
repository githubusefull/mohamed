import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

    function Footer() {
  return (
    <MDBFooter  className='footer text-center text-lg-start text-muted my-4'>   
   <section>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' className='me-0' />
                PORTFOLIO
              </h6>
              <p>
                This Is My PortFolio
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Projects</h6>
              <p>
                <a href='/' className='text-reset'>
                  Portfolio
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Website Example
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Crud Example
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-1 icon-home' />
                Morocco, Midelt 
              </p>
              <p>
                <MDBIcon  icon='envelope' className='me-2 icon-footer' />
                Mohamedabdelwahidi<p>@gmail.com
              </p></p>
              <p>
                <MDBIcon  icon='phone' className='me-1 icon-footer' /> 
                +212603260290
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
     
      <div className='text-center p-3' style={{ backgroundColor: "whitesmoke"}}>
        <>© 2023 Copyright : Portfolio </>
        <a className='text-reset fw-bold' href='.'>
        <img src="portfolio.png"  className="footer-logo" alt='' />
        </a>
      </div>
       </MDBFooter>
    
  );
}

export default Footer;
