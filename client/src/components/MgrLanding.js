import React, {Component} from "react";
import QueryCard from "./QueryCard";
import API from "../utils/partsAPI";

class MgrLanding extends Component {
    state = {
        assignTech: []
    }
    componentDidMount() {
        this.loadQuery();
    }
    loadQuery = () => {
        API.getPartsRequests()
        .then(res=> {
            this.setState({assignTech: res.data})
        })
        .catch(err=> console.log(err));
    };
    render() {
        return(
            <div className="jumbotron">
                {this.state.assignTech.map(Query =>(
                <QueryCard
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

    export default MgrLanding;