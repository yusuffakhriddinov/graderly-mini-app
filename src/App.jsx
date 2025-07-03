import React, { useEffect } from 'react';
import { WebApp } from "@twa-dev/sdk";
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    WebApp.ready(); // tells Telegram you're ready
  }, []);

  return <HomePage />;
}

export default App;