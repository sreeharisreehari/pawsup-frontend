import React from 'react'
import { Link } from 'react-router-dom'
import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


function Footer() {


  const [Meessage, setmeessage] = useState({
    feed:""
  });
 

 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      
      const formData = new FormData();
      formData.append('email', email);
      formData.append('message', message);
  
      await fetch('https://formspree.io/f/xzbndnlp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
  
      
      setEmail('');
      setMessage('');
    };

    const feedback = JSON.parse(sessionStorage.getItem(" existuser"))
    console.log(feedback);


    const aleert=()=>{

      const {feed}=Meessage
      
      Swal.fire({
        icon: 'success',
        title: 'Feedback send Successfully',
       
      })
    
    
    
  }
  return (
    <div className='container mt-5 '>
      <hr />
        <div className="row justify-content-evenly">
          <div className="col-lg-3 d-flex flex-column ">
            <h4 style={{color:'black'}} ><i class="fa-solid fa-paw me-1"></i> Paws <span style={{color:'#FFD700'}}>Up</span></h4>
            <p style={{textAlign:'justify'}}> Discover joy at Paws Up – your trusted source for pet adoption and rehoming.  Join us in fostering love and lifelong connections.




</p>

          </div>
          
         
          <div className="col-lg-2 d-flex flex-column">
            <br />
            <h4>Pages</h4>
            <Link to={'/home'} style={{textDecoration:'none'}}>Home</Link>
        <Link to={'/adopt'} style={{ textDecoration:'none'}}>Adopt</Link>
        <Link to={'/rehome'} style={{ textDecoration:'none'}}>Rehome</Link> 
        <Link to={'/edit'} style={{ textDecoration:'none'}}>My Applications</Link>          

          </div>
          
           <div className="col-lg-3 d-flex flex-column ">
            <br />
            <h4  className='text-dark'>Send us your feedback!</h4>
            <br/>
            <Form onSubmit={handleSubmit}>
      <Form.Group style={{display:'none'}} controlId="formEmail">
       
        <Form.Control
          type="email"
         
          value={feedback.email}
          onChange={(e) => setEmail(e.target.value)}
        
          required
        />
        <br />
      </Form.Group>

      <Form.Group  controlId="formMessage">
       
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>
      <br />

      <Button onClick={aleert} variant="primary" type="submit">
        Send
      </Button>
    </Form>       

          </div> 

         
         
          <div className="col-lg-2 d-flex flex-column ms-2">
            <br />
          <h3>Contact Us</h3>
         <div>
         <Link style={{textDecoration:'none'}} to={''}> <i class="fa-solid fa-phone me-3"></i>8921633037
 </Link>
         <br />
         <Link style={{textDecoration:'none'}} to={''}> <i class="fa-solid fa-envelope me-3"></i>info@pawsup.com</Link>

         </div>
         <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-5 mt-3'>
            <Link to={'https://www.instagram.com/'} style={{ textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x me-4"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x me-4 "></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
          <Link to={'https://twitter.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
  
         </div>
        
          </div>
          
          <div>
            <br /><center><p>Copyright © 2023 Paws Up.Build With React</p></center></div>
        </div>
    </div>
  )
}

export default Footer