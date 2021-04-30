import React from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import Posts from './posts';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchPost()
    }

    render() {
        return (<div>
            <div>Post App</div>
            <Posts/>
        </div>)
    }
}



export default connect(null, { fetchPost })(App);