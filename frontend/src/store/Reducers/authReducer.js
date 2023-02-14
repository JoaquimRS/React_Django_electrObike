const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}


// export const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null
//     },
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload
//         }
//     }
// })

// export const { setUser } = authSlice.actions




// export default authSlice.reducer