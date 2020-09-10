import * as Types from '../constants/ActionType'
var initialState = {
    actRegister: false,
    err: false
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ACTION_REGISTER: {
            state = {
                ...state,
                actRegister: action.actRegister
            }
            return state;
        }
        case Types.ERR_REGISTER: {
            state = {
                ...state,
                err: action.err
            }
            return state;
        }
        default: return {...state}
    }
}
export default myReducer