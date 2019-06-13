import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDJRnavbar from "./components/CDJRnavbar";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CDJRnavbar />
                </div>
            </Router>
    );
    }
}

export default App;
