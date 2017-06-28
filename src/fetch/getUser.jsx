import {get} from './get'

export function getUser(id) {
    const userInfo = get('http://localhost:3000/' + id);
    return userInfo
}
