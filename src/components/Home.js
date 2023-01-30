import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layout/metaData";
import { getProducts } from "../actions/productActions";
import Product from "./Product";

function Home() {
  const dispatch = useDispatch();
  const { products, productsCount, loading } = useSelector(
    (state) => state.products
  );
  console.log(products);
  useEffect(() => {
    <MetaData title={"Buy best products online"} />;
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.length &&
            products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Home;
