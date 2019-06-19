import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Contacts = () => {
    return (
        <div>
            <div>
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
            <div className="ml-auto">
                <ButtonGroup>
                    <Link to="/team"><Button variant="primary">Meet the Team</Button></Link>
                    <Link to="/request"><Button variant="info">Request a Part</Button></Link>
                    <Link to="#"><Button variant="primary">Team Login</Button></Link>
                </ButtonGroup>
                {/* <Link to="/team"><Button variant="primary" className="mr-1">Meet the TEAM</Button></Link>
                <Link to="/request"><Button variant="primary" className="mr-1">Request a Part</Button></Link>
                <Link to="#"><Button variant="primary" className="mr-1">PARTS TEAM Login</Button></Link> */}
            </div>
            <div>
                <br />
                <h3>Franklin Chrysler Dodge Jeep Ram</h3>
                <address>
                    1124 Murfreesboro Rd
                    <br />
                    Franklin, TN 37064
                </address>

            </div>
        </div>
    );
};

export default Contacts;