import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className=" col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
          <Link to={`/product/${product._id}`} className="btn btn-primary">
            Product Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
