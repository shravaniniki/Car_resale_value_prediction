import React, {useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import CarList from "../CarList/CarList";
import Services from "./Services";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "./Footer";
import Seller from "./Seller";
import { useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();
  const { username } = navigate.state || {}; 
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      const element = document.documentElement;
    
      useEffect(() => {
        if (theme === "dark") {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
      // dark mode end
    
      React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme} username={username}/>
    <Hero theme={theme} />
    <Seller/>
    <CarList/>
    <Services/>
    <Testimonial/>
    <Footer/>
    </>
  )
}
