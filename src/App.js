import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';

import lenis from './components/utils/lenis';
import horizontal from './components/utils/horizontal';

const App = () => {
  useEffect(() => {
    lenis();
    horizontal();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
