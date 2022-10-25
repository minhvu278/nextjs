import {dataError, setLoading} from "./index";
import axios from "axios";
import {LOGIN_SUCCESS} from "../constants";

export const login = (payload) => async (dispatch) => {
    dispatch(setLoading)
    try {
        const response = await axios.post('/login', payload)
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