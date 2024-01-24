import React from 'react'

function edu() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <button onClick={handleShow}   className='btn'><i class="fa-solid fa-pen-to-square text-dark"></i></button>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Pet name'  />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Breed'   />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Age'    />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Sex'  />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Description'  />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Location'  />
                </div>
               
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Colour'  />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Vaccination Details'  />
                </div>
                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Reason for rehoming'  />
                </div>

                <div className='mb-3 w-100'>
                    <input type="text" className='form-control' placeholder='Contact details'  />
                </div>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default edu