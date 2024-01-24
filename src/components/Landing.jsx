import React from 'react'
import {Row,Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titleimage from '../images/picmix.com_1628533.gif'
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer' 
// import Footer from './components/Footer';



function Landing() {
  return (
    <div>
       <div style={{width:'100%',height:'80vh'}}>
       <Row className='align-items-center p-5'>
            <Col  sm={12} md={6}>
              <h3 style={{fontSize:'70px',color:'black'}}>Paws <span style={{color:"#FFD700"}}>Up</span></h3>
              <p>Find Your Furry Friend: Where Tails Begin New Tales. Adopt, Love, Rehome.</p>
          
             {/* <Link to={'/dashboard'} className='btn btn-dark rounded'>Manage Projects<i class="fa-solid fa-arrow-right ms-3"></i> </Link> : */}
              <Link to={'/login'} className='btn btn-dark rounded'>Get Started<i class="fa-solid fa-arrow-right ms-3"></i> </Link>
            </Col>
            <Col sm={12} md={6}>
              <img src={titleimage} alt="" className='w-75' />
            </Col>
            
          </Row>
       </div>
       <br />
       <br />
       
      <center> <h1>Your Pet Adoption Journey With Paws Up</h1></center>
       
       <div className='container mt-5' >
       <Row>
  <Col  md={6} sm={12}>
    <img className='' src="https://cityofmissionviejo.org/sites/default/files/cutedogsrabiesdefer3.png" alt="" width={'80%'}  />

  </Col>
  <Col md={6}>
    <img className=' mt-5 me-5'  src="https://icon-library.com/images/icon-search/icon-search-1.jpg" alt="" width={'50px'}  />
    <h3 style={{marginLeft:'60px',marginTop:'-38px'}}>Search Pet</h3>
    <p className='ms-5 '>Adopt a dog or cat who's right for you. Simply enter your <br /> city above to start your search.</p>
    <br />
    

    <img src="https://cdn2.iconfinder.com/data/icons/business-2-67/48/156-1024.png" alt="" width={'60px'}/>

    <h3 style={{marginLeft:'75px',marginTop:'-46px'}}>Connect</h3>
    <p className='ms-5 '>Once you find a pet, check the contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
    <br />

    
    <img style={{marginLeft:'-10px'}} src="https://cdn2.iconfinder.com/data/icons/veterinary-kinetic-vol-1/256/Adoption-512.png" alt="" width={'90px'}/>
    <h3 style={{marginLeft:'80px',marginTop:'-60px'}}>AdoptLove</h3>
    <br />
    <p className='ms-5 '>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
    

    
  
    
      </Col>
 </Row>
       </div>
       
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer/>

    </div>
  )
}


export default Landing