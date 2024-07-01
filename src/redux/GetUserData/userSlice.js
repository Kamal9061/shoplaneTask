import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        token: null,
        userData: null,
        error: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.isAuthenticated = false;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userData = action.payload.user;
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        signupRequest: (state) => {
            state.error = null;
        },
        signupSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userData = action.payload.user;
        },
        signupFailure: (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.userData = null;
        }
    }
});

export const {
    loginRequest, loginSuccess, loginFailure,
    signupRequest, signupSuccess, signupFailure, logout
} = userSlice.actions;

export default userSlice.reducer;
