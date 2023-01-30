import productsConstants from "../constants/productsConstants";

const initialState = {
  products: [],
};

export const ProductsReducer = (state = initialState, action) => {
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
export const ProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productsConstants.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: {},
      };
    case productsConstants.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case productsConstants.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
