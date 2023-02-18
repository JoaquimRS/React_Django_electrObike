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
