import React, { useCallback, useEffect, useState } from 'react';
import Category from './Components/Category/Category';
// components
import Filter from './Components/Filter/Filter';

const API_URL = 'https://assessment-edvora.herokuapp.com/';




function App() {
  // usestates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    product: null,
    state: null,
    city: null,
  });
  const [filteredData, setFilteredData] = useState(data);

  // set unique categories
  const uniqueCategories = [...new Set(filteredData.map((item)=>item.brand_name))];
  const uniqueStates = [...new Set(filteredData.map((item)=>item.address.state))];
  const uniqueCities = [...new Set(filteredData.map((item)=>item.address.city))];

  console.log(filteredData);

  const fetchData = useCallback(async (url)=> {
    try{
      setError(false);
      setLoading(true);
      const response = await fetch(url);
      if(response.status === 200){
        const data = await response.json();
        setData(data)
      }
      else{
        setError(true);
      }

    }catch(e){
      setError(true);
    }
    setLoading(false);
  },[]);

  useEffect(()=> {
      fetchData(API_URL);
  }, [fetchData]);

  // filter function
  const getFilteredData = ({ data, filter }) => {
    return (
          data.filter((item) => !filter?.product || item.brand_name === filter?.product)
          .filter((item) => !filter?.state || item.address.state === filter?.state)
          .filter((item) => !filter?.city || item.address.city === filter?.city)
      )
  };
  useEffect(()=> {
    setFilteredData(getFilteredData({data, filter}))
  }, [data, filter])
  

  if(loading){
    return(
      <div className='loading-error-box'>
        Loading...
      </div>
    )
  }
  else{
    if(error){
      return(
        <div className='loading-error-box'>
          Something went wrong
        </div>
      )
    }
    return (
      <div className='wrapper'>
        <div className='left-container'>
            <Filter categories={uniqueCategories} cities={uniqueCities} states={uniqueStates} filter={filter} setFilter={setFilter}/>
        </div>
        <div className='right-container'>
          <div className="company-title">
            Edvora
          </div>
          <div className="sec-title">
            Products
          </div>
  
          {
            uniqueCategories.map((category, index)=>{
              return(
                <Category key={index} category={category} data={filteredData}/>
              )
            })
          }
  
        </div>
      </div>
    )
  }
}

export default App;
