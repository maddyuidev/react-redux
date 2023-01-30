import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layout/metaData";
import { getProducts } from "../actions/productActions";

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
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                  <div className="card p-3 rounded" key={product._id}>
                    <img
                      className="card-img-top mx-auto"
                      src={product.images[0]["url"]}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        <a href="javascript:void(0)">{product.name}</a>
                      </h5>
                      <div className="ratings mt-auto">
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span id="no_of_reviews">
                          ({product.numOfReviews} Reviews)
                        </span>
                      </div>
                      <p className="card-text">${product.price}</p>
                      <a
                        href="javascript:void(0)"
                        id="view_btn"
                        className="btn btn-block"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Home;
