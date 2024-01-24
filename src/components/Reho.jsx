import React, { useContext, useEffect, useState } from 'react'
import Headersss from './Headersss'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import { addAPI } from '../services/allAPI';
import { addpetresponsecontext } from '../context/Contextshare';
import Swal from 'sweetalert2';


function Reho() {

const [token,setoken]=useState("")

  const [preview,setpreview]=useState("")
const {addpetresponse,setaddpetresponse}=useContext(addpetresponsecontext)


  const [addpet,setaddpet]=useState({
    petname:"",
    breed:"",
    age:"",
    sex:"",
    description:"",
    location:"",
    colour:"",
    vaccination:"",
    reason:"",
    apemail:"",
    contact:"",
    image:""



  })
  console.log(addpet);

  useEffect(()=>{
    if(addpet.image)
    {(setpreview(URL.createObjectURL(addpet.image)))}
    else{
      setpreview("")
    }


  },[addpet.image])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setoken(sessionStorage.getItem("token"))

    }
    else{
      setoken("")
    }


  },[])
  
  console.log(preview);

  // add petdetails

  const handleadd=async(e)=>{
  e.preventDefault()
  const { petname,
  breed,
  age,
  sex,
  description,
  location,
  colour,
  vaccination,
  reason,
  apemail,
  contact,
  image}=addpet

  if( !petname ||
    !breed ||
    !age ||
    !sex ||
    !description ||
    !location ||
    !colour ||
    !vaccination ||
    !reason ||
    !apemail ||
    !contact ||
    !image){
      alert('please fill the for completely')
    }
    else{
      // reqbody
      const reqbody=new FormData()

      reqbody.append("petname",petname)
      reqbody.append("breed",breed)
      reqbody.append("age",age)
      reqbody.append("sex",sex)
      reqbody.append("description",description)
      reqbody.append("location",location)
      reqbody.append("colour",colour)
      reqbody.append("vaccination",vaccination)
      reqbody.append("reason",reason)
      reqbody.append("apemail",apemail)
      reqbody.append("contact",contact)
      reqbody.append("image",image)

// reheader
if(token){
const reqheader={
  "Content-Type":"multipart/form-data",
  "Authorization":`Bearer ${token}`

}




      const result=await addAPI(reqbody,reqheader)
      console.log(result);
      if(result.status===200){
        Swal.fire({
          icon:'success',
          title: 'Pet added Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setaddpetresponse(result.data)
        setaddpet({
          petname:"",
    breed:"",
    age:"",
    sex:"",
    description:"",
    location:"",
    colour:"",
    vaccination:"",
    reason:"",
    apemail:"",
    contact:"",
    image:""
        })
      }
    }
      
    }

  }



  return (
    <div className='imgg'>
         <Headersss/> 
        <br />
        
        
        <br />
        <br />

        <center>   <h2>Home is Where the Fur is: Rehome Today!</h2></center>
        <br />
        
       <center> <h4 className='text-info'>fill this form</h4></center>
       <br />


       <Container>
      <center>
           <div className='w-75 bg-light'  style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '20px' }} >
          <Row className="justify-content-md-center">
            
            <Col xs={4} md={4}>
           <center>
                <label  >
                    <input type="file" style={{display:'none'}} onChange={(e)=>setaddpet({...addpet,image:e.target.files[0]})} />
                    {/* target.files are used to access a file or image. */}
                    <img width={'200px'} height={'200px'} src={preview?preview:"http://cdn.onlinewebfonts.com/svg/img_94880.png"} className=' justify-content-center' alt="" value={addpet.image}  />
                </label>
           </center>
          
             
             
            
            </Col>
            <Col Xs={8} md={8}>
            <Form>
            {/* First Form Group */}
            <Form.Group as={Row} controlId="petname">
              <Form.Label column sm={3}>
                Pet Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter your pet name" value={addpet.petname} onChange={(e)=>setaddpet({...addpet,petname:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
    
            <Form.Group as={Row} controlId="breed">
              <Form.Label column sm={3}>
                Breed:
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter  breed name"  value={addpet.breed} onChange={(e)=>setaddpet({...addpet,breed:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
    
         
            <Form.Group as={Row} controlId="age" >
              <Form.Label column sm={3}>
                Age :
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter age"  value={addpet.age} onChange={(e)=>setaddpet({...addpet,age:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
    
            <Form.Group as={Row} controlId="sex">
              <Form.Label column sm={3}>
                Sex :
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter Sex"  value={addpet.sex} onChange={(e)=>setaddpet({...addpet,sex:e.target.value})}/>
              </Col>
            </Form.Group>
            <br />
    
            <Form.Group as={Row} controlId="description">
              <Form.Label column sm={3}>
                Description :
              </Form.Label>
              <Col sm={9}>
                <Form.Control style={{height:'100px'}} type="text"  value={addpet.description}  onChange={(e)=>setaddpet({...addpet,description:e.target.value})}   />
              </Col>
            </Form.Group>
            <br />
    
            <Form.Group as={Row} controlId="location">
              <Form.Label column sm={3}>
                Location :
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter location"  value={addpet.location} onChange={(e)=>setaddpet({...addpet,location:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="color">
              <Form.Label column sm={3}>
                Colour :
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter colour"  value={addpet.colour} onChange={(e)=>setaddpet({...addpet,colour:e.target.value})} />
              </Col>
            </Form.Group>
    <br />
    <Form.Group as={Row} controlId="vaccination">
              <Form.Label column sm={3}>
                Vaccination Details:
              </Form.Label>
              <Col sm={9}>
                <Form.Control style={{height:'70px'}}  type="text" value={addpet.vaccination}    onChange={(e)=>setaddpet({...addpet,vaccination:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
    <Form.Group as={Row} controlId="reason">
              <Form.Label column sm={3}>
                Reason for rehoming :
              </Form.Label>
              <Col sm={9}>
                <Form.Control style={{height:'70px'}} type="text"   value={addpet.reason} onChange={(e)=>setaddpet({...addpet,reason:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="reason">
              <Form.Label column sm={3}>
                Email :
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder='enter email'  value={addpet.apemail} onChange={(e)=>setaddpet({...addpet,apemail:e.target.value})} />
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="contact">
              <Form.Label column sm={3}>
                Contact Details :
              </Form.Label>
              <Col sm={9}>
                <Form.Control style={{height:'70px'}} type="text"  value={addpet.contact}  onChange={(e)=>setaddpet({...addpet,contact:e.target.value})} />
              </Col>
            </Form.Group>
    
           
          </Form>
          <div className='d-flex align-items-center flex-column mt-4'>
                                    <button onClick={handleadd}  style={{borderRadius:'10px'}} className='btn btn-dark  mt-4'>Submit</button>
                                    
                                </div>
    
            </Col>
          </Row>
          </div>
      </center>
    </Container>
    <br />
    <br />
    <br />
    <Link className='me-5'  style={{textDecoration:'none',color:'black',float:'right',}} to={'/edit'}><button style={{float:'right'}} className='btn btn-primary '>Previous Applications <i class="fa-solid fa-arrow-right"></i></button></Link>

    <br />
    <br />

    <Footer/>


    </div>
  )
}

export default Reho