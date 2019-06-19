import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


class VinModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="link" className="vinLink" onClick={this.handleShow}>
              Locate VIN #
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Common Vin # Locations</Modal.Title>
            </Modal.Header>
            <Modal.Body><Image fluid src={"https://static.carmd.com/CMSResources/image/VIN-location.jpg"} alt="Vin Location" /></Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  export default VinModal;