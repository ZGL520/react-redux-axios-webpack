import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUser} from '../../../fetch/getUser'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as bloginfoActions from '../actions/bloginfo'
import axios from 'axios'
import ShowData from './showbloginfo'


class ProductList extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:false,
            blog:[],
            book:[]
        };
    }


    componentWillDount(){

    }

    render(){
        const data = this.state.blog
        // console.log(this.props.bloginfo)
        return(
            <div>
                <h1>这里是blogList</h1>
                <div>{this.state.initDone? <div><h1>一共{this.state.blog.length}条数据</h1></div>:<div>正在加载。。。</div>}</div>

                {/*<div>*/}
                    {/*<BloginfoShow {this.state.book}/>*/}
                {/*</div>*/}
                <ShowData/>

                <div>
                    {this.state.blog.map((item,index) => {
                        return <div>
                                    <h2>{item.id}.{item.title}</h2>
                                    <p><img src={item.img} alt=""/></p>
                                    <p>{item.content}</p>
                                </div>

                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){

        const bloginfo = getUser('blog');
        bloginfo.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                blog:json,
                initDone:true,
            })
        })

        // const book = axios.interceptors.request.use((config) => {
        //     console.log("请求前拦截");
        //     return config;
        // },(err) => {
        //     return Promise.reject(err)
        // })

        axios.get('http://localhost:3000/book').then((res) => {
            console.log(res)
        })
        const toprops = getUser('blog');
        toprops.then(res => {
            // console.log(res)
            return res.json()
        }).then((json) => {
            // console.log(json)
            this.props.bloginfoActions.blogload({
                text:json
            })
            // console.log(this.props.bloginfo)
        })
    }
}

function mapStateToProps(state) {
    return {
        bloginfo:state.bloginfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        bloginfoActions:bindActionCreators(bloginfoActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)