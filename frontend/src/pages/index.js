import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Profile = lazy(() => import('./Profile/Profile'));
const Notification = lazy(() => import('./Notification/Notification'));
const ErrorNF = lazy(() => import('./Error/ErrorNF'))
const Login = lazy(() => import('./Auth/Login'))
const Register = lazy(() => import('./Auth/Register'))
const NFC = lazy(() => import('./Home/NFC'))
const Admin = lazy(() => import('./Admin/Admin'))
const User = lazy(() => import('./Profile/User'))
const Reserves = lazy(() => import('./Profile/Reserves'))
const Incidents = lazy(() => import('./Profile/Incidents'))

export {
    Home,
    NFC,
    Profile,
    Notification,
    ErrorNF,
    Login,
    User,
    Reserves,
    Incidents,
    Admin,
    Register
}

