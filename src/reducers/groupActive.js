import * as Types from '../constants/ActionType'
var initialState = {}

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_GROUP_ACTIVE: {
            state = action.group
            return state;
        }
        
        default: return state
    }
}
export default myReducer