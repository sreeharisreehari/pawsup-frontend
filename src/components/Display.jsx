import React from 'react'

import {Row,Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Display({foom}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button className='p-25 me-3'  onClick={handleShow}  style={{backgroundColor:'#ffc40c',borderColor:'#ffc40c'}}>More info</Button>

       
<div>
       <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{foom.petname}</Modal.Title>
      </Modal.Header>
      <Modal.Body><Row>
        
          <Col >
              <div className='mb-3 w-100'>
               <label htmlFor=""><b>Age:</b>  {foom.age}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Sex:</b> {foom.sex}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Colour:</b> {foom.colour}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Description:</b> <br /> 
              {foom.description}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Vaccination Details:</b> {foom.vaccination} </label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Reason for Rehoming:</b> {foom.reason}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Email:</b> {foom.apemail}</label>
              </div>
              <div className='mb-3 w-100'>
              <label htmlFor=""><b>Contact Details:</b> {foom.contact}</label>
              </div>
          </Col>
        </Row></Modal.Body>
      <Modal.Footer>
        <center>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </center>
        
      </Modal.Footer>
    </Modal>
</div>

    </div>
  )
}

export default Display