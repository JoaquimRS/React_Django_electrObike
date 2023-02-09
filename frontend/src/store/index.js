import { configureStore } from '@reduxjs/toolkit';
import stationsReducer from './Reducers/stationsReducer';
import authReducer from './Reducers/authReducer';
export default configureStore({
    reducer: {
        stations: stationsReducer,
        auth: authReducer
    }
})