import productsConstants from "../constants/productsConstants";

const initialState = {
  products: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsConstants.ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case productsConstants.ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case productsConstants.ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case productsConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export default ProductReducer;
