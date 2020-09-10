import * as Types from '../constants/ActionType'
var initialState = {
    loggedUser: null,
    actLogin: false,
    usersList: [],
    errLogin: false
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ACTION_LOGIN: {
            state = {
                ...state,
                actLogin: action.actlogin
            }
            return state;
        }
        case Types.ERR_LOGIN: {
            state = {
                ...state,
                errLogin : action.err
            }
            return state;
        }
        case Types.LOGGED_USER: {
            state = {
                ...state,
                loggedUser: action.loggedUser
            }
            return state
        }
        case Types.USERS_LIST: {
            state = {
                ...state,
                usersList: action.users
            }
            return state
        }
        default: return {...state}
    }
}
export default myReducer