import * as actionTypes from '../constants/bloginfo'

export const blogload = (data) => {
    return {
        type:"BLOG_LOAD",
        data
    }
}