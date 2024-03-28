import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CarPage.css"
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import "./data" 
const userData = {
  name: "shravani",
  email: "shravani@gmail.com",
  phone: "6384516175",
  };

const Search = () => { 
  
 
  const [user]=useState(userData);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get('http://127.0.0.1:8081/cardetails')
      .then(response => {
        console.log('Car names API response:', response.data);
        setData(response.data);
        console.log(response.data.car_name);
      })
      .catch(error => {
        console.error('Error fetching car names:', error);
      });
  }, []);

  const [filter, setFilter] = useState('');

  const searchText = (event) => {
    setFilter(event.target.value);
  }
  const handleClearBtn = () => {
    setFilter('');
  }
  let dataSearch = data.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });
 
  const displayOwnerDetails = (user) => {
    alert(`Owner Details:\nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`);
  };
  const displayCarInfo = (data) => {
    alert(`Car Info Details:\nName: ${data.car_name}\nAge: ${data.vehicle_age}\nPrice: ${data
        .prediction}\nKm_driven: ${data.km_driven}\nMileage: ${data.mileage}\nEngine: ${data.engine}\nMax_Power: ${data.max_power}\nSeats: ${data.seats}`);
  };
  
 const onResponse=()=>{
  alert('Are you interested in buying this car , then we have owner details.You can contact them !!!')
 }


  return (
    <>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          <div className='container' >
      <div className='input-wrap'style={{border:'1px solid black'}}>
            <SearchIcon />

              <input

                type='text'
                placeholder="Type car name..."
                className='form-control'
                value={filter}
                onChange={searchText}
                 id="product-search"
              />
              <ClearIcon 
            onClick={handleClearBtn}
            className="fas fa-times"/>
            </div>
          </div>
          <div className="card" style={{ marginTop: '4rem'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              {dataSearch.map((item, index) => (
                <div key={index} className='col-11 col-md-6 col-lg-3' style={{ width: "300px", borderRadius: "10px", margin: "auto", marginBottom: "4rem" }}>
                  <div className='card p-0 overflow-hidden h-100 shadow' style={{ borderRadius: "10px" }}>
                    <img src={`http://localhost:8081/images/${item.image}`} alt="Car" onClick={onResponse}/>
                    <div className='card-body'>
                     <h3 className='card-text' style={{ fontSize: '1em' }}><b>{item.car_name}</b></h3>
                       <h5 className='card-title' style={{ fontSize: '1em' }}>Rs.{item.prediction}</h5>

                      <div className="card-links" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <button  className="rounded-md bg-primary hover:bg-primary/30 transition duration-500 py-2 px-6 text-black" style={{ border: '1px', borderRadius: '10px', fontSize: '1em', marginBottom: '10px' }} onClick={() => displayOwnerDetails(user)}>Owner Details</button>
                        <button className="rounded-md bg-primary hover:bg-primary/30 transition duration-500 py-2 px-6 text-black" style={{ border: '1px', borderRadius: '10px', fontSize: '1em' }} onClick={() => displayCarInfo(item)}>Car Info</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </section>
      
    </>
  )
}

export default Search;
