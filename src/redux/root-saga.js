import { all } from 'redux-saga/effects';
import getUserSagas from './GetUserData/saga'
import productSaga from './GetProductData/saga'


export default function* rootSaga() {
    yield all([
        getUserSagas(),
        productSaga(),
    ])
}