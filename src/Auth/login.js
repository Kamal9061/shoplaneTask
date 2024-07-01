import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./loginMode.scss"
import { useDispatch } from 'react-redux';
import { loginRequest } from '../redux/GetUserData/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email.').required('Email is required.'),
    password: Yup.string().required('Required'),
});

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/');
        }
    }, [history]);

    return (
        <div className="form-container">
            <div className="tabs">
                <button className="active">LOGIN</button>
                <button onClick={() => history('/signup')}>SIGNUP</button>
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    dispatch(loginRequest(values));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div onClick={() => history('/resetpassword')} className="resetPassowrdBtn">Forgot Password?</div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            LOG ME IN
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
