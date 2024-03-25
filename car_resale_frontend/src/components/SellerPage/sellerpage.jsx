// SellerPage.jsx
import React, { useState } from 'react';
import './sellerPage.css'; // Import CSS file
import Navbar from '../Navbar/Navbar';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'
function SellerPage() {
  const [message, setMessage] = useState('');
   const navigate=useNavigate();
  const location = useLocation();
  const { formData, prediction } = location.state;
  const [carDetails, setCarDetails] = useState({
    ...formData,
    prediction: prediction,
    description: '',
    image: [], // Changed to null initially
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setCarDetails({ ...carDetails, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('car_name', carDetails.car_name);
   formData.append('vehicle_age', carDetails.vehicle_age);
   formData.append('km_driven', carDetails.km_driven);
   formData.append('seller_type', carDetails.seller_type);
   formData.append('fuel_type', carDetails.fuel_type);
   formData.append('transmission_type', carDetails.transmission_type);
   formData.append('mileage', carDetails.mileage);
   formData.append('engine', carDetails.engine);
   formData.append('max_power', carDetails.max_power);
   formData.append('seats', carDetails.seats);
   formData.append('prediction', carDetails.prediction);
   formData.append('description', carDetails.description);
   formData.append('image', carDetails.image);

     const user={isAuthenticated: true}
     axios.post('http://localhost:8081/sellerpage', formData, {
      headers: {
          'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
      }
  })
  .then(response => {
      console.log('Response:', response.data);
      setMessage('Submitted successfully');
      // Redirect to home page
      navigate('/');
  })
  .catch(error => {
      console.error('Error:', error);
      setMessage('Error submitting data');
  });
}
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="seller-page-container" id="search">
        <h1>Sell Your Car</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>

        <label>Car Name</label>
          <input
            type="text"
            name="car_name"
            value={carDetails.car_name}
            onChange={handleOnChange}
          required/>
      
        <label>Vehicle Age</label>
          <input
            type="text"
            name="vehicle_age"
            value={carDetails.vehicle_age}
            onChange={handleOnChange}
          required/> 
          <label>Kms Driven</label>
          <input
            type="text"
            name="km_driven"
            value={carDetails.km_driven}
            onChange={handleOnChange}
          required/> 
          <label>Seller Type</label>
          <input
            type="text"
            name="seller_type"
            value={carDetails.seller_type}
            onChange={handleOnChange}
          required/> 
          <label>Fuel Type</label>
          <input
            type="text"
            name="fuel_type"
            value={carDetails.fuel_type}
            onChange={handleOnChange}
          required/>
          <label>Transmission Type</label>
          <input
            type="text"
            name="transmission_type"
            value={carDetails.transmission_type}
            onChange={handleOnChange}
          required/>        
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleOnChange}
          required/>     
           <label>Engine</label>
          <input
            type="number"
            name="engine"
            value={carDetails.engine}
            onChange={handleOnChange}
          required/> 
           <label>Maximum Power</label>
          <input
            type="number"
            name="max_power"
            value={carDetails.max_power}
            onChange={handleOnChange}
          required/> 
          <label>Mileage</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleOnChange}
          required/> 
           <label>Seats</label>
          <input
            type="number"
            name="seats"
            value={carDetails.seats}
            onChange={handleOnChange}
          required/> 
          <label>Predicted Price</label>
          <input type="number" step="0.01" name="prediction" 
          value={carDetails.prediction} 
          onChange={handleOnChange}/>

           <label>About Car</label>
          <input
            type="text"
            name="description"
            value={carDetails.description}
            onChange={handleOnChange}
          required/> 
          <label>Upload Car Image</label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handlePhotoUpload}
            accept="image/*" // accept only image files
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SellerPage;
