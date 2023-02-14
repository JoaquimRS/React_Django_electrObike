import { configureStore } from '@reduxjs/toolkit';
import stationsReducer from './Reducers/stationsReducer';
import authReducer from './Reducers/authReducer';
import globalReducer from './Reducers/globalReducer';
export default configureStore({
    reducer: {
        stations: stationsReducer,
        auth: authReducer,
        global: globalReducer
    }
})