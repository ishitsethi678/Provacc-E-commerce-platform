import React from "react";
import "./index.css";

const FeaturedProducts = ({ product }) => {
  const handleClick = () => {
    window.open(product.link, "_blank"); // Open product link in a new tab
  };

  return (
    <div className="col-4 col-sm-2 mx-4 my-5">
      <div className="row d-flex justify-content-center featured">
        <img src={product.image} className="img-fluid featured-img" alt={product.name} />
        <div className="overlay" onClick={handleClick}></div> {/* Overlay for click event */}
      </div>
      <div className="text-center featured-head">{product.name}</div>
      <div className="text-center featured-para">
        Rs. {product.price}
        <br />
        {product.source}
      </div>
      <div className="row d-flex justify-content-center my-3">
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={handleClick}>
          <span className="btnn2-text">Shop Now</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
