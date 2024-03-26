
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import "./Profile.css";
import axios from "axios";
import Navbar from "./Navbar";
const userData = {
  name: "shravani",
  email: "shravani@gmail.com",
  phone: "6384516175",
  };

const Profile = () => {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  useEffect(() => {
    // Fetch car names from your backend API
    axios.get('http://127.0.0.1:8081/userdetails')
        .then(response => {
          
        console.log('User details API response:', response.data);
         setData(response.data);
         console.log(response.data.email);
        })
        .catch(error => {
            console.error('Error fetching car names:', error);
        });
}, []);
useEffect(() =>{
axios.get('http://127.0.0.1:8081/cardetails')
        .then(response => {
          
            console.log('Car names API response:', response.data);
         setData(response.data);
         console.log(response.data.car_name)
        })
        .catch(error => {
            console.error('Error fetching car names:', error);
        });
}, []);
const displayCarInfo = (data) => {
  alert(`Car Info Details:\nName: ${data.car_name}\nAge: ${data.vehicle_age}\nPrice: ${data
      .prediction}`);
};
 
   const [user] =useState(userData)
  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <>
    <Navbar/>
    <section className='py-4 container'>
    <div className='row justify-content-center'>
      <div className="profile-header">
        <h1 style={{fontSize:"20px", fontWeight:"bolder"}}>Profile</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="profile-details">
        <p>Username: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <h1 style={{fontWeight:"bold"}}>Car Lists</h1>
          <div className="card">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              {data.map((item, index) => (
                <div key={index} className='col-11 col-md-6 col-lg-3' style={{width:"300px"}}>
                  <div className='card p-0 overflow-hidden h-100 shadow'>
                    <img src={`http://localhost:8081/images/${item.image}`} alt="Car" />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.prediction}</h5>
                      <h3 className='card-text'>{item.car_name}</h3>
                      <div className="card-links">
                        <button className="car-info" onClick={() => displayCarInfo(item)}>Car Info</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
   
      </div>
    </div>
      </section>

      </>
  );
};

export default Profile;