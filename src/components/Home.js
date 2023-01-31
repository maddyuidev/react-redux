import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_products } from "../actions/productActions";
import Pagination from "react-js-pagination";
import React from "react";
import Product from "./products/Product";
import { useParams } from "react-router-dom";

// price range
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

function Home() {
  const { products, loading, resPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  const [price, setPrice] = useState([1, 1000]);
  // categories
  // const [] =
  const [activePage, setActivePage] = useState(1);
  const { keyword } = useParams();
  // console.log(productsCount, "productsCount");
  // console.log(resPerPage, "resPerPage");
  // console.log(productsCount, "productsCount");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_products(keyword, activePage, price));
  }, [dispatch, activePage, keyword, price]);
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <div>
      <div className="row">
        {keyword ? (
          <>
            <div className="col-6 col-md-3 mt-5 mb-5">
              <div className="px-5">
                <Range
                  marks={{
                    1: "$1",
                    1000: "$1000",
                  }}
                  min={1}
                  max={1000}
                  defaultValue={[1, 1000]}
                  tipFormatter={(value) => `$${value}`}
                  tipProps={{
                    placement: "top",
                    prefixCls: "rc-slider-tooltip",
                  }}
                  value={price}
                  onChange={(price) => setPrice(price)}
                />
              </div>
            </div>
            <div className="col-6 col-md-9 mt-5">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </>
        ) : (
          // {products &&
          //   products.map((product) => (
          //     <Product key={product._id} product={product} />
          //   ))}

          products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
      {resPerPage <= productsCount && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={productsCount}
            onChange={handlePageChange}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
