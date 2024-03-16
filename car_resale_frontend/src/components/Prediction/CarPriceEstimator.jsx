import React, { useState } from 'react';
import './CarPriceEstimator.css';

const CarPriceEstimator = () => {
    const [formData, setFormData] = useState({
        carName: '',
        vehicleAge: 0,
        kmDriven: 0,
        sellerType: '',
        fuelType: '',
        transmission: '',
        mileage: 0,
        engine: 0,
        maxPower: 0,
        seats: 0
    });
    const [carPriceData, setCarPriceData] = useState(null);
    const [carPriceValue, setCarPriceValue] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to backend API)
        // Upon receiving response, update state with carPriceData and carPriceValue
    };

    return (
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-6 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <legend>Car Price Estimation Form</legend>
                    <div className="mb-3">
                        <label htmlFor="car_name">Car Name</label>
                        <select className="form-control" id="car_name" name="carName" value={formData.carName} onChange={handleInputChange} required>
                            <option value="" disabled>Select Car Name</option>
                            {/* {carList.map((car, index) => (
                                <option key={index} value={car}>{car}</option>
                            ))} */}
                        </select>
                    </div>
                    <div class="mb-3">
                <label for="vechicle_age">Vechicle age</label>
                <input type="number" class="form-control" id="vehicle_age" name="vehicle_age" min="0" max="30" placeholder="0 - 30 years" required="required"/>
              </div>

              <div class="mb-3">
                <label for="km_driven">Kilometer driven</label>
                <input type="number" class="form-control" id="km_driven" name="km_driven" min="0" max="100000" step="1" placeholder="0 - 1L km" required="required"/>
              </div>

              <div class="mb-3">
                <label for="seller_type">Select Seller type</label>
                <select class="form-control" id="seller_type" name="seller_type" placeholder="seller_type" required="required">
                  <option value="" disabled selected>Seller type</option>
                  <option>Dealer</option>
                  <option>Individual</option>
                  <option>Trustmark Dealer</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="fuel_type">Select Fuel Type</label>
                <select class="form-control" id="fuel_type" name="fuel_type" placeholder="fuel_type" required="required">
                  <option value="" disabled selected>Fuel Type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>CNG</option>
                  <option>LPG</option>
                </select>
              </div>
              
              <div class="mb-3">
                <label for="transmission">Select Transmission Type</label>
                <select class="form-control" id="transmission" name="transmission" placeholder="transmission" required="required">
                  <option value="" disabled selected>Transmission Type</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="mileage">Mileage</label>
                <input type="number" class="form-control" id="mileage" name="mileage" min="4" max="30" placeholder="4 - 30 km/litre" required="required"/>
              </div>

              <div class="mb-3">
                <label for="engine">Engine</label>
                <input type="number" class="form-control" id="engine" name="engine" min="700" max="7000" placeholder="700cc - 7000cc Engine capacity" required="required"/>
              </div>

              <div class="mb-3">
                <label for="max_power">Max Power</label>
                <input type="number" class="form-control" id="max_power" name="max_power" min="38" max="600" placeholder="38bhp - 600bhp Engine power" required="required"/>
              </div>

              <div class="mb-3">
                <label for="seats">Total Seats count</label>
                <input type="number" class="form-control" id="seats" name="seats" min="2" max="9" placeholder="2 - 9 seating" required="required"/>
              </div>

                    {/* Continue with other form fields... */}
                    <input className="btn btn-primary" type="submit" value="Predict Used Car Value" required />
                </form>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-6 col-lg-6">
                <div className="card">
                    
                    <div className="card-body">
                        {carPriceData ? (
                            <table className="table table-striped">
                                <caption>Used Car Price Prediction</caption>
                                <tbody>
                                    {Object.entries(carPriceData).map(([column, value], index) => (
                                        <tr key={index}>
                                            <td>{column}</td>
                                            <td>{value[0]}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>Car Price Value</td>
                                        <td>{carPriceValue}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <h5 className="card-title">Submit Form</h5>
                                <p className="card-text">Kindly provide necessary information to estimate Used Car price</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarPriceEstimator;
