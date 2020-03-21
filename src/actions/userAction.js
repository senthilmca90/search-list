import { GET_USERS } from "../constants/ActionTypes";


export const getUsers = () => dispatch => {

    return fetch('data/search-list.json')
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json)
        dispatch({type : GET_USERS, payload : json})

    });
}
