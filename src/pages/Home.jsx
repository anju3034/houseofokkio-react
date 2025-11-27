import React from "react"
import HomeTopSection from "../components/HomeTopSection/HometopSection.jsx";
import CounterSection from "../components/CounterSection/CounterSection.jsx";
import Hometext from "../components/Hometext/Hometext.jsx";

export default function HomeTop() {
    return(
        <>
        <HomeTopSection />
        <Hometext />
        <CounterSection />
        </>
    );
}