import React from 'react'
import App from '../pages/index'
import Home from '../pages/home/containers/index'
import Product from '../pages/product/containers/index'
import Blog from '../pages/blog/containers/index'
import BlogList from '../pages/bloglist/containers/index'
import Login from '../pages/login/containers/index'
import NotFound from '../pages/404'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

class RootRoute extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <App/>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Blog" component={Blog}/>
                        <Route path="/Product" component={Product}/>
                        <Route path="/BlogList" component={BlogList}/>
                        <Route path="/Login" component={Login}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RootRoute



