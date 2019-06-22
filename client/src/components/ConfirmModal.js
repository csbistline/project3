import React from 'react';
import { Button, Modal } from 'react-bootstrap';


class ConfirmModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.confirmAndSendData = this.confirmAndSendData.bind(this);
        console.log(props.formData)
        this.state = {
            show: false,
            firstName: [props]
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    confirmAndSendData() {
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

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.confirmAndSendData}>
                            Confirm
              </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ConfirmModal;