
import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import "./Profile.css";

const userData = {
  name: "shravani",
  email: "shravani@gmail.com",
  phone: "123-456-7890",
  cars: [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2021
    }
    // inka car details and img kavala ante add chesko
  ]
};

const Profile = () => {
  const history = useHistory();
  const [user] = useState(userData);

  const handleLogout = () => {
    
    history.push("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <h3>Car Details:</h3>
        <ul>
          {user.cars.map((car, index) => (
            <li key={index}>
              {car.make} {car.model} ({car.year})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;