



import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import Headersss from './Headersss';
import { deleteAPI, editAPI } from '../services/allAPI';
import { addpetresponsecontext, editpetresponsecontext } from '../context/Contextshare';
import Maran from './Maran';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Editdetails() {
  const [updatepet, setupdatepet] = useState([]);
  const { updatepetresponse, setupdatepetresponse } = useContext(editpetresponsecontext);
  const { addpetresponse, setaddpetresponse } = useContext(addpetresponsecontext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const getuserpet = async () => {
    const token = sessionStorage.getItem('token');
    const reqheader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const result = await editAPI(reqheader);
    setupdatepet(result.data);
  };

  const handledelete = async (id) => {
    const token = sessionStorage.getItem('token');
    const reqheader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const result = await deleteAPI(id, reqheader);
    if (result.status === 200) {
      getuserpet();
    } else {
      console.log(result.response.data);
    }
  };
  const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  useEffect(() => {
    getuserpet();
  }, [addpetresponse, updatepetresponse]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = updatepet.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  return (
    <div className='imgg '>
      <Headersss />
      <Container>
        <Row>
         
          <Col xs={12} md={2}>
           
            <br />
          <br />
           <br />
           <br />
           <br />
          <br />
           <br />
          <br />
           <br />
          <br />
           <br />
           <br />
          <br />
           <br />
           

          <img src="https://webstockreview.net/images/dog-clipart-animation-3.gif" alt="" width={'220px'} />
         
          </Col>
          <Col xs={12} md={8} className="d-flex align-items-center justify-content-center">
            <div  data-aos="flip-right" style={{ padding: '40px', textAlign: 'center' }}>
              <br />
              <br />
              <div className="card shadow p-4 ">
                <div className="d-flex justify-content-between">
                  <h3>My Applications to Rehome</h3>
                </div>
                <div className="mt-4">
                  {currentData?.length > 0 ? (
                    currentData?.map((item) => (
                      <div className="border d-flex align-items-center p-2 mb-3 rounded" key={item._id}>
                        <h5>{item.petname}</h5>
                        <div className="ms-auto d-flex">
                          <Maran comp={item} />
                          <button onClick={() => handledelete(item._id)} className="btn">
                            <i className="fa-solid fa-trash text-danger"></i>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-warning fw-bolder fs-4">No Application uploaded yet !!</p>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={2}>
           
            <br />
           <br />
           <br />
           <br />
         <img src="http://creativesolutionscounseling.net/wp-content/uploads/2020/02/happy-woman.png" alt="" height={'460px'} />
          </Col>
        </Row>
      </Container>

      
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="mx-3">
          Page {currentPage} of {Math.ceil(updatepet.length / itemsPerPage)}
        </span>
        <Button
          variant="primary"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(updatepet.length / itemsPerPage)}
        >
          Next
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
       
      </Modal>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Editdetails;




