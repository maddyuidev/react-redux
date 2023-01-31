import axios from "axios";
import ProductConstants from "../constants/productConstants";

export const get_all_products =
  (keyword = "", activePage = 1, price) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ProductConstants.API_REQUEST,
      });
      const link = `/api/v1/products/?keyword=${keyword}&page=${activePage}&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      const products = await axios(link);
      // console.log(products.data.products);
      dispatch({
        type: ProductConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: products.data,
      });
    } catch (error) {
      dispatch({
        type: ProductConstants.API_ERROR,
        payload: error,
      });
    }
  };

export const get_one_product = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ProductConstants.API_REQUEST,
    });
    const product = await axios("/api/v1/product/" + id);
    console.log(product);
    dispatch({
      type: ProductConstants.GET_ONE_PRODUCT_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: ProductConstants.API_ERROR,
      payload: error,
    });
  }
};
