import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );

}

export default Home;