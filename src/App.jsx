import React, { useEffect } from 'react';
import WebApp from "@twa-dev/sdk";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EssayEditor from './pages/EssayEditor';
import ResultsPage from './pages/ResultsPage';

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task1" element={<EssayEditor task="task1" />} />
        <Route path="/task2" element={<EssayEditor task="task2" />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
