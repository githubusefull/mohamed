import { Button } from 'react-bootstrap';
import './Modal2.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import { toast   } from 'react-toastify';
import { ToastContainer  } from 'react-toastify';





function Modal2({closeModal}) {
 
  const form = useRef();

  const sendEmail = (e) => {
  

    e.preventDefault();

    emailjs.sendForm('service_wdpn1wi', 'template_huaea1l', form.current, 'eA5OUa4wFBKzUNJxi')
      .then((result) => {
          console.log(result.text);
          toast("Thank you! Your message has been sent.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"dark",
            color:"black",
          });
         
      }, (error) => {
          console.log(error.text);
      }); 
    };
  return (
   
    <div className="modalBackground">
    <div className="modalContainer">
    <ToastContainer />

    <div className="body">

     
       <Button variant='dark'  className='button-close2'
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </Button>
 
        
          <div class=" body-text mb-3">
          <div class=" body-text mb-4">

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
       
        </div>
     
     
     



  )
}

export default Modal2;