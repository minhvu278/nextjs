import {dataError, setLoading} from "./index";
import axios from "axios";
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../constants";

export const login = (payload) => async (dispatch) => {
    dispatch(setLoading)
    try {
        const response = await axios.post('/auth/login', payload)
        console.log("Ok", response)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response?.data
        })
        return response
    } catch (error) {
        dispatch(dataError(error?.response?.data?.errors))
        return error?.response
    }
}

export const logout = () => async (dispatch) => {
    dispatch(setLoading);
    try {
        const response = await axios.post('logout', null, {
            headers: {
                'Authorization': 'Bearer ' +  Cookies.get('token')
            }
        })
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: response?.message
        })
        return response
    } catch (error) {
        dispatch(dataError(error?.response?.data?.errors))
        return error?.response
    }
}