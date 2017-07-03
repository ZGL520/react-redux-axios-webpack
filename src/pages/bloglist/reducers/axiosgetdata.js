import * as actionTypes from '../constants/bloginfo'

const initialState = {}

export default function axiosgetdata(state = initialState,action) {
    switch (action.type){
        case actionTypes.AXIOS_GETDATA:
            return action.data
        default:
            return state
    }
}