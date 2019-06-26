import React from 'react';
import Contacts from "./Contacts"
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <div className="row pt-4">

                <div className="col-md-8 pt-4">
                    <div className="container">
                        <img className="img-fluid mx-auto d-block" src="./assets/img/serviceImg02.jpg" alt="Franklin Chrysler Dodge Jeep Ram in Franklin TN Service" />
                        <div className="container">
                        <h3><strong>Franklin Chrysler Dodge Jeep Ram Parts Department</strong></h3>
                        <p>Mopar provides authentic OEM parts for your Chrysler, Dodge, Jeep, RAM, FIAT or SRT vehicle.
                We also offer OEM accessories and performance parts for your vehicle to make sure it's customized to your heart's desire.</p>
                        <p>As a Chrysler, Dodge, Jeep, Ram dealership, we feature Mopar auto parts, including Mopar performance,
                            accessories, and engines. Whether you are looking for 4 wheel parts or truck accessories Franklin Chrysler
                            Dodge Jeep Ram can help you! We have, or can order, what you are looking for. We keep a large selection of
                auto parts, and our Mopar part specialists will help you find the right fit for your specialty part needs.</p>
                    </div>
                    </div>
                </div>

                <div className="col-md-4 pt-4">
                    <Contacts />

                </div>

            </div>
        </div>
    );
};

export default Main;