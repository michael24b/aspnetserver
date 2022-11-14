import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}



export const fetchAll = () => dispatch => {
    api.dUser().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
 
    api.dUser().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (userId, data, onSuccess) => dispatch => {

    api.dUser().update(userId, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { userId, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (userId, onSuccess) => dispatch => {
    api.dUser().delete(userId)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: userId
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}