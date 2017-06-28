import React from 'react'
// import {dataTest} from '../../../fetch/test'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getUser} from '../../../fetch/getUser'


// dataTest();

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        const data = this.state.data
        return (
            <div>
                <h1>here is home</h1>
                {/*<div>{this.state.data.length}</div>*/}
                {/*<div>{data.map((item,index) => {*/}
                    {/*return <p>id:{item.id} username:{item.name}</p>*/}
                {/*})}</div>*/}

            </div>
        )
    }
    componentDidMount(){
        // const user = getUser('user');
        // user.then(res => {
        //     return res.json()
        // }).then(json => {
        //     this.setState({
        //       data:json
        //     })
        // })

    }
}


export default Home


