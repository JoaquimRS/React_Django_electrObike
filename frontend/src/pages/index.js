import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Profile = lazy(() => import('./Profile/Profile'));
const Notification = lazy(() => import('./Notification/Notification'));
const ErrorNF = lazy(() => import('./Error/ErrorNF'))
const Login = lazy(() => import('./Auth/Login'))
const NFC = lazy(() => import('./Home/NFC'))

export {
    Home,
    NFC,
    Profile,
    Notification,
    ErrorNF,
    Login
}

