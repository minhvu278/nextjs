import {dataError, setLoading} from "@/redux/actions/index";
import {GET_SKILL} from "@/redux/constants";
import axios from '@/helper/axiosBase';
import Cookies from 'js-cookie';

export const getSkillSheet = () => async (dispatch) =>{
    dispatch(setLoading)
    try {
        const response = await axios.get('/skillsheet', null, {
            headers: {
                'Authorization': 'Bearer ' +  Cookies.get('token')
            }
        })
        //console.log('test', response)
        dispatch({
            type: GET_SKILL,
            payload: response?.data
        })
        return response
    } catch (error) {
        dispatch(dataError(error?.response?.data?.errors))
        return error?.response
    }
}