import { Button } from 'react-bootstrap';
import './Modal3.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 

function Modal3({closeModal}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdpn1wi', 'template_huaea1l', form.current, 'eA5OUa4wFBKzUNJxi')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      }); 
    };


  return (
   
    <div className="modal3">
    <div className="modalContainer3">
    <div className="body3">
       <Button variant='dark'  className='button-close'
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </Button>
          <div class=" body-text mb-3">

          <form ref={form} onSubmit={sendEmail}>
          <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="text" class="form-control"  name="user_name" placeholder="Name" />
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" name="user_email" placeholder="Email" />

                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" name="message"  rows="3" placeholder="Message" ></textarea>
                <span>
           <Button variant='dark' 
           type="submit" value="Send"
           className='button-send  my-4'>Send</Button>
        </span>
              </form>
          </div>
          
        </div>
          
           
        
        
        
       
        </div>
       
      </div>
     



  )
}

export default Modal3