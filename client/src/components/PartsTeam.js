import React, { Component } from 'react';
import PartsSpecCard from "./PartsSpecCard";
import Contacts from "./Contacts";
import API from "../utils/techsAPI"


class PartsTeam extends Component {

    state = {
        team: []
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

                    <div className="col-md-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
}

export default PartsTeam;