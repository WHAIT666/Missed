import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { ModeToggle } from '../components/mode-toggle';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
      <ModeToggle />
      <Navbar />
    </div>
  );
};

export default MainLayout;
