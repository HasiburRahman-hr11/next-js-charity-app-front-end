import { GET_USER_START, GET_USER_SUCCESS, LOGOUT_SUCCESS } from "./userConstants";


const initialState = {
    user: {
        displayName: '',
        email: '',
        token: ''
    },
    error: ''
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                ...state
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                user: {
                    displayName: '',
                    email: '',
                    token: ''
                },
                error: ''
            }
        default: return state;
    }
}

export default userReducer;