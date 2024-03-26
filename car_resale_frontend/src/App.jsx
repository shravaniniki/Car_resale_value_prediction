import React from "react";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


// Component import
import CarPriceEstimator from "./components/Prediction/CarPriceEstimator";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Home/Services";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Home/Footer";
import {Home } from "./components/Home/Home";
import Seller from "./components/Home/Seller";
import SellerPage from "./components/SellerPage/sellerpage";
import Login from "./components/Registration/Login";
import Signup from "./components/Registration/Signup";
import CarPage from "./components/SearchPage/CarPage";
import Profile from "./components/Navbar/Profile"

const App = () => {
  // dark mode start
 
  return (
    <>
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <Router>
                <Routes>
                    <Route path="/navbar" element={<Navbar/>} />
                    <Route path="/seller" element={<Seller/>} />
                    <Route path="/hero" element={<Hero/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/carlist" element={<CarList/>} />
                    <Route path="/testimonal" element={<Testimonial />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/prediction" element={<CarPriceEstimator/>} />
                    <Route path="/footer" element={<Footer />}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/sellerpage" element={<SellerPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Signup/>}/>
                    <Route path="/page" element={<CarPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </Router>
    </div>
    </>
  );
};

export default App;
