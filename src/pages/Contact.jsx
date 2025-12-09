import React from "react"
import GetContact from "../components/GetContact/GetContact.jsx";
import ContactDetails from "../components/GetContact/ContactDetails.jsx";
import Contactmap from "../components/GetContact/Contactmap.jsx";
import ContactFaq from "../components/GetContact/ContactFaq.jsx";
import Slider from "../components/Slider/Slider.jsx";

export default function Contactpage() {
    return(
        <>
        <GetContact />
        <ContactDetails />
        <Contactmap />
        <ContactFaq />
        <Slider />
        </>
    );
}