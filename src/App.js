import React from "react";
import "./style.css";
import NavBar from "./Navbar";
import Appsection from "./Appsection";
import PortfoliSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./Footer";
import CopyrightSection from "./CopyrightSection";
const App = ()=>(
    <div>
        <NavBar />
       
        <Appsection />

        <PortfoliSection />

        <AboutSection />

        <ContactSection />

        <FooterSection />

        <CopyrightSection />
    </div>
)


export default App;