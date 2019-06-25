import React, {Component} from "react";
import AssignedQueryCard from "./AssignedQueryCard";
import API from "../utils/partsAPI";

class WorkOrder extends Component {
    state = {
        WOStatus: []
    }
    componentDidMount() {
        this.loadQuery();
    }
    loadQuery = () => {
        API.getPartsRequests()
        .then(res=> {
            this.setState({WOStatus: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
        return(
            <div className="jumbotron">
                <h1>Assigned Open Parts Request</h1>
                <h3>Customer Notified (insert date)</h3>
                <hr className="my-4"></hr>
                {this.state.WOStatus.map(Query =>(
                <AssignedQueryCard
                    id={Query.id}
                    firstName={Query.firstName}
                    lastName={Query.lastName}
                    phoneNumber={Query.phoneNumber}
                    email={Query.email}
                    vin={Query.vin}
                    year={Query.year}
                    make={Query.make}
                    model={Query.model}
                    message={Query.message}
                />
            ))}
        </div>
        );
    }
};

    export default WorkOrder;