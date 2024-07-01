import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../Auth/login';  
import RegisterTab from '../../Auth/register'; 
import ResetPassword from '../../Auth/forgotPassword';

function LoginRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<RegisterTab />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default LoginRoutes;
