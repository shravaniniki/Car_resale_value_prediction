import React from "react";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


// Component import
import CarPriceEstimator from "./components/Prediction/CarPriceEstimator";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { Home } from "./Home";

const App = () => {
  // dark mode start
 
  return (
    <>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                   <Route path="/navbar" element={<Navbar/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/hero" element={<Hero/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/carlist" element={<CarList/>} />
                    <Route path="/testimonal" element={<Testimonial />} />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                      <Route path="/prediction" element={<CarPriceEstimator/>} />

                    <Route
                        path="/footer"
                        element={<Footer />}
                    />
                </Routes>
            </Router>
    </div>
    </>
  );
};

export default App;
