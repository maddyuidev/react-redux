import ProductConstants from "../constants/productConstants";
const initialState = {
  products: [],
  product: {},
  loading: true,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductConstants.API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductConstants.API_FAIL:
      return {
        ...state,
        loading: true,
        products: [],
      };
    case ProductConstants.API_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ProductConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        resPerPage: action.payload.resPerPage,
        productsCount: action.payload.productsCount,
      };
    case ProductConstants.GET_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
