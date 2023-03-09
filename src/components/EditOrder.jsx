import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditOrder = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="editDetailsBtn" variant="primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>orderNo : {props.orderNo}</p>
          <p>date : {props.date}</p>
          <p>customer : {props.customer}</p>
          <p>trackingNo : {props.trackingNo}</p>
          <p>status : {props.status}</p>
          <p>consignee : {props.consignee}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditOrder;
