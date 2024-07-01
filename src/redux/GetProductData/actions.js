const actions = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILED: 'GET_PRODUCTS_FAILED',

  getProducts: () => ({
    type: actions.GET_PRODUCTS,
  }),
  getProductsSuccess: (products) => ({
    type: actions.GET_PRODUCTS_SUCCESS,
    payload: { products },
  }),
  getProductsFailed: (error) => ({
    type: actions.GET_PRODUCTS_FAILED,
    payload: { error },
  }),
};

export const { getProducts, getProductsSuccess, getProductsFailed } = actions;

export default actions; // remove this line if exporting individual actions
