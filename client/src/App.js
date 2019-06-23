import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDJRnavbar from "./components/CDJRnavbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import PartsTeam from "./components/PartsTeam";
import RequestForm from "./components/RequestForm";
import SelectTech from "./components/SelectTech";
import LoginForm from "./components/LoginForm";
import CusQuery from "./components/CusQuery";
import CusDataTable from "./components/CusDataTable";
// import YourCompnent from "./components/YourComponent";

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
                            <Route exact path="/CusQuery" component={CusQuery} />
                            <Route exact path="/CusDataTable" component={CusDataTable} />
                            {/* <Route exact path="/test" component={YourComponent} /> */}

                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        );
    }
}

export default App;
