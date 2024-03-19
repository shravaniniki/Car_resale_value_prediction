// Frontend - CarPriceEstimator.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make API call to Flask backend for prediction
        axios.post('http://127.0.0.1:5000/prediction', formData)
            .then(response => {
                console.log(response.data.prediction);
                setPrediction(response.data.prediction);
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
            <form onSubmit={handleSubmit}>
                <select name="car_name" value={formData.car_name} onChange={handleChange}>
                    <option value="">Select Car Name</option>
                    {carNames.map((carName, index) => (
                        <option key={index} value={carName}>{carName}</option>
                    ))}
                </select>
                <input type="number" name="vehicle_age" placeholder="Vehicle Age" onChange={handleChange} />
                <input type="number" name="km_driven" placeholder="Kilometers Driven" onChange={handleChange} />
                <select name="seller_type" onChange={handleChange}>
                    <option value="">Select Seller Type</option>
                    <option value="0">Individual</option>
                    <option value="1">Dealer</option>
                    <option value="2">Trustmark Dealer</option>
                </select>
                <select name="fuel_type" onChange={handleChange}>
                    <option value="">Select Fuel Type</option>
                    <option value="0">Petrol</option>
                    <option value="1">Diesel</option>
                    <option value="2">CNG</option>
                    <option value="3">LPG</option>
                    <option value="4">Electric</option>
                </select>
                <select name="transmission_type" onChange={handleChange}>
                    <option value="">Select Transmission Type</option>
                    <option value="0">Manual</option>
                    <option value="1">Automatic</option>
                </select>
                <input type="number" name="mileage" placeholder="Mileage" step="0.01" onChange={handleChange} />
                <input type="number" name="engine" placeholder="Engine" onChange={handleChange} />
                <input type="number" name="max_power" placeholder="Max Power" step="0.01" onChange={handleChange} />
                <input type="number" name="seats" placeholder="Seats" onChange={handleChange} />
                <button type="submit">Predict Selling Price</button>
            </form>
            <p>Predicted Selling Price: {prediction}</p>
        </>
    );
}

export default CarPriceEstimator;
