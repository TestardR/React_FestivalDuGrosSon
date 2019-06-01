import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
