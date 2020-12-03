import React  from "react";
import Home from "./Home";
import Product from "./Product";
import TechnologyDetail from "./TechnologyDetail";
import Investor from "./Investor";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import JoinUs from "./JoinUs";

function HomePage() {
    return (
        <div>
            <Home />
            <WhatWeDo />
            <Product />
            <TechnologyDetail />
            <WhoWeAre />
            <Contact />
            <Investor />
            <JoinUs />
        </div>
    )
}

export default HomePage;