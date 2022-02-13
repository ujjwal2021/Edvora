import React from "react";
import Img from "../../download.jpg";
import './singleProduct.css'

const SingleProduct = ({product_name, brand_name, price, address, date, discription, image}) => {

  const newDate = new Date(date);

  return (

      <div className="single-container">
        <div className="single-upper-container">
          <div className="single-left">
            <div className="single-img">
              <img src={image||Img} alt={product_name} />
            </div>
          </div>
          <div className="single-right">
            <div className="name info">{product_name}</div>
            <div className="brand-name info">{brand_name}</div>
            <div className="price info">${price}</div>
          </div>
        </div>
        <div className="single-strip">
          <div className="location">{address.city}</div>
          <div className="date info">{newDate.toLocaleDateString()}</div>
        </div>
        <div className="description">
          {discription}
        </div>
      </div>

  );
};

export default SingleProduct;
