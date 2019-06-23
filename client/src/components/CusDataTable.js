import React, { Component } from 'react';
import API from "../utils/partsAPI";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'


class CusDataTable extends Component {
  state = {
    CusPartsQuery: []
  }
    componentDidMount() {
      this.loadPartsQuery();
  }
    loadPartsQuery = () => {
      API.getPartsRequests()
        .then(res => {
            this.setState({ CusPartsQuery: res.data })
        })
        .catch(err => console.log(err));
  };
  render() {
    return(
      <div className="containerFluid">
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Phone</th>
              <th>Customer Email</th>
              <th>Vin</th>
              <th>Assign Tech</th>
              <th>Query Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.CusPartsQuery.map(Query =>(
            <tr  key={Query._id}>
              <td className="align-middle">{Query.firstName}{Query.lastName}</td>
              <td className="align-middle">{Query.phoneNumber}</td>
              <td className="align-middle">{Query.email}</td>
              <td className="align-middle">{Query.vin}</td>
              <td className="align-middle">
              {/* link to specific QueryCard */}
              <Button variant="link"
                 data-id={Query._id}>
                 View Query/Assign Tech
              </Button>
              </td>
              <td>Status Toggle</td>
            </tr>
            ))}
          </tbody>
        </Table>
        </div>
        )}};

export default CusDataTable;