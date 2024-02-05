import React, { useEffect } from 'react'
import Headersss from './Headersss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { adoptAPI } from '../services/allAPI';
import Display from './Display';
import { BASE_URL } from '../services/baseurl';
import Mesg from './Mesg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Adopt() {
  const [petsearch,setpetsearch]=useState("")
 

  const [petadopt,setpetadopt]=useState([])


  const getpet=async()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      const reqheader={
        "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`


      }
      const result=await adoptAPI(petsearch,reqheader)
    console.log(result.data);
    setpetadopt(result.data) 

    }
    
    
  }
  console.log(petsearch);

  useEffect(()=>{
    getpet()

  },[petsearch])

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []); 
  
  

  return (
    <div className='imgg scroll-container '>
        <Headersss/>
        <br />
        <br />
        

     <center>   <h2>Adopt Love: Meet Our Pets</h2></center>
     <br />
     <br />
     <center>
       <InputGroup  style={{borderRadius:'20px',height:'10px'}} className="mb-3 w-75 " value={petsearch} onChange={e=>setpetsearch(e.target.value)} >
          <InputGroup.Text><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
          
          <Form.Control placeholder="Search based on breeds" />
        </InputGroup>
     </center>
     <br />
     <br />
     
     
     
     
   
    <br />

     <div  class="container mt-4">
  <div data-aos="fade-up" class="row">
    
    {
      petadopt?.length>0?
      petadopt.map((item)=>(  <div class="col-md-4 mb-4" md={6} sm={12} lg={4}>
      <Card  className='card' style={{ width: '18rem' }}>
        <Card.Img height={'200px'} variant="top" src={`${BASE_URL}/uploads/${item.image}`} />
        <Card.Body>
          <Card.Title style={{color:'black'}}>{item.petname}</Card.Title>
          <Card.Text >
             {item.breed}
            
          </Card.Text>
          <Card.Text ><i class="fa-solid fa-location-dot"></i>
             <span className='ms-1'> {item.location}</span>
            
          </Card.Text>
         <div className='d-flex'>
            <Display  foom={item}/>
            <Mesg foom={item}/>
           
         </div>
        
          
        </Card.Body>
        
      </Card>
      
      </div>))
      :null
      }
    

    
    <div class="col-md-3 mb-4">
        
   
      
    </div>
    <div class="col-md-3 mb-4">
      
    </div>
    <div class="col-md-3 mb-4">
      
    </div>
    <div class="col-md-3 mb-4">
    
    </div>
  </div>
</div>
<br />
<br />
<br />


      
<Footer/>

    </div>

    
  )
}

export default Adopt