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
        case ACTIONS_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTIONS_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x.id == action.payload.id ? action.payload: x)
            }
        case ACTIONS_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload)
            }

    
        default:
            return state
    }
}