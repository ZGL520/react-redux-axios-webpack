import * as actionTypes from '../constants/bloginfo'
const initialState = {}
export default function bloginfo(state = initialState,action) {
    switch (action.type){
        case actionTypes.BLOG_LOAD:
            return action.data;
        default:
            return state
    }
}