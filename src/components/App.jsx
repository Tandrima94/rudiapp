import React  from "react";
import HomePage from "./HomePage";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App(props) {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    )
}

export default App;