import React, { useContext, useEffect } from 'react'
import Headersss from './Headersss'
import Footer from './Footer'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import { useState } from 'react';

import { addAPI, adoptAPI, deleteAPI, usersAPI } from '../services/allAPI';
import Admindisplay from './Admindisplay';
import { isadmintokencontext } from '../context/Contextshare';
import Chartedac from './Chartedac';
import PieChartExample from './Chartedac';
import { useNavigate } from 'react-router-dom';





function Adminpage() {
  const navigate=useNavigate()
  const {authtoken,setauthtoken}=useContext(isadmintokencontext)

  const [regi,setregi]=useState({

  })



  const handlelogout=()=> {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existuser")
    navigate('/')



  }
  const {admin,setadmin}=useContext(isadmintokencontext)

   

    const [petsearch,setpetsearch]=useState("")
    const [petadopt,setpetadopt]=useState([])

    const getpet=async()=>{
        if(sessionStorage.getItem("token")){
          const token=sessionStorage.getItem("token")
          console.log(token);
          const reqheader={
            "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    
    
          }
          const result=await adoptAPI(petsearch,reqheader)
        console.log(result);
        setpetadopt(result.data) 
    
        }
        
        
      }
      console.log(petsearch);
    
      useEffect(()=>{
        getpet()
    
      },[petsearch])
      console.log(petadopt);
      const userss=petadopt.length

      const handledelete=async(id)=>{
        const token=sessionStorage.getItem("token")
        const reqheader={
          "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
    
    
        }
        const result=await  deleteAPI(id,reqheader)
        console.log(result);
        if(result.status===200){
          console.log("success");
       setadmin(result.data)
          getpet()
        }
        else{
          console.log(result.response.data);
        }
        
    
      }

      

      const handleuserlength=async()=>{
        const result= await usersAPI() 
        console.log(result.data);
        setregi(result.data)
      }

      useEffect(()=>{
        handleuserlength()
      },[])
      const lungth=regi.length

      



  
  return (
    <div className='imgg scroll-container '>
         <Navbar className="imgg">
      <Container>
        <Navbar.Brand href="#home"> <h4 style={{color:'black'}} ><i class="fa-solid fa-paw me-1"></i> Paws <span style={{color:'#FFD700'}}>Up</span></h4></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <button onClick={handlelogout}  style={{float:'right'}} className='btn btn-primary'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


        <br />
    <center><h2 className='ms-3'>Dashboard</h2></center>
    <br />
    <br />
    <div className="container1">
      <div className="column1 me-5">
       
        <center><h5 className='mt-2' style={{color:'white'}}>Pets</h5>
        
        <h2 >{userss}</h2>
        </center>
      </div>
      <div className="column2">
      <center><h5 className='mt-2' style={{color:'white'}}>Users</h5>
        
        <h2 >{lungth}</h2>
        </center>
      </div>
      <div className="column3 ms-5">
      <center><h5 className='mt-2' style={{color:'white'}}> Applications</h5>
        
        <h2 >{userss}</h2>
        </center>
      </div>
    </div>
    <br />
    <br />
    <br />

   <div className='container'>
   <center> <h3>Applications</h3></center>
    <br />
    <br />

        <Table striped bordered hover>
          <thead>
           
          </thead>
          <tbody>
           {
            petadopt?.length>0?
            petadopt.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.petname}</td>
              
              <td className='d-flex'> <Admindisplay adop={item}/> <i onClick={()=>handledelete(item._id)} style={{color:'red'}} class="fa-solid fa-trash mt-2 ms-5"></i> </td>
            </tr>))
            :null
            }
           
          </tbody>
        </Table>
   </div>
   <br />
   <br />
   
   <PieChartExample/>
   <div>
    
   </div>


    <br />
    <br />
    
   

      

    <Footer/>
    </div>
  )
}

export default Adminpage