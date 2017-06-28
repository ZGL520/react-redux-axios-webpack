import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUser} from '../../../fetch/getUser'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as bloginfoActions from '../actions/bloginfo'


class ProductList extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:false,
            book:[]
        };
    }


    componentWillDount(){

    }

    render(){

        const data = this.state.book
        return(
            <div>
                <h1>这里是blogList</h1>
                <div>{this.state.initDone? <div><h1>一共{this.state.book.length}条数据</h1></div>:<div>正在加载。。。</div>}</div>

                {/*<div>*/}
                    {/*<BloginfoShow {this.state.book}/>*/}
                {/*</div>*/}


                <div>
                    {this.state.book.map((item,index) => {
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
                book:json,
                initDone:true,

            })
            // console.log(this.state.book)

        })

        const toprops = getUser('blog');
        toprops.then(res => {
            return res.json()
        }).then((json) => {
            this.props.bloginfoActions.blogload({
                text:json
            })
            console.log(this.props.bloginfo)
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