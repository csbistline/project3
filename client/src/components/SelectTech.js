import React, { Component } from "react";
import API from "../utils/techsAPI";
import partsAPI from "../utils/partsAPI";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class SelectTech extends Component {

    state = {
        team: [],
        selectedRequest: this.props._id
    }

    componentDidMount() {
        this.loadTechs();
    }

    loadTechs = () => {
        API.getTechs()
            .then(res => {
                console.log(res);
                console.log(res.data)
                this.setState({ team: res.data })
            })
            .catch(err => console.log(err));
    };

    updateParts = (id, assignee, assigneeName) => {
        partsAPI.updatePartsRequestAssigned(id, assignee, assigneeName)
            .then(res => {
                console.log(res);
                this.props.handleClose();
                this.props.loadQuery("requested");
            })
    }

    render() {
        return (
            <div className="pt-4">

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th style={{ width: "20px" }}></th>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.team.map(tech => (
                            <tr
                                key={tech._id}>
                                <td className="align-middle">
                                    <Button
                                        className="btn btn-primary myButton"
                                        size="sm"
                                        data-id={tech._id}
                                        onClick={() => this.updateParts(this.state.selectedRequest, tech._id, tech.name)}
                                    >
                                        Select
                                    </Button>
                                </td>
                                <td className="align-middle"></td>
                                <td className="align-middle">
                                    <img src={tech.image2} alt={tech.name} style={{ width: '5rem', height: 'auto', marginRight: '1%' }} />
                                    {tech.name}</td>
                                <td className="align-middle">{tech.specialty}</td>
                                <td className="align-middle">{tech.contact}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SelectTech;