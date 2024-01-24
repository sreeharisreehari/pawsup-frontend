import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { updateAPI } from '../services/allAPI';
import { editpetresponsecontext } from '../context/Contextshare';
import Swal from 'sweetalert2';


function Maran({comp}) {
const {updatepetresponse,setupdatepetresponse}=useContext(editpetresponsecontext)

  const [preview,setpreview]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () =>{ setShow(false);

    handleClose1()}

    const handleShow = () => setShow(true);

    const [companion,setcompanion]=useState({
      id:comp._id,
       petname:comp.petname,
       breed:comp.breed,
       age:comp.age,
       sex:comp.sex,
       description:comp.description,
       location:comp.location,
       colour:comp.colour,
       vaccination:comp.vaccination,
       reason:comp.reason,
       apemail:comp.apemail,
       contact:comp.contact,
       image:""
   })

   console.log(companion);


   useEffect(()=>{
    if(companion.image){
      setpreview(URL.createObjectURL(companion.image))
   

  }
},[companion.image])

const handleClose1=()=>{
  setcompanion({
    id:comp._id,
    petname:comp.petname,
    breed:comp.breed,
    age:comp.age,
    sex:comp.sex,
    description:comp.description,
    location:comp.location,
    colour:comp.colour,
    vaccination:comp.vaccination,
    reason:comp.reason,
    apemail:comp.apemail,
    contact:comp.contact,
    image:""
  })
  setpreview("")
}



 const handleupdate=async()=>{
  const {id,petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact,image}= companion
  if(!petname || !breed || !age || !sex || !description || !location || !colour || !vaccination || !reason || !apemail || !contact ){
    alert('please fill the form completely')
  }
  else{
    const reqbody= new FormData()
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
    preview?reqbody.append("image",image):reqbody.append("image",comp.image)
    



  
  const token=sessionStorage.getItem("token")

  if(preview){
    const reqheader={
      "Content-Type":"multipart/form-data",
  "Authorization":`Bearer ${token}`

    } 

    const result=await updateAPI(id,reqbody,reqheader)
    console.log(result);
    if(result.status===200){
      Swal.fire({
        icon: 'success',
        title: 'Updated Successfully',
       
      })
      handleClose()
      setupdatepetresponse(result.data)
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
  const result=await updateAPI(id,reqbody,reqheader)
  console.log(result);
  if(result.status===200){
    Swal.fire({
      icon: 'success',
      title: 'Updated Successfully',
     
    })
    handleClose()
    setupdatepetresponse(result.data)

  }
  else{
    console.log(result.response.data);
  }
  


}
}
 }
 

    

    
    

    
    

   
  return (
    <div>


<button onClick={handleShow}   className='btn'><i class="fa-solid fa-pen-to-square text-dark"></i></button>

<Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
     
    </Modal.Header>
   
       <br />
       <label htmlFor="imag">
       <input id='imag' type="file" style={{display:'none'}}  onChange={(e)=>setcompanion({...companion,image:e.target.files[0]})}/>
<center><img className='' src={preview?preview:`${BASE_URL}/uploads/${comp.image}`} alt=""  width={'160px'} height={'160px'} /></center></label>

{/* </div> */}

<br />

       

      {/* <div className='col-7 ms-3'> */}
            <div className='mb-3 w-100'>
                        <input type="text" className='form-control' value={companion.petname} onChange={(e)=>setcompanion({...companion,petname:e.target.value})}  />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Breed' value={companion.breed} onChange={(e)=>setcompanion({...companion,breed:e.target.value})}   />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Age' value={companion.age} onChange={(e)=>setcompanion({...companion,age:e.target.value})}    />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Sex'  value={companion.sex} onChange={(e)=>setcompanion({...companion,sex:e.target.value})} />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Description' value={companion.description} onChange={(e)=>setcompanion({...companion,description:e.target.value})}  />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Location' value={companion.location} onChange={(e)=>setcompanion({...companion,location:e.target.value})}  />
                    </div>
                   
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Colour' value={companion.colour} onChange={(e)=>setcompanion({...companion,colour:e.target.value})}  />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Vaccination Details' value={companion.vaccination} onChange={(e)=>setcompanion({...companion,vaccination:e.target.value})}  />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Reason for rehoming' value={companion.reason} onChange={(e)=>setcompanion({...companion,reason:e.target.value})}  />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='email' value={companion.apemail} onChange={(e)=>setcompanion({...companion,apemail:e.target.value})}  />
                    </div>
        
                    <div className='mb-3 w-100'>
                        <input type="text" className='form-control' placeholder='Contact details' value={companion.contact} onChange={(e)=>setcompanion({...companion,contact:e.target.value})}  />
                    </div>
       


       
       
                    {/* </div> */}
       {/* </div> */}
   
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose1}>
        cancel
      </Button>
      <Button variant="primary" onClick={handleupdate}>
        Update
      </Button>
    </Modal.Footer>
  </Modal>


        





    </div>
  )
}

export default Maran