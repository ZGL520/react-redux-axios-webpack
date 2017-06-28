import React from 'react'
import {Link} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Home</Link><br/>
                    <Link to="/Blog">Blog</Link><br/>
                    <Link to="/BlogList">BlogList</Link><br/>
                    <Link to="/Login">Login</Link><br/>
                    <Link to="/Product">Product</Link>
                </div>
            </div>
        )
    }

}

export default App


