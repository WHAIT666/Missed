import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/create-post">Create Post</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 Missed Connections</p>
      </footer>
    </div>
  );
};

export default MainLayout;
