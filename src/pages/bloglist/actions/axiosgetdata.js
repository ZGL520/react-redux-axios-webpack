import * as actionType from '../constants/bloginfo'

export const axiosgetdata = (data) => {
    return {
        type:"AXIOS_GETDATA",
        data
    }
}