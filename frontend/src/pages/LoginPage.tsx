import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Login from '@/components/Login';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
    <Login />
  </MainLayout>
  );
};

export default HomePage;
