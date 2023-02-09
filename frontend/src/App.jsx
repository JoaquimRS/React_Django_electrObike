import './App.css';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import { Profile, Notification, Home, ErrorNF, Login } from './pages';
import AuthGuard from './services/guards/AuthGuard';

function App() {
  return (
    <div>
      <Suspense >
        <BrowserRouter>
          <Routes>
            <Route path={'/home'} element={<Home />} />

            <Route path='/login' element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route path='/profile' element={<Profile />} />
            </Route>


            <Route path='/notification' element={<Notification />} />
            <Route path={'*'} element={<ErrorNF />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
