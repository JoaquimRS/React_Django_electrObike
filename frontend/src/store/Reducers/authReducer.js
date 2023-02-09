import { createSlice } from '@reduxjs/toolkit'
import JWTService from '../../services/JWTService'
import authService from '../../services/authService'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = authSlice.actions




export default authSlice.reducer