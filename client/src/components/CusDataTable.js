import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// fuction for Date if we want to insert:
// const onSortFunction = {
//     date(Date) {
//       return moment(Date, 'Do MMMM YYYY').valueOf();
//     },
//   };

var CustQueryData = [{ //IMPORT FROM DB
}];

QueryDeleteButton = (onClick) => {
    return (
      <DeleteButton
        btnText='CustomDeleteText'
        btnContextual='btn-success'
        className='my-custom-class'
        onClick={ e => this.handleDeleteButtonClick(onClick) }/>
    )};

class CusQueryTable extends React.Component {
    
    render() {

        const options = {
            deleteBtn: this.QueryDeleteButton
          };
          const selectRow = {
            mode: 'checkbox'
          };

      return (
        <BootstrapTable selectRow={ selectRow } data={ CustQueryData } striped hover condensed options={ options } deleteRow>
            <TableHeaderColumn width='100' dataField='id' isKey>CustomerID</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='name'>Customer Name</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='email'>Customer Email</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='Vin'>Vehicle Vin</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='phone'>Customer Phone</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='Vmake'>Vehicle Make</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='Vmodel'>Vehicle Model</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='Vyear'>Vehicle Year</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='PartsSpec'>Specialist Assigned</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='Status'>Query Status</TableHeaderColumn>
        </BootstrapTable>,  
        <CusQueryTable />
      );
    }
  }

