import AppRoutes from './routes/AppRoutes';
import { useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  
  // Routes that shouldn't use the MainLayout (Auth, Landing)
  const isAuthPage = ['/login', '/signup', '/'].includes(location.pathname);

  const content = (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );

  if (isAuthPage) {
    return content;
  }

  return (
    <MainLayout>
      {content}
    </MainLayout>
  );
}

export default App;
