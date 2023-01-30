import { configureStore } from '@reduxjs/toolkit';
import stationsReducer from './Reducers/stationsReducer';

export default configureStore({
    reducer: {
        stations: stationsReducer
    }
})