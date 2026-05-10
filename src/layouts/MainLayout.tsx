import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Live Animated Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-accent-orange/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-accent-violet/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <Navbar />
      <div className="flex pt-16 relative z-10">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 lg:p-10 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
