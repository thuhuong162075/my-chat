import * as Types from '../constants/ActionType'
export const actLogin = (actlogin) => {
    return {
        type: Types.ACTION_LOGIN,
        actlogin
    }
}
export const errLogin = (err) => {
    return {
        type: Types.ERR_LOGIN,
        err
    }
}
export const loggedUser = (loggedUser) => {
    return {
        type: Types.LOGGED_USER,
        loggedUser
    }
}
export const usersList = (users) => {
    return {
        type: Types.USERS_LIST,
        users
    }
}
export const actRegister = (actRegister) => {
    return {
        type: Types.ACTION_REGISTER,
        actRegister
    }
}
export const errRegister = (err) => {
    return {
        type: Types.ERR_REGISTER,
        err
    }
}
export const getMessenge = (info) => {
    return {
        type: Types.GET_MESSENGE,
        info
    }
}
export const getgroupAll = (groupList) => {
    return {
        type: Types.GET_GROUP_ALL,
        groupList
    }
}
export const addGroupActive = (group) => {
    return {
        type: Types.ADD_GROUP_ACTIVE,
        group
    }
}