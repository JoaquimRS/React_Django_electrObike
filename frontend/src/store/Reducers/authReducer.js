const INITIAL_STATE = {
    user: null,
    rents: [],
    incidents: [],
    admin: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            return payload ? {
                ...state,
                user: payload,
                rents: payload.rents,
                incidents: payload.incidents
            } : {
                ...state,
                user: null,
                rents: [],
                incidents: [],
                admin: false
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