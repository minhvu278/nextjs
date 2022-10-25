import {authReducer} from "./authReducers";
import { combineReducers } from 'redux';

const rootReducer = {
    authReducer
}

export default combineReducers(rootReducer)