import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CitiesSearcher from './pages/CitiesSearcher';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<CitiesSearcher />} />
        {/* path * correspond à une route inconnu */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;