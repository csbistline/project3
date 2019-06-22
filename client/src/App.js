import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDJRnavbar from "./components/CDJRnavbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import PartsTeam from "./components/PartsTeam";
import RequestForm from "./components/RequestForm";
import SelectTech from "./components/SelectTech";
<<<<<<< HEAD
import QueryCard from "./components/QueryCard";
=======
import LoginForm from "./components/LoginForm";

// import YourComponent from "./components/YourComponent";
>>>>>>> fda48e66e7903af7565593645856826a1f406d3e

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
<<<<<<< HEAD
                            <Route exact path="/test" component={QueryCard} />
=======
                            <Route exact path="/login" component={LoginForm} />
                            {/* <Route exact path="/test" component={YourComponent} /> */}
>>>>>>> fda48e66e7903af7565593645856826a1f406d3e
                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        );
    }
}

export default App;
