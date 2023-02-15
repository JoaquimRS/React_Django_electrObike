import './App.css';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AuthGuard from './services/guards/AuthGuard';

import { AuthContextProvider } from "./context/AuthContext";

import { Navbar } from './components';
import { Profile, Notification, Home, NFC, ErrorNF, Login } from './pages';
import Toastr from './components/Toastr/Toastr';

function App() {
  return (
    <div>
      <Suspense >
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path={'/home'}>
                <Route index element={<Home/>}/>
                <Route element={<AuthGuard />}>
                  <Route path={':slugBike'} element={<NFC/>}/>
                </Route>
              </Route>


              <Route path='/login' element={<Login />} />

              <Route element={<AuthGuard />}>
                <Route path='/profile' element={<Profile />} >
                  <Route path='hola' element={<Profile />} />
                </Route>
              </Route>


              <Route path='/notification' element={<Notification />} />
              <Route path={'*'} element={<ErrorNF />} />
            </Routes>
          </AuthContextProvider>
          <Navbar />
          <Toastr />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
