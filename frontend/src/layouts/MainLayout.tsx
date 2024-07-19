import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default MainLayout;
