
const INITIAL_STATE = {
    toastr: {
        type: '',
        message: '',
        show: false
    }
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_TOASTR':
            return {
                ...state,
                toastr: payload
            }
        default:
            return state
    }
}