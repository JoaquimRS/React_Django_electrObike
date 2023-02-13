const INITIAL_STATE = {
    stations: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_STATIONS':
            return {
                ...state,
                stations: payload
            }
        default:
            return state
    }
}
// import { createSlice } from '@reduxjs/toolkit'

// export const stationsSlice = createSlice({
//     name: 'stations',
//     initialState: {
//         stations: []
//     },
//     reducers: {
//         setStationsStore: (state, action) => {
//             state.stations = action.payload
//         }
//     },
// })

// export const { setStationsStore } = stationsSlice.actions

// export default stationsSlice.reducer