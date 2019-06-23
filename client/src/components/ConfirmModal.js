import React from 'react';
import { Button, Modal } from 'react-bootstrap';


class ConfirmModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.confirmAndSendData = this.confirmAndSendData.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        if (this.validate())
            this.setState({ show: true });
    }

    validate() {
        if(
            this.props.formData.firstName.trim() != "" &&
            this.props.formData.lastName.trim() != "" &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.formData.email)
        ){
            return true;
        }
        return false;
    }

    confirmAndSendData = event => {
        event.preventDefault();

        this.props.sendData();
        this.setState({ show: false });

    }

    render() {
        return (
            <>
                <Button className="confirmBtn" onClick={this.handleShow}>
                    submit
          </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm your information.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>First Name: </b>{this.props.formData.firstName}</p>
                        <p><b>Last Name: </b>{this.props.formData.lastName}</p>
                        <p><b>Phone Number: </b>{this.props.formData.phoneNum}</p>
                        <p><b>Email: </b>{this.props.formData.email}</p>
                        <p><b>VIN #: </b>{this.props.formData.vin}</p>
                        <p><b>Vehicle Year: </b>{this.props.formData.year}</p>
                        <p><b>Vehicle Make: </b>{this.props.formData.make}</p>
                        <p><b>Vehicle Model: </b>{this.props.formData.model}</p>
                        <p><b>Message: </b>{this.props.formData.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.confirmAndSendData}>
                            Confirm
              </Button>
              <Button variant="danger" onClick={this.handleClose}>
                            Cancel
              </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ConfirmModal;