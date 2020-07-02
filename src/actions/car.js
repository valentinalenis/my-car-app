import api from "./api";

export const ACTIONS_TYPES = {
       CREATE: 'CREATE',
       UPDATE: 'UPDATE',
       DELETE: 'DELETE',
       FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    api.car().fetchAll()
    .then(response => {
        console.log(response);
        dispatch({
            type: ACTIONS_TYPES.FETCH_ALL,
            payload: response.data
        })
    
    })
    .catch(err => console.log(err))
}