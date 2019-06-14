import React from 'react';

const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ "margin": "3%" }}>

                <div className="col-md-7" style={{ "margin": "2%" }}>
                    <div className="container" style={{ "margin": "2%" }}>
                        <img className="img-fluid mx-auto d-block" src="./assets/img/serviceImg02.jpg" alt="Franklin Chrysler Dodge Jeep Ram in Franklin TN Service" />
                        <h3><strong>Franklin Chrysler Dodge Jeep Ram Parts Department</strong></h3>
                        <p>Mopar provides authentic OEM parts for your Chrysler, Dodge, Jeep, RAM, FIAT or SRT vehicle.
                We also offer OEM accessories and performance parts for your vehicle to make sure it's customized to your heart's desire.</p>
                        <p>As a Chrysler, Dodge, Jeep, Ram dealership, we feature Mopar auto parts, including Mopar performance,
                            accessories, and engines. Whether you are looking for 4 wheel parts or truck accessories Franklin Chrysler
                            Dodge Jeep Ram can help you! We have, or can order, what you are looking for. We keep a large selection of
                auto parts, and our Mopar part specialists will help you find the right fit for your specialty part needs.</p>
                        <div className="ml-auto">
                            <button type="button" className="btn btn-primary btn-lg mr-1">PARTS TEAM Login</button>
                            <button type="button" className="btn btn-primary btn-lg mr-1">Meet the TEAM</button>
                            <button type="button" className="btn btn-primary btn-lg mr-1">Request a Part</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3" style={{ "margin": "3%" }}>
                    <div style={{ "margin": "3%" }}>
                        <div>
                            <img className="img-fluid mx-auto" src="./assets/img/moparAtYourService.png" alt="Franklin Chrysler Dodge Jeep Ram in Franklin TN Mopar At Your Service" style={{ "margin": "1%" }} />
                            <h4><b>Parts Hours</b></h4>
                            <hr />
                            <table className="table table-condensed" style={{ "tableLayout": "fixed" }}>
                                <tbody>
                                    <tr className="mondayHoursRow">
                                        <td className="mondayHoursLabel"> Monday</td>
                                        <td className="mondayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="tuesdayHoursRow">
                                        <td className="tuesdayHoursLabel"> Tuesday</td>
                                        <td className="tuesdayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="wednesdayHoursRow">
                                        <td className="wednesdayHoursLabel"> Wednesday</td>
                                        <td className="wednesdayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="thursdayHoursRow">
                                        <td className="thursdayHoursLabel"> Thursday</td>
                                        <td className="thursdayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="fridayHoursRow">
                                        <td className="fridayHoursLabel"> Friday</td>
                                        <td className="fridayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="saturdayHoursRow">
                                        <td className="saturdayHoursLabel"> Saturday</td>
                                        <td className="saturdayHours">7:30AM - 6:00PM</td>
                                    </tr>
                                    <tr className="sundayHoursRow">
                                        <td className="sundayHoursLabel"> Sunday</td>
                                        <td className="sundayHours">Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <br />
                        <h3>Franklin Chrysler Dodge Jeep Ram</h3>
                        <address>
                            1124 Murfreesboro Rd
                <br /> Franklin, TN 37064
                </address>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Main;