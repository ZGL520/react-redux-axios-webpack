import {combineReducers} from 'redux'
import bloginfo from '../pages/bloglist/reducers/bloginfo'
import axiosgetdata from '../pages/bloglist/reducers/axiosgetdata'

export default combineReducers({
    bloginfo,
    axiosgetdata
})