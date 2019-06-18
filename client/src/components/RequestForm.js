import React, { Component } from 'react';
import PartsSpecCard from "./PartsSpecCard";
import PartsSpec from "../PartsSpec.json";
import Contacts from "./Contacts";


class RequestForm extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">


                            <h1>This will be the request form</h1>
                        </div>

                    <div className="col-sm-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm;