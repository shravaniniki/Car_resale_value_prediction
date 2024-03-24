import React, { useState } from 'react' 
import CarData from './CarData';

const Search = () => {
      const[filter,setFilter] = useState('');

      const searchText = (event)=>{
        setFilter(event.target.value);
      }
      let dataSearch = CarData.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
      });
  return (

    <>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
          
          <div className='col-12 mb-5'>
            <div className='mb-3 col-4 mx-auto text-center'>
               <label className='form-label h4'>Search</label>
                <input 
                type='text' placeholder="Type car name..." 
                className='form-control'
                value={filter}
                onChange={searchText.bind(this)}
                />
            </div>
          </div>
            {dataSearch.map((item, index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={item.img} className='card-img-top img-fluid'  />
                          <div className='card-body'>
                            <h5 className='card-title'>{item.price}</h5>
                            <h3 className='card-text'>{item.car_name}</h3>
                            <div className="card-links">
                      <a href="/owner-details" className="owner-link">Owner Details</a>
                      <a href="/car-info" className="car-info-link">Car Info</a>
                    </div>
                          </div>
                    </div>
                </div>
                )
            })}
           
        </div>
    </section>
    </>
  )
}

export default Search;