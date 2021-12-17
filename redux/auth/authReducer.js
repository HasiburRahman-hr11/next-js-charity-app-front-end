import { GET_USER_START, GET_USER_SUCCESS, LOGOUT_SUCCESS } from "./authConstants";

const getUser = ()=>{
    if(typeof window !== "undefined") {
        if(localStorage.getItem('charitAble-user')) {
          return JSON.parse(localStorage.getItem('charitAble-user'))
        } else{
        return {}
        }
     }
}


const initialState = {
    user: getUser(),
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