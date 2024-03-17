import './CarPriceEstimator.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';


function CarPriceEstimator () {
   // CarPricePredictionForm.js

    const [prediction, setPrediction] = useState('');
    const [carNames, setCarNames] = useState([]);
    const [sellerTypes, setSellerTypes] = useState([]);
    const [transmissionTypes, setTransmissionTypes] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);

    useEffect(() => {
        // Fetch car names and other dropdown options when the component mounts
        fetchCarNames();
        fetchSellerTypes();
        fetchTransmissionTypes();
        fetchFuelTypes();
    }, []);

    const fetchCarNames = async () => {
        try {
            const response = await axios.get('/car_names');
            setCarNames(response.data.car_names);
        } catch (error) {
            console.error('Error fetching car names:', error);
        }
    };

    const fetchSellerTypes = async () => {
        // Assuming seller types are hardcoded for simplicity
        const sellerTypes = ['Individual', 'Dealer', 'Trustmark Dealer'];
        setSellerTypes(sellerTypes);
    };

    const fetchTransmissionTypes = async () => {
        // Assuming transmission types are hardcoded for simplicity
        const transmissionTypes = ['Manual', 'Automatic'];
        setTransmissionTypes(transmissionTypes);
    };

    const fetchFuelTypes = async () => {
        // Assuming fuel types are hardcoded for simplicity
        const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'LPG','Electric'];
        setFuelTypes(fuelTypes);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Convert form data to JSON object
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Make API call to Flask backend
        try {
            const response = await axios.post('/predict', jsonData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error predicting:', error);
        }
    };

    return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <select name="car_name">
                <option value="">Select Car Name</option>
                {carNames.map((carName, index) => (
                    <option key={index} value={carName}>{carName}</option>
                ))}
            </select><br/>
            <input type="number" name="vehicle_age" placeholder="Vehicle Age" /><br/>
            <input type="number" name="km_driven" placeholder="Kilometers Driven" /><br/>
            <select name="seller_type">
                <option value="">Select Seller Type</option>
                {sellerTypes.map((sellerType, index) => (
                    <option key={index} value={sellerType}>{sellerType}</option>
                ))}
            </select><br/>
            <select name="fuel_type">
                <option value="">Select Fuel Type</option>
                {fuelTypes.map((fuelType, index) => (
                    <option key={index} value={fuelType}>{fuelType}</option>
                ))}
            </select><br/>
            <select name="transmission_type">
                <option value="">Select Transmission Type</option>
                {transmissionTypes.map((transmissionType, index) => (
                    <option key={index} value={transmissionType}>{transmissionType}</option>
                ))}
            </select><br/>
            <input type="number" name="mileage" placeholder="Mileage" /><br/>
            <input type="number" name="engine" placeholder="Engine" /><br/>
            <input type="number" name="max_power" placeholder="Max Power" /><br/>
            <input type="number" name="seats" placeholder="Seats" /><br/>
            <button type="submit">Predict Selling Price</button><br/>
            <p>Predicted Selling Price: {prediction}</p><br/>
        </form>
        </>
    );


};

export default CarPriceEstimator;
