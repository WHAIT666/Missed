import React, { ReactNode } from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      <main className="flex-grow pt-16 pb-16">
        {children}
      </main>
      <BottomNavbar />
    </div>
  );
};

export default MainLayout;
