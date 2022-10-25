import {DATA_ERROR, SET_LOADING} from "../constants";

export const setLoading = () => ({
    type: SET_LOADING
})

export const dataError = (error) => ({
    type: DATA_ERROR,
    error
})