// SellerPage.jsx

import React, { useState } from 'react';
import './sellerPage.css'; // Import CSS file
import Navbar from '../Navbar/Navbar';

function SellerPage ()  {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  const [carDetails, setCarDetails] = useState({
    car_name: '',
    vehicle_age: '',
    km_driven: '',
    seller_type: '',
    fuel_type: '',
    transmission_type: '',
    mileage: '',
    engine: '',
    max_power: '',
    seats: '',
    description: '',
    image: [],
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    const uploadedPhotos = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        uploadedPhotos.push(reader.result);
        if (uploadedPhotos.length === files.length) {
          setCarDetails({ ...carDetails, image: uploadedPhotos });
        }
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', carDetails);
  };

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <div className="seller-page-container" id='search'>
      <h1>Sell Your Car</h1>
      <form onSubmit={handleSubmit}>
       
          <label>Car Name</label>
          <input
            type="text"
            name="car_name"
            value={carDetails.car_name}
            onChange={handleChange}
          />
      
        <label>Vehicle Age</label>
          <input
            type="text"
            name="vehicle_age"
            value={carDetails.vehicle_age}
            onChange={handleChange}
          /> 
          <label>Kms Driven</label>
          <input
            type="text"
            name="km_driven"
            value={carDetails.km_driven}
            onChange={handleChange}
          /> 
          <label>Seller Type</label>
          <input
            type="text"
            name="seller_type"
            value={carDetails.seller_type}
            onChange={handleChange}
          /> 
          <label>Fuel Type</label>
          <input
            type="text"
            name="fuel_type"
            value={carDetails.fuel_type}
            onChange={handleChange}
          />
          <label>Transmission Type</label>
          <input
            type="text"
            name="transmission_type"
            value={carDetails.transmission_type}
            onChange={handleChange}
          />        
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
          />     
           <label>Engine</label>
          <input
            type="number"
            name="engine"
            value={carDetails.engine}
            onChange={handleChange}
          /> 
           <label>Maximum Power</label>
          <input
            type="number"
            name="max_power"
            value={carDetails.max_power}
            onChange={handleChange}
          /> 
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
          /> 
           <label>Seats</label>
          <input
            type="number"
            name="seats"
            value={carDetails.seats}
            onChange={handleChange}
          /> 
           <label>About Car</label>
          <input
            type="text"
            name="descripton"
            value={carDetails.description}
            onChange={handleChange}
          /> 
          <label>Upload Car Image</label>
          <input
           id="image"
           type="file"
           name="image"
           onChange={handleOnChange}
           value={carDetails.target}
            />
          <br/>
          <br/>
          <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default SellerPage;
