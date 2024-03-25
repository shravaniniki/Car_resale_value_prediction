import React, { useState ,useEffect} from 'react' 
import CarData from './CarData';
import axios from 'axios';
const Search = () => {
  const[data,setData]=useState([]);
  useEffect(() => {
    // Fetch car names from your backend API
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
      const[filter,setFilter] = useState('');

      const searchText = (event)=>{
        setFilter(event.target.value);
      }
      let dataSearch = data.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
      });

      const displayOwnerDetails = (owner) => {
        alert(`Owner Details:\nName: ${owner.name}\nEmail: ${owner.email}\nPhone: ${owner.phone}`);
      };
      const displayCarInfo = (data) => {
        alert(`Car Info Details:\nName: ${data.car_name}\nAge: ${data.vehicle_age}\nPrice: ${data
            .prediction}`);
      };
   
  return (

    <>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
          
          <div className='col-12 mb-5'>
            <div className='mb-3 col-4 mx-auto text-center'>
                <input 
                type='text' placeholder="Type car name..." 
                className='form-control'
                value={filter}
                onChange={searchText.bind(this)}
                />
            <label className='form-label h4'>Search</label>
            </div>
          </div>
          <div className="card">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {dataSearch.map((item, index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3' style={{width:"300px"}}>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={`http://localhost:8081/images/${item.image}`}  alt="Car"  />
                        <div className='card-body'>
                         <h5 className='card-title'>{item.prediction}</h5>
                         <h3 className='card-text'>{item.car_name}</h3>
                      <div className="card-links">
                       <button className="owner-link" onClick={() => displayOwnerDetails(item.owner)}>Owner Details</button>
                      <button className="car-info" onClick={()=>displayCarInfo(item)}>Car Info</button>
                    </div>
                          </div>
                    </div>
                </div>
                
                )
            })}
            </div>

           </div>
        </div>
    </section>
    </>
  )
}

export default Search;