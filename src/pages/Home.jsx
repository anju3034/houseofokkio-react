import React from "react"
import HomeTopSection from "../components/HomeTopSection/HometopSection.jsx";
import CounterSection from "../components/CounterSection/CounterSection.jsx";
import Hometext from "../components/Hometext/Hometext.jsx";
import Videobanner from "../components/Videobanner/Videobanner.jsx";
import Homecont from "../components/HomeDiscover/Homecont.jsx";
import HomeCreations from "../components/HomeCreations/HomeCreations.jsx";
import HomeGallery from "../components/HomeGallery/HomeGallery.jsx";
import HomeCollections from "../components/HomeCollections/HomeCollections.jsx";
import HomeFeatureList from "../components/HomeFeatureList/HomeFeatureList.jsx";
import HomeFaqs from "../components/HomeFaqs/HomeFaqs.jsx";
import Slider from "../components/Slider/Slider.jsx";

export default function HomeTop() {
    return(
        <>
        <HomeTopSection />
        <Hometext />
        <CounterSection />
        <Videobanner />
        <Homecont />
        <HomeCreations />
        <HomeGallery />
        <HomeCollections />
        <HomeFeatureList />
        <HomeFaqs />
        <Slider />
        </>
    );
}