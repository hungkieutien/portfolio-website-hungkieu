import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience"

function Home() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );

}

export default Home;