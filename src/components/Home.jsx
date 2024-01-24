import React, { useContext, useEffect } from 'react'
import Headersss from './Headersss'
import {Row,Col, Card} from 'react-bootstrap'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { isauthtokencontext } from '../context/Contextshare'
import { BASE_URL } from '../services/baseurl';
import { proAPI } from '../services/allAPI'
import Swal from 'sweetalert2'





// import Footer from '../components/Footer' 

function Home() {
const [userprofile,setuserprofile]=useState({
  username:"",
  email:"",
  password:"",
  profile:""

})

const [existingimage,setexistingimage]=useState("")

const [preview,setpreview]=useState("")

useEffect(()=>{
  console.log(sessionStorage.getItem(" existuser"));
  const user=(JSON.parse(sessionStorage.getItem(" existuser")))
  console.log(user);

  setuserprofile({...userprofile,username:user.username,email:user.email,password:user.password,profile:""})
  setexistingimage(user.profile)

},[])
useEffect(()=>{

if(userprofile.profile){
  setpreview(URL.createObjectURL(userprofile.profile))
}
else{
  setpreview("")
}

},[userprofile.profile])


console.log(userprofile);
  const [open, setOpen] = useState(false);
  const {authtoken,setauthtoken}=useContext(isauthtokencontext)

const navigate=useNavigate()

  const handlelogout=()=> {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem(" existuser")
    setauthtoken(false)
    navigate('/')
    


  }
  // console.log(sessionStorage.getItem("existuser"));

  const handleprofileupdate=async()=>{
    const {username,email,password,profile}=userprofile

    if(!username || !email){
      alert('please fill the form completely')
    }
    else{
      const reqbody=new FormData()
      reqbody.append("username",username)
      reqbody.append("email",email)
      reqbody.append("password",password)
      // reqbody.append("profile",profile)
      preview?reqbody.append("profile",profile):reqbody.append("profile",existingimage)
    
    const token=sessionStorage.getItem("token")
    if(preview){
      const reqheader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      
      }
      const result=await proAPI(reqbody,reqheader)
      console.log(result);
      if(result.status===200){
        Swal.fire({
          icon: 'success',
          title: ' Profile Updated Successfully',
         
        })
        sessionStorage.setItem(" existuser",JSON.stringify(result.data))
      }
      else{
        console.log(result.response.data);
      }

    }
    else{
      const reqheader={
        "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`


      }
      const result=await proAPI(reqbody,reqheader)
      console.log(result);
      if(result.status===200){
        Swal.fire({
          icon: 'success',
          title: ' Profile Updated Successfully',
         
        })
        sessionStorage.setItem(" existuser",JSON.stringify(result.data.existuser))
      }
      else{
        console.log(result.response.data);
      }
      

    }
    

  }
}

 
  return (
<>
      <div className='imgg'>
        {/* <Headersss/> */}
        <Navbar className="imgg">
      <Container>
        <Navbar.Brand className='mx-auto' href="#home"> <h4 style={{color:'black'}} ><i class="fa-solid fa-paw me-1"></i> Paws <span style={{color:'#FFD700'}}>Up</span></h4></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <button onClick={handlelogout} style={{float:'right'}} className='btn btn-primary '>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
   <br />
   <br />
   <br />
   
   <br />
   <br />
   <picture>
    <source media="(min-width: )" srcset="" />
    <img src="" alt="" />
   </picture>
    <div class="container">
    <div class="row">
      
      <div class="col-sm-1">
      
      </div> 

      
      <div class="col-sm-8 text-center">
      <center>
       <Link style={{textDecoration:'none'}} to={'/adopt'}>
            <div  style={{height:'200px',borderRadius:'10px',backgroundColor:'#32de84'}} >
              <br />
              
              
              <img className='' src="https://freeiconshop.com/wp-content/uploads/edd/search-flat.png" alt="" width={'70px'}  />
              <br />
              
        
        <h2>I want to adopt a pet</h2>
        <p style={{color:'black'}}>Search the avialable pets listed on the Paws Up</p>
      </div>
       </Link>

    <br />
    <br />
    <br />

    <Link style={{textDecoration:'none'}} to={'/rehome'}>
      <div style={{height:'200px',borderRadius:'10px',backgroundColor:'#1CAC78'}} >
              <br />
              
              
              <img className='' src="https://i.pinimg.com/originals/c3/6e/a4/c36ea4eb6b5af4332c7f1f11eff88015.png" alt="" width={'80px'}  />
              <br />
              
        
        <h2>I want to rehome my pet</h2>
        <p style={{color:'black'}}>Start the process.it's free to list you pet on paws Up</p>
      </div>
    </Link>
      </center>
      </div>

      
      <div class="col-sm-3">
       
        <br />
        
        
      <div className='card shadow p-3  ms-5'>
    <div className='d-flex justify-content-between align-item-center'>
        <h4> <i class="fa-solid fa-user"></i>  Profile  </h4>
              <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i  class="fa-solid fa-right-from-bracket fa-rotate-90"></i></button>

    </div>
    <Collapse in={open}>
    <div className='row justify-content-center'>
        <label htmlFor="profile">
        <input id="profile" type="file" style={{display:'none'}}   onChange={(e)=>setuserprofile({...userprofile,profile:e.target.files[0]})} />
        
      
         <center>{existingimage==""? <img width={'150px'} height={'150px'} src={preview?preview:"https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"}  className='rounded-circle justify-content-center' alt="" />:<img width={'150px'} height={'150px'} src={preview?preview:`${BASE_URL}/uploads/${existingimage}`}  className='rounded-circle justify-content-center' alt="" />}</center>
                
        </label>
        <div  className='mb-3 mt-3'>
<input type="text" placeholder='Username' className='form-control' value={userprofile.username} onChange={(e)=>setuserprofile({...userprofile,username:e.target.value})}   />

        </div>
        <div  className='mb-3 mt-2'>
<input type="text" placeholder='email' className='form-control'  value={userprofile.email} onChange={(e)=>setuserprofile({...userprofile,email:e.target.value})} />

        </div>
        <div  className='mb-3 mt-2'>
   <button onClick={handleprofileupdate} className='btn btn-success rounded w-100' >Update</button>
        </div>
        </div>
        </Collapse>
    </div>

      </div>
    </div>
  </div>
  <br />
      <br />
      <br />
      <Footer/>

       
       
      </div>
      
</>
  )
}

export default Home