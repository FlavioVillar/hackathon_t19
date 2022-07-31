import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import StorePage from './pages/StorePage';

import OurStoresPage from './pages/OurStoresPage';


export default function RoutePaths() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />

      <Route exact path="/webStore" element={<StorePage />} />

      <Route exact path="/lojas" element={<OurStoresPage />} />

    </Routes>
  );
}
