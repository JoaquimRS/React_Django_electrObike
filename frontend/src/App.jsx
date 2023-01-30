import './App.css';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Home/Home';
import { Profile, Notification } from './pages';

function App() {
  return (
    <div>
      <Suspense >
        <BrowserRouter>
          <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/notification' element={<Notification />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
