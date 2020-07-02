import api from "./api";

export const ACTIONS_TYPES = {
       CREATE: 'CREATE',
       UPDATE: 'UPDATE',
       DELETE: 'DELETE',
       FETCH_ALL: 'FETCH_ALL'
}

const formateData = data =>({
    ...data,
    valor:parseFloat(data.valor)
})

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

export const create = (data, onSuccess) => dispatch =>{
    data =  formateData(data)
    api.car().create(data)
    .then(res =>{
        dispatch({
            type: ACTIONS_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch =>{
    data =  formateData(data)
    api.car().update(id, data)
    .then(res =>{
        dispatch({
            type: ACTIONS_TYPES.UPDATE,
            payload: {id, ...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch =>{
    api.car().delete(id)
    .then(res =>{
        dispatch({
            type: ACTIONS_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}