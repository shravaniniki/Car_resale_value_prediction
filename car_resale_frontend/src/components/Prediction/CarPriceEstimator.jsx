// Frontend - CarPriceEstimator.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './CarPriceEstimator.css'
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

function CarPriceEstimator() {
    const [prediction, setPrediction] = useState('');
    const [carNames, setCarNames] = useState([]);
    const [formData, setFormData] = useState({
        car_name: '',
        vehicle_age: '',
        km_driven: '',
        seller_type: '',
        fuel_type: '',
        transmission_type: '',
        mileage: '',
        engine: '',
        max_power: '',
        seats: ''
    });
    const navigate = useNavigate(); // Initialize useHistory hook
     const goToSellPage=()=>{
    const sellCar = window.confirm('Do you want to sell your car?');
    if (sellCar) {
        // Redirect to the selling page
        navigate('/sellerpage', { state: { formData, prediction } })
        } else {
        // Display a thank you message
        alert('Thank you! You can explore our page further.');
    }
}
    const handleSubmit = (event) => {
        event.preventDefault();

        // Make API call to Flask backend for prediction
        axios.post('http://127.0.0.1:5000/prediction', formData)
            .then(response => {
                console.log(response.data.result);
                console.log("Hello")
                setPrediction(response.data.result);
                  // Prompt the user to sell the car
            })
            .catch(error => {
                console.error('Prediction API error:', error);
            });
    };

    useEffect(() => {
        // Fetch car names from your backend API
        axios.get('http://127.0.0.1:5000/car_names')
            .then(response => {
                console.log('Car names API response:', response.data);
                setCarNames(response.data.car_names);
            })
            .catch(error => {
                console.error('Error fetching car names:', error);
            });
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Navbar />
            <br />
            <h1 style={{ textAlign :"center",fontWeight:"bolder",fontSize:20}}>Predict your Car Resale Price </h1>
            <form onSubmit={handleSubmit} className='form-container'>
            <label htmlFor="car_name">Car Name:</label>
                <select name="car_name" value={formData.car_name} onChange={handleChange}>
                    <option value="">Select Car Name</option>
                    {carNames.map((carName, index) => (
                        <option key={index} value={carName}>{carName}</option>
                    ))}
                </select>

                <label htmlFor="vehicle_age">Vehicle Age:</label>
                <input type="number" name="vehicle_age" placeholder="Vehicle Age" onChange={handleChange} />

                <label htmlFor="km_driven">Kilometers Driven:</label>
                <input type="number" name="km_driven" placeholder="Kilometers Driven" onChange={handleChange} />

                <label htmlFor="seller_type">Seller Type:</label>
                <select name="seller_type" onChange={handleChange}>
                    <option value="">Select Seller Type</option>
                    <option value="0">Individual</option>
                    <option value="1">Dealer</option>
                    <option value="2">Trustmark Dealer</option>
                </select>

                <label htmlFor="fuel_type">Fuel Type:</label>
                <select name="fuel_type" onChange={handleChange}>
                    <option value="">Select Fuel Type</option>
                    <option value="0">Petrol</option>
                    <option value="1">Diesel</option>
                    <option value="2">CNG</option>
                    <option value="3">LPG</option>
                    <option value="4">Electric</option>
                </select>

                <label htmlFor="transmission_type">Transmission Type:</label>
                <select name="transmission_type" onChange={handleChange}>
                    <option value="">Select Transmission Type</option>
                    <option value="0">Manual</option>
                    <option value="1">Automatic</option>
                </select>

                <label htmlFor="mileage">Mileage:</label>
                <input type="number" name="mileage" placeholder="Mileage" step="0.01" onChange={handleChange} />

                <label htmlFor="engine">Engine:</label>
                <input type="number" name="engine" placeholder="Engine" onChange={handleChange} />

                <label htmlFor="max_power">Max Power:</label>
                <input type="number" name="max_power" placeholder="Max Power" step="0.01" onChange={handleChange} />

                <label htmlFor="seats">Seats:</label>
                <input type="number" name="seats" placeholder="Seats" onChange={handleChange} />
                <button type="submit">Predict Selling Price</button>
                <br/>
                <p onClick={goToSellPage}>Predicted Selling Price: {prediction}</p>
                 
            </form>
        </>
    );
}

export default CarPriceEstimator;
