import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Sidebar } from './components';
import { Dashboard, Payreqs, Bucs, Accounting, Settings } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payreqs" element={<Payreqs />} />
          <Route path="/bucs" element={<Bucs />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
