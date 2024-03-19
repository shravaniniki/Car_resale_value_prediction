import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import { useNavigate } from "react-router-dom";

const carList = [
  {
    name: "MAHENDRA",
    price: 4500000,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 1100000,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW X",
    price: 5500000,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  const navigate=useNavigate();

  const navigateToSearchpage=()=>{
    navigate("/search")
  }
  return (
    <>
    <br/>
    <div className="pb-24" id="carlist">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Car's for Sale
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          looking to buy a car! checkout our recommendations f
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline" onClick={navigateToSearchpage}>
            Get Started
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CarList;
