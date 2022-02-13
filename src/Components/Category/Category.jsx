import React, { useCallback, useEffect, useState } from "react";
import Slider from 'react-slick';
import SingleProduct from "../SingleProduct/SingleProduct";
import './category.css';

const Category = ({data, category}) => {

  const [filteredData, setFilteredData] = useState([]);

  const filterData = useCallback((category)=> {
    const newItems = data.filter((item)=> item.brand_name === category);
    setFilteredData(newItems);
  }, [data]);
  
  useEffect(()=> {
    filterData(category);
  }, [category, filterData]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 2.5,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 1.25,
              slidesToScroll: 1,
            }
          },
        ]
    }
  return (
          <div className="product-wrapper">
            <div className="product-title">{category}</div>
            <div className="seperator"></div>
            <div className="product-container">
              <Slider {...settings}>
                        {
                          filteredData?.map((item, index)=>{
                            return(
                              <SingleProduct key={index} {...item}/> 
                            )
                          })
                        }                
              </Slider>
            </div>
          </div>
  );
};

export default Category;
