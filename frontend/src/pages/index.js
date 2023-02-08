import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Profile = lazy(() => import('./Profile/Profile'));
const Notification = lazy(() => import('./Notification/Notification'));
const ErrorNF = lazy(() => import('./Error/ErrorNF'))

export {
    Home,
    Profile,
    Notification,
    ErrorNF
}

