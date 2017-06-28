import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


export class BloginfoShow extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:false,
            book:[]
        };
    }
    componentWillMount(){
        const data = this.props.text
        this.setState({
            initDone:true,
            book:data
        })
    }
    render(){
        const data = this.props.text
        this.setState({
            initDone:true,
            book:data
        })
        return(
            <div>
                <h1>数据展示</h1>
                {
                    this.state.initDone?
                    <div>{this.state.book.map((item,index) => {
                        return (
                            <div>
                                <h2>{item.id}.{item.title}</h2>
                                <p><img src={item.img} alt=""/></p>
                                <p>{item.content}</p>
                            </div>
                            )
                    })}</div>:
                        <div>正在加载。。。</div>
                }

            </div>
        )
    }

}
