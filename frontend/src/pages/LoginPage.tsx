import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default LoginPage;
