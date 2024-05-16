import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inform from './pages/Inform';
import App from './pages/App';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/inform" element={<Inform />} />
      <Route path="/app" element={<App />} />
    </Routes>

  );
};

export default MainRoutes;
