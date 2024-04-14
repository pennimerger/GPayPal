import React from "react";
import Hero from "./components/homepage/Hero.jsx"
import Section2 from "./components/homepage/Section2.jsx"
import Section3 from "./components/homepage/Section3.jsx"
import Section4 from "./components/homepage/Section4.jsx"
import Section5 from "./components/homepage/Section5.jsx"
import SignUp from "./components/homepage/SignUp.jsx"

function Homepage() {
    return <div>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <SignUp />
    </div>;
}

export default Homepage