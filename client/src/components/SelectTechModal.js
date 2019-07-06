import React from "react";
import { Button, Modal } from "react-bootstrap";
import SelectTech from "./SelectTech";



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
            <div>
                {(this.props.status === "completed") ? "" : 
                    <Button className="btn btn-primary myButton" onClick={this.handleShow}>
                        {(this.props.assignee) ? "Change Tech" : "Assign Tech" }
                    </Button>
                }
                <Modal size='lg' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h4>Select Parts Specialist</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SelectTech
                            {...this.props}
                            handleClose={this.handleClose}
                        />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default SelectTechModal;