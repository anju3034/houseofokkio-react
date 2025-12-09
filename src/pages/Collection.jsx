import React from "react"
import CollectionHero from "../components/CollectionGallery/Hero.jsx";
import CollectionGallery from "../components/CollectionGallery/CollectionGallery.jsx";
import Slider from "../components/Slider/Slider.jsx";

export default function Collection() {
    return(
        <>
        <CollectionHero />
        <CollectionGallery />
        <Slider />
        </>
    );
}