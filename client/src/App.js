import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDJRnavbar from "./components/CDJRnavbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import PartsTeam from "./components/PartsTeam";
import RequestForm from "./components/RequestForm";
import SelectTech from "./components/SelectTech";
import LoginForm from "./components/LoginForm";
import MgrDashboard from "./components/MgrDashboard";
import TechDashboard from "./components/TechDashboard";
import WorkOrder from "./components/WorkOrder";
import AutoReply from "./components/AutoReply";
import Register from "./components/Register"
// import YOURCOMPONENT from "./components/YOURCOMPONENT";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CDJRnavbar />
                    <Wrapper>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/team" component={PartsTeam} />
                            <Route exact path="/request" component={RequestForm} />
                            <Route exact path="/select" component={SelectTech} />
                            <Route exact path="/login" component={LoginForm} />
                            <Route exact path="/MgrDashboard" component={MgrDashboard} />
                            <Route exact path="/TechDashboard" component={TechDashboard} />
                            <Route exact path="/AutoReply" component={AutoReply} />
                            <Route exact path="/WorkOrder" component={WorkOrder} />
                            <Route exact path="/register" component={Register} />

                            {/* <Route exact path="/YOURCOMPONENT" component={YOURCOMPONENT} /> */}

                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        );
    }
}

export default App;
