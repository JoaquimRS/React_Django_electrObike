import './App.css';
import React, { lazy } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
