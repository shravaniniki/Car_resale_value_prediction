// SellerPage.jsx

import React, { useState } from 'react';
import './sellerPage.css'; // Import CSS file
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

function SellerPage ()  {
  const location = useLocation();
  const { formData, prediction } = location.state;
  const [carDetails, setCarDetails] = useState(formData,{prediction,image:[]});
   console.log(prediction)

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  

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
    alert("Form Submitted Successfully")
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
          required/>
      
        <label>Vehicle Age</label>
          <input
            type="text"
            name="vehicle_age"
            value={carDetails.vehicle_age}
            onChange={handleChange}
          required/> 
          <label>Kms Driven</label>
          <input
            type="text"
            name="km_driven"
            value={carDetails.km_driven}
            onChange={handleChange}
          required/> 
          <label>Seller Type</label>
          <input
            type="text"
            name="seller_type"
            value={carDetails.seller_type}
            onChange={handleChange}
          required/> 
          <label>Fuel Type</label>
          <input
            type="text"
            name="fuel_type"
            value={carDetails.fuel_type}
            onChange={handleChange}
          required/>
          <label>Transmission Type</label>
          <input
            type="text"
            name="transmission_type"
            value={carDetails.transmission_type}
            onChange={handleChange}
          required/>        
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
          required/>     
           <label>Engine</label>
          <input
            type="number"
            name="engine"
            value={carDetails.engine}
            onChange={handleChange}
          required/> 
           <label>Maximum Power</label>
          <input
            type="number"
            name="max_power"
            value={carDetails.max_power}
            onChange={handleChange}
          required/> 
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
          required/> 
           <label>Seats</label>
          <input
            type="number"
            name="seats"
            value={carDetails.seats}
            onChange={handleChange}
          required/> 
          <label>Predicted Price</label>
          <input type="number" step="0.01" name="prediction" 
          value={prediction} 
          onChange={handleChange}/>
           <label>About Car</label>
          <input
            type="text"
            name="descripton"
            value={carDetails.description}
            onChange={handleChange}
          required/> 
          <label>Upload Car Image</label>
          <input
           id="image"
           type="file"
           name="image"
           onChange={handleOnChange}
           value={carDetails.target}
          required/>
          <br/>
          <br/>
          <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default SellerPage;
