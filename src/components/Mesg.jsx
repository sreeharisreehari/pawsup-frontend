// import React from 'react'
// import  { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
// import {  Row, Col } from 'react-bootstrap';
// import Swal from 'sweetalert2';



// function Mesg({foom}) {

  

//     const [Message,setmessage]=useState({
//         sandesh:""
//     })
//     console.log(Message);
    
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const handleClose1=()=>{

//         const {sandesh}=Message

//         if (!sandesh){
//             alert('Please fill the form Completely')
           

//         }
//         else{
//         Swal.fire({
//             icon: 'success',
//             title: ' sended Successfully!',
           
           
//           })
//           handleClose()
//         }

        


        

//     }
    
    
  
    
//   return (
//     <div>
//          <Button onClick={handleShow} className='ms-4' variant="primary">
//             Enquire
//           </Button>
        

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <br />
//         <center><img src="https://cdn4.iconfinder.com/data/icons/chat-and-social-networking/50/98-1024.png" alt="" width={'90px'} /></center>
//         <Modal.Header >
            
//          <center> <Modal.Title>Send Message to<span className='text-info'> {foom.apemail}</span> </Modal.Title></center>
//         </Modal.Header>
//         <Modal.Body>
//         <div className='mb-3 w-100'>
//                     <input style={{height:'100px',borderColor:'#20B2AA'}} type="text" className='form-control' value={Message.sandesh} onChange={(e)=>setmessage({...Message,sandesh:e.target.value})}     />
//                 </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button  variant="primary" onClick={handleClose1}>
//             Send
//           </Button>

//         </Modal.Footer>
//       </Modal>




//     </div>
//   )
// }

// export default Mesg


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Mesg({ foom }) {
  const [Message, setmessage] = useState({
    sandesh: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = () => {
    const { sandesh } = Message;

   
      // Open Gmail compose window with specified email address
      const email = foom.apemail;
      const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`;
      window.open(gmailComposeUrl, '_blank');

      

      handleClose();
   
  };

  return (
    <div>
      <Button onClick={handleShow} className='ms-4' variant="primary">
        Enquire
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <br />
        <center><img src="https://cdn4.iconfinder.com/data/icons/chat-and-social-networking/50/98-1024.png" alt="" width={'90px'} /></center>
        <Modal.Header>
          <center><Modal.Title>Send Message to<span className='text-info'> {foom.apemail}</span></Modal.Title></center>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Mesg;
