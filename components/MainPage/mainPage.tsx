import Header from "../GlobalComponents/Header/header";
import TitleBlock from "./TitleBlock/titleBlock";
import AboutUs from "./AboutUs/aboutUs";
import OurService from "./OurService/ourService";
import HowToGet from "./HowToGet/howtoGet";
import React from "react";
import Preferences from "./Preferences/preferences";
import OurPrice from "./OurPrice/OurPrice";
import Faq from "./FAQ/faq";
import Footer from "./Footer/footer";

export default function mainPage() {
  return (
    <>
      <Header />
      <TitleBlock />
      <AboutUs/>
      <OurService/>
      <HowToGet/>
      <Preferences/>
      <OurPrice/>
      <Faq/>
      <Footer/>
    </>
  )
}