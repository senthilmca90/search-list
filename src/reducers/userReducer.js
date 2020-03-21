import { GET_USERS } from "../constants/ActionTypes"

const initialState = {
    users:[]

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_USERS:
        console.log(`payload `,payload)
        return { ...state, users : payload }

    default:
        return state
    }
}
