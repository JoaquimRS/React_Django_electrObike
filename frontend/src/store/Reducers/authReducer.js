const INITIAL_STATE = {
    user: null,
    rents: [],
    admin: false
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
        case 'SET_ADMIN':
            return {
                ...state,
                admin: payload
            }
        default:
            return state
    }
}