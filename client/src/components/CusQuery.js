import React, {Component} from "react";
import QueryCard from "./QueryCard";
import API from "../utils/partsAPI";
import SelectTechModal from './SelectTechModal';

class CusQuery extends Component {
    state = {
        assignTech: []
    }
    componentDidMount() {
        this.loadQueryId();
    }
    loadQueryId = () => {
        API.getPartsRequest()
        .then(res=> {
            this.setState({assignTech: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
        return(
            <div className="jumbotron-fluid">
                {this.state.assignTech.map(AsgTech=>(
                    <QueryCard
                        firstname={AsgTech.firstName}
                        lastname={AsgTech.lastName}
                        phone={AsgTech.phoneNumber}
                        email={AsgTech.email}
                        vin={AsgTech.vin}
                        year={AsgTech.year}
                        make={AsgTech.make}
                        model={AsgTech.model}
                        msg={AsgTech.message}
                    />
                ))}
            <br></br>
            <SelectTechModal />
        </div>
        );
    }
};

    export default CusQuery;