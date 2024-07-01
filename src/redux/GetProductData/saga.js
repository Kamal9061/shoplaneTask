import { all, takeEvery, put, call } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailed } from './actions'; // Adjust path as necessary
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

function* getProductsList() {
  try {
    const response = yield call(axios.get, `${baseURL}/products`);
    yield put(getProductsSuccess(response.data));
  } catch (error) {
    yield put(getProductsFailed(error.message));
  }
}

export default function* productSaga() {
  yield all([takeEvery('GET_PRODUCTS', getProductsList)]);
}
