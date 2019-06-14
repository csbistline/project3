import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDJRnavbar from "./components/CDJRnavbar";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CDJRnavbar />
                    <Wrapper>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            {/* <Route exact path="/about" component={About} />
                        <Route exact path="/discover" component={Discover} />
                        <Route exact path="/search" component={Search} /> */}
                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        );
    }
}

export default App;
