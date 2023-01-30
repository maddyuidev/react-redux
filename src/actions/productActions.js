import axios from "axios";
import ProductConstants from "../constants/productsConstants";
const url = "http://localhost:4000";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ProductConstants.ALL_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get(url + "/api/v1/products");
    dispatch({
      type: ProductConstants.ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductConstants.ALL_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ProductConstants.PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(url + "/api/v1/product/" + id);
    dispatch({
      type: ProductConstants.PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: ProductConstants.PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};

// clear function
export const clearError = async (dispatch) => {
  dispatch({
    type: ProductConstants.CLEAR_ERRORS,
  });
};
