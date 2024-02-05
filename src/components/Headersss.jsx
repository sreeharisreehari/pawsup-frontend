import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Headersss() {
  return (
    <div>
        
     <Navbar className="imgg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand  href="#">
         
            <h4  style={{ color: 'black',textAlign:'center' }}>
              <i className="fa-solid fa-paw me-1"></i> Paws{' '}
              <span style={{ color: '#FFD700' }}>Up</span>
            </h4>
        
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Headersss