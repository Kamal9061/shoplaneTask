import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import "./loginMode.scss"

const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const ResetPassword = () => {
    const history = useNavigate();

    return (
     <div className='topsectionPass'>
           <div className='downSection'>
            <h4 className='classNameEmail'>Please Provide Your  Registred Mail Id For Reset Password</h4>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={ResetPasswordSchema}
                onClick={() => history('/login')}
            >
                {({ isSubmitting }) => (
                    <Form>
                          <div className="form-group">
                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div className='forgotTabButon'>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            Reset Password
                        </button>
                        <button className="btn btn-primary" onClick={() => history('/login')}>Back to Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
     </div>
    );
};

export default ResetPassword;
