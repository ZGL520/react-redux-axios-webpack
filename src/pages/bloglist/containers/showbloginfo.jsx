import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as axiosGetdata from '../actions/axiosgetdata'
import axios from 'axios'

class ShowData extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:true,
            books:[]
        };
    }
    render(){

        return(
            <div>
                <h1>hello</h1>
                <h1>hello</h1>
            </div>
        )
    }

    componentDidMount(){
        axios.get('http://localhost:3000/book').then((res) => {
            console.log(res)
            return res.json()
        }).then((json) => {
            this.props.booksActions.axiosgetdata({
                books:json
            })
        })
        console.log(this.props.booksinfo)

        // console.log(axiosdata)


        // axiosdata.then((response) => {
        //     return response.json()
        // }).then((json) => {
        //     this.props.booksActions.axiosgetdata({
        //         books:json
        //     })
        // })

    }

}

function mapStateToProps(state) {
    return{
        booksinfo:state.books
    }
}

function mapDispatchToProps(dispatch) {
    return{
        booksActions:bindActionCreators(axiosGetdata,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowData)