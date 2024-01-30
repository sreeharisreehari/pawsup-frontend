import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mt-5'>
      <hr />
        <div className="row">
          <div className="col-lg-3 d-flex flex-column ">
            <h4 style={{color:'black'}} ><i class="fa-solid fa-paw me-1"></i> Paws <span style={{color:'#FFD700'}}>Up</span></h4>
            <p style={{textAlign:'justify'}}> Discover joy at Paws Up – your trusted source for pet adoption and rehoming.  Join us in fostering love and lifelong connections.




</p>

          </div>
          <div className="col-lg-3 d-flex flex-column ">
            <h4 >Services</h4>
            <Link style={{textDecoration:'none'}} >  Adoption</Link>
            <Link style={{textDecoration:'none'}} >Rehoming</Link>
            <Link style={{textDecoration:'none'}} >24/7 Support</Link>
           

          </div>

          <div className="col-lg-3 d-flex flex-column">
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration:'none'}}>MongoDB</Link>
        <Link to={'https://bootswatch.com/'} style={{ textDecoration:'none'}}>BootsWatch</Link>           

          </div>
         
         
          <div className="col-lg-3 d-flex flex-column">
          <h3>Contact Us</h3>
         <div>
         <Link style={{textDecoration:'none'}} to={''}> <i class="fa-solid fa-phone me-3"></i>123-456-7890
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
          <div><center><p>Copyright © 2023 Paws Up.Build With React</p></center></div>
        </div>
    </div>
  )
}

export default Footer