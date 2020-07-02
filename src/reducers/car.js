import { ACTIONS_TYPES } from "../actions/car";
const initialState = {
    list: []
}

export const car = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
    
        default:
            return state
    }
}