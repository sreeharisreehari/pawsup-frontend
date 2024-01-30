import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import { isauthtokencontext } from '../context/Contextshare';
import Swal from 'sweetalert2';


function Auth({register}) {

const {authtoken,setauthtoken}=useContext(isauthtokencontext)

    const [userdata,setuserdata]=useState({
        username:"",
        email:"",
        password:""
    })
    console.log(userdata);


    const registerform=register?true:false
    const navigate=useNavigate()




    const handleregister=async(e)=>{
        e.preventDefault()
        

        const {username,email,password}=userdata



        
        if(!username || !email || !password){
            alert('please fill the form completely')
        }
        else{
        const result= await registerAPI(userdata) 
        console.log(result.data);

        
    
    if(result.status ===200){
   alert(`${result.data.username} is successfully registered`)
    

   setuserdata({
                username:"",
   email:"",
    password:""

         })
//     //navigate to login page
     navigate('/login')

        
}else{
    console.log(result.response.data);
         alert(result.response.data)
  }


         }

       
    

        


        
        }
        // login

        const handlelogin=async(e)=>{
            e.preventDefault()
            const {email,password}=userdata
            if(!email || !password){
                alert('please fill the form completely')
            }
            else{
                const result=await loginAPI(userdata)
                console.log(result);
                console.log(result.data.existuser.username);
                if (result.data.existuser.username=="admin" && result.data.existuser.password=="admin123" && result.data.existuser.email == "admin@gmail.com") {
                    navigate('/admin')
                    
                }
                else{
                    navigate('/home')
                }
                if(result.status===200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successfull!',
                       
                       
                      })
                    setauthtoken(true)
                    

                    sessionStorage.setItem(" existuser",JSON.stringify(result.data.existuser))
                    sessionStorage.setItem("token",(result.data.token))


                    setuserdata({
                       
                        email:"",
                        password:""

                    })
            
                    

                }
                else{
                    alert(result.response.data)
                }
              
            }

        }

  


   
  return (
    <div className='imgg scroll-container '>
       <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
        
        <div className='w-75 container' >
            <Row >
                <Col md={6} sm={12} className='me-5'>
                <img  className='mt-5 ' src="https://cdn.dribbble.com/users/3349387/screenshots/8249095/media/2323a82bb8d36cc3f6fc835c33f5801a.gif" alt="" width={'110%'}  />

                </Col>
                <Col className='ms-5'>
                <h1 style={{color:'black'}} className='ms-5'><i class="fa-solid fa-paw me-1"></i>Paws <span style={{color:'#FFD700'}}>Up</span></h1>
                <h5 className='ms-5 mt-4'>{
                   
                    }</h5>
                    <br />
                    <br />
                  
                    <Form>
                                {
                                    registerform&&
                                  
                                    <Form.Group className='mt-5' controlId="validationFormik01">
                                    <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter Yourname' value={userdata.username} onChange={(e)=>setuserdata({...userdata,username:e.target.value})} /> 
                                    </Form.Group>
                                }
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="email" placeholder='Enter Your Email'  value={userdata.email} onChange={(e)=>setuserdata({...userdata,email:e.target.value})} />
                            </Form.Group>
                            <Form.Group className='mt-3' controlId="validationFormik01">
                            <Form.Control style={{borderRadius:'10px'}} type="text" placeholder='Enter Your Password'  value={userdata.password} onChange={(e)=>setuserdata({...userdata,password:e.target.value})} />
                            </Form.Group>
                            {registerform?
                                <div className='d-flex align-items-center flex-column mt-4'>
                                    <button onClick={handleregister}  style={{borderRadius:'10px',backgroundColor:'FFD400'}} className='btn btn-dark'>Register</button>
                                    <p  className='mt-2' >Already A User? Click Here To <Link style={{textDecoration:'none'}} to={'/login'}>Login</Link></p>

                                </div>:
                                <div className='d-flex align-items-center flex-column mt-4'>
                                <button  onClick={handlelogin} style={{borderRadius:'10px'}} className='btn btn-dark  mt-4'>Login</button>
                                <p className='mt-2' >New User? Click Here To <Link style={{textDecoration:'none'}} to={'/register'}>Register</Link></p>

                            </div>
                            }

                            </Form>
                            

                
                </Col>
            </Row>
        </div>
        {/* <ToastContainer autoclose={2000} theme='colored' position='top-center'/> */}
         
    </div>
    </div>
  )
}

export default Auth