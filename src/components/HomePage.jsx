import React  from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import TechnologyDetail from "./TechnologyDetail";
import Investor from "./Investor";

function HomePage(props) {
    return (
        <div>
            <Home />
            <About />
            <Product />
            <TechnologyDetail />
            <Investor />
        </div>
    )
}

export default HomePage;