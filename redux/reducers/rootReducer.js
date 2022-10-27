import { combineReducers } from 'redux';
import {skillSheetReducer} from "@/redux/reducers/skillSheet";
import {authReducer} from "@/redux/reducers/authReducers";

const rootReducer = {
    authReducer,
    skillSheetReducer
}

export default combineReducers(rootReducer)