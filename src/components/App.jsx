import React  from "react";
import HomePage from "./HomePage";
import JoinUs from "./JoinUs";
import '../css/styles.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/join-us" component={JoinUs} />
        </Router>
    )
}

export default App;