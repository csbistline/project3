import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'


class CusDataTable extends Component {
  render() {
    return(
      <div>
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
            {/* insert data from CustQuery DB */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              {/* link to specific QueryCard */}
              <Button variant="link">View Query/Assign Tech</Button>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <Button variant="link">View Query/Assign Tech</Button>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </div>
        )}};

export default CusDataTable;