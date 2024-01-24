import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';

function Admindisplay({adop}) {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>

<button onClick={handleShow}  className='btn'><i style={{color:'black'}} class="fa-solid fa-eye"></i></button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
<center><img src={`${BASE_URL}/uploads/${adop.image}`} alt="" width={'150px'} /></center>
<br />

        <div className='mb-3 w-100'>
               <label htmlFor=""><b>Petname</b>:{adop.petname} </label>
              </div>
              <div className='mb-3 w-100'>
               <label htmlFor=""><b>Breed:</b>{adop.breed} </label>
              </div>
        <div className='mb-3 w-100'>
               <label htmlFor=""><b>Age:</b>{adop.age} </label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Sex:</b>{adop.sex} </label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Colour:</b> {adop.colour}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Description:</b> {adop.description}<br /> 
              </label>
              </div>
              <div className='mb-3 w-100'>
               <label htmlFor=""><b>Location:</b> {adop.location}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Vaccination Details:</b>{adop.vaccination}  </label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Reason for Rehoming:</b> {adop.reason}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Email:</b> {adop.apemail}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Contact Details:</b> {adop.contact}</label>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Admindisplay