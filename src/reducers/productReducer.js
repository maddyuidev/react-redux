const initialState = {
  products: [],
  product: {},
  loading: true,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      break;

    default:
      return state;
  }
};

export default ProductReducer;
