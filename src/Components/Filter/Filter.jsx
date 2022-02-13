import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp} from 'react-icons/fa';
import './filter.css';


const Filter = ({categories, cities, states,filter, setFilter}) => {
    
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isCityOpen, setIsCityOpen] = useState(false);



  return (
    <div className='filter-container'>
        <div className="filter-title">Filters</div>
        <div className="seperator"></div>
        <div className="filter-options">
            <div className="option-container option-product">
                <div className='inner-wrap'>
                    <span>Product</span>
                    <span className='icon' onClick={()=> setIsProductOpen(!isProductOpen)}>
                        {isProductOpen? <FaCaretUp/>: <FaCaretDown/>}
                    </span>
                </div>
                    <ul className={isProductOpen? 'inner-menu active': 'inner-menu'}>
                        {
                            categories.map((category, index)=> {
                                return(
                                    <div className="inner-item" key={index}>
                                        <li className={filter?.product === category ? 'active' : 'kera'} onClick={()=> (filter.product === category) ? setFilter({...filter, product:null}) :setFilter({ ...filter, product:category })}> {category}</li>
                                        {/* <FaTimes onClick={()=> setFilter({...filter, product: null})}/> */}
                                    </div>
                                )
                            })
                        }
                    </ul>
            </div>
            <div className=" option-container option-state">
                <div className="inner-wrap">
                    <span>State</span>
                    <span className='icon' onClick={()=> setIsStateOpen(!isStateOpen)}>
                        {isStateOpen? <FaCaretUp/>: <FaCaretDown/>}
                    </span>
                </div>
                <ul className={isStateOpen? 'inner-menu active': 'inner-menu'}>
                    {
                        states.map((state, index)=> {
                            return(
                                <div className='inner-item' key={index}>
                                        <li className={filter?.state === state ? 'active' : ''} onClick={()=>(filter.state === state)?  setFilter({...filter, state: null}):setFilter({ ...filter, state })}> {state} </li>
                                    {/* <FaTimes onClick={()=> setFilter({...filter, state: null})}/> */}
                                </div>
                            )
                        })
                    }
                    </ul>
            </div>
            <div className="option-container option-city">
                <div className="inner-wrap">
                    <span>City</span>
                    <span className="icon" onClick={()=> setIsCityOpen(!isCityOpen)}>
                        {isCityOpen? <FaCaretUp/>: <FaCaretDown/>}  
                    </span>
                </div>
                <ul className={isCityOpen? 'inner-menu active': 'inner-menu'}>
                    {
                        cities.map((city, index)=> {
                            return(
                                <div className="inner-item" key={index}>
                                    <li className={filter?.city === city ? 'active' : ''} onClick={()=> (filter.city === city)? setFilter({...filter, city: null}): setFilter({ ...filter, city })}>{city}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Filter