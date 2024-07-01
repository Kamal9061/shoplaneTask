import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signupRequest } from '../redux/GetUserData/userSlice';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter valid first name.'),
    lastName: Yup.string().required('Please enter valid last name.'),
    email: Yup.string().email('Please enter valid email.').required('Email is required.'),
    address: Yup.string().required('Please enter valid address.'),
    country: Yup.string().required('Please select your country.'),
    state: Yup.string().required('Please select your state.'),
    city: Yup.string().required('Please select your city.'),
    pincode: Yup.string().required('Please enter valid pincode.'),
    mobileNumber: Yup.string().required('Please enter valid mobile number.'),
    password: Yup.string().required('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm password should be same as password').required('Confirm password is required')
});

const Signup = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [userType, setUserType] = useState('Individual');

    return (
        <div className="form-container">
            <div className="tabs">
                <button onClick={() => history('/login')}>LOGIN</button>
                <button className="active">SIGNUP</button>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    country: '',
                    state: '',
                    city: '',
                    pincode: '',
                    mobileNumber: '',
                    password: '',
                    confirmPassword: '',
                    userType: 'Individual',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    dispatch(signupRequest(values));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="radio-group">
                            <Field
                                type="radio"
                                name="userType"
                                value="Individual"
                                id="individual"
                                checked={userType === 'Individual'}
                                onChange={() => setUserType('Individual')}
                            />
                            <label htmlFor="individual">Individual</label>

                            <Field
                                type="radio"
                                name="userType"
                                value="Enterprise"
                                id="enterprise"
                                checked={userType === 'Enterprise'}
                                onChange={() => setUserType('Enterprise')}
                            />
                            <label htmlFor="enterprise">Enterprise</label>

                            <Field
                                type="radio"
                                name="userType"
                                value="Government"
                                id="government"
                                checked={userType === 'Government'}
                                onChange={() => setUserType('Government')}
                            />
                            <label htmlFor="government">Government</label>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="firstName" placeholder="First Name" className="form-control" />
                            <ErrorMessage name="firstName" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="lastName" placeholder="Last Name" className="form-control" />
                            <ErrorMessage name="lastName" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="address" placeholder="Address" className="form-control" />
                            <ErrorMessage name="address" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="country" placeholder="Country" className="form-control" />
                            <ErrorMessage name="country" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="state" placeholder="State" className="form-control" />
                            <ErrorMessage name="state" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="city" placeholder="City" className="form-control" />
                            <ErrorMessage name="city" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="pincode" placeholder="Pincode" className="form-control" />
                            <ErrorMessage name="pincode" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="text" name="mobileNumber" placeholder="Mobile Number" className="form-control" />
                            <ErrorMessage name="mobileNumber" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" />
                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            SIGNUP
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Signup;
