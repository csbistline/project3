import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import SelectTech from './SelectTech';



class SelectTechModal extends React.Component {
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
          <Button className="btn btn-primary myButton" onClick={this.handleShow}>
              Assign Tech
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Parts Specialists</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <SelectTech 
                    {...this.props}
                    />
                </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button> */}
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  export default SelectTechModal;