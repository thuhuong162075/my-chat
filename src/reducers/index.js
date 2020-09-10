import { combineReducers } from 'redux';

import login from './login'
import register from './register'
import group from './group'
import groupActive from './groupActive'

const myReducer = combineReducers({
    login,
    register,
    group,
    groupActive
})
export default myReducer