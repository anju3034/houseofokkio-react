import React from "react"
import Hero from "../components/AboutGallery/Hero.jsx";
import AboutGallery from "../components/AboutGallery/AboutGallery.jsx";
import EyewearReimagined from "../components/AboutGallery/EyewearReimagined.jsx";
import FeatureList from "../components/AboutGallery/FeatureList.jsx";
import CounterSection from "../components/CounterSection/CounterSection.jsx";
import Slider from "../components/Slider/Slider.jsx";

const About = () => {
    return(
        <>
        <Hero />
        <AboutGallery />
        <EyewearReimagined />
        <FeatureList />
        <CounterSection />
        <Slider />
        </>
    );
}
export default About;