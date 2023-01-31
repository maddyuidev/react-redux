import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get_one_product } from "../../actions/productActions";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_one_product(id));
  }, [dispatch, id]);
  return <div>Product Details</div>;
}

export default ProductDetail;
