import React from "react"
import GetContact from "../components/GetContact/GetContact.jsx";
import ContactDetails from "../components/ContactDetails/ContactDetails.jsx";
import Contactmap from "../components/Contactmap/Contactmap.jsx";
import ContactFaq from "../components/ContactFaq/ContactFaq.jsx";
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