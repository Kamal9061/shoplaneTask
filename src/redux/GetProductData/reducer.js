import { combineReducers } from 'redux';
import { getProductsSuccess, getProductsFailed } from './actions'; // Adjust path as necessary

const initState = {
  loading: false,
  error: null,
  products: [],
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case 'GET_PRODUCTS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
