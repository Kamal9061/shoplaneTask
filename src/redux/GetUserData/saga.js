import { all, takeEvery, put, call } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure, signupRequest, signupSuccess, signupFailure } from './userSlice';
import { delay } from 'redux-saga/effects';

function* loginSaga(action) {
    try {
        yield delay(1000);
        const token = 'fake-jwt-token'; // Replace with actual token logic
        const user = action.payload;
        localStorage.setItem('token', token);
        if(user) {
            window.location.href = '/';
        }
        yield put(loginSuccess({ token, user }));

    } catch (error) {
        yield put(loginFailure('Login failed'));
    }
}

function* signupSaga(action) {
    try {
        yield delay(1000);
        const token = 'fake-jwt-token'; // Replace with actual token logic
        const user = action.payload;
        localStorage.setItem('token', token);
        if(user) {
            window.location.href = '/';
        }
        yield put(signupSuccess({ token, user }));
    } catch (error) {
        yield put(signupFailure('Signup failed'));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(loginRequest.type, loginSaga),
        takeEvery(signupRequest.type, signupSaga),
    ]);
}
