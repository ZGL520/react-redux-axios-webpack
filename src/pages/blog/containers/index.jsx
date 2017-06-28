import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class Blog extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            book:[]
        }
    }

    render(){
        return(
            <div>
                <h1>这里是blog</h1>

            </div>


        )
    }

    componentDidMount(){


    }
}

export default Blog