import { createSlice } from '@reduxjs/toolkit'

export const stationsSlice = createSlice({
    name: 'stations',
    initialState: {
        stations: []
    },
    reducers: {
        setStationsStore: (state, action) => {
            state.stations = action.payload
        }
    },
})

export const { setStationsStore } = stationsSlice.actions

export default stationsSlice.reducer