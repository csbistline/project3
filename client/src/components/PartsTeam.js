import React, { Component } from 'react';
import PartsSpecCard from "./PartsSpecCard";
import PartsSpec from "../PartsSpec.json";
import Contacts from "./Contacts";


class PartsTeam extends Component {

    state = {
        team: PartsSpec
    }

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">

                            {this.state.team.map(tech => (
                                <PartsSpecCard
                                    id={tech.id}
                                    key={tech.id}
                                    name={tech.name}
                                    image={tech.image}
                                    specialty={tech.specialty}
                                    contact={tech.contact}
                                />
                            ))}
                        </div>

                    <div className="col-sm-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

export default PartsTeam;