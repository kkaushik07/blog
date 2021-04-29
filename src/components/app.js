import React from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const App = (props) =>{
   
    console.log(props.num)
    return( <div>
        <div>Post App</div>
        <button onClick= { ()=> props.fetchPost(props.num)}>click Me</button>
    </div>)
}

const mapStateToProps=(state)=>{
    console.log(state)
   return {
       num : state.fetchPost
   }
}


export default connect(mapStateToProps,{fetchPost})(App);