const INITIAL_STATE = {
    user: null,
    rents: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            return payload ? {
                ...state,
                user: payload,
                rents: payload.rents
            } : {
                ...state,
                user: null,
                rents: []
            }
        default:
            return state
    }
}