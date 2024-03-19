import React from 'react'
import CarPng from "../../assets/car1.png";
import { useNavigate } from 'react-router-dom';

function Seller() {
  const navigate = useNavigate();
  const navigateToSellerpage=()=>{
    navigate('/sellerPage');
  };

  return (
    <>
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300" id="seller">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Do you want to sell your car?
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At CarSell we help car buyers and sellers to sell and buy their car's in 
                atmost ease and trust with high security. 
              </p>
              <p data-aos="fade-up">
                We help Car owners to predict their car price by our highly accurate car price predictor
              </p>
              <button data-aos="fade-up" className="button-outline" onClick={navigateToSellerpage}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Seller

