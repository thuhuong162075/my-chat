import * as Types from '../constants/ActionType'
var initialState = [
        
    ];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_GROUP_ALL: {
            state = action.groupList
            return state;
        }
        case Types.GET_MESSENGE: {
            let findGroupMes = state.findIndex(item=>item.id === action.info.id)
            let arr = state;
            arr = [
                ...arr.slice(0, findGroupMes),
                {
                    ...arr[findGroupMes],
                    mesenger: action.info.mesenger
                },
                ...arr.slice(findGroupMes+1,arr.length)
            ]
            state = arr
            return state
        }
        
        default: return state
    }
}
export default myReducer