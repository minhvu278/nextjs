import {GET_SKILL, SET_LOADING} from "@/redux/constants";

const initialState = {
    loading: false,
    data: null,
    errors: null,
    url: null
}

export function skillSheetReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_SKILL:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errors: null
            }
        default:
            return state
    }
}