import {get} from './get'

export function dataTest() {
    let result = get('http://localhost:3000/user');

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
}