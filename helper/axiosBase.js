import getConfig from 'next/config';
import axios from "axios";
import Cookies from 'js-cookie';
import statusCode from "../constants/statusCode";
import {errorToast, successToast} from "./toast";

const {publicRuntimeConfig} = getConfig()

const axiosBase = axios.create({
    baseURL: publicRuntimeConfig.apiUrl
})

axiosBase.interceptors.request.use(function (config) {
    const token = Cookies.get('token')
    if (token) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${token}`
        }
    }
    return config
})

axiosBase.interceptors.response.use((response) => {
    if (response.status === statusCode.OK || response.status === statusCode.CREATED) {
        successToast(response.data.message)
    } else if (response.status === statusCode.BAD_REQUEST) {
        errorToast(response.message)
    }
    return response
}, (error) => {
    if (error?.response?.status === statusCode.UNAUTHORIZED ||
        error?.response?.status === statusCode.BAD_REQUEST
    ) {
        errorToast(error?.response?.data?.message)
    }
    if (error?.response?.status_code === statusCode.INTERNAL_SERVER_ERROR &&
        error?.response?.message === messages.unauthenticated
    ) {
        window.location.reload()
    }
    throw error
})

export default axiosBase