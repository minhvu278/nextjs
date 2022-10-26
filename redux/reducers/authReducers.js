import {LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_LOADING} from "../constants";

const initialState = {
    loading: false,
    dataLogin: null,
    dataLogout: null,
    dataResetPassword: null,
    errors: null,
    url: null,
    googleCallback: null,
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                dataLogin: action.payload,
                errors: null
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                dataLogout: action.payload,
                errors: null
            }
        default:
            return state
    }
}