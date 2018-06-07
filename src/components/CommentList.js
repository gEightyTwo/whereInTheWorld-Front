import React, { Component } from 'react'
import Comments from './Comments'

class CommentList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Comments />
        )
    }
}

export default CommentList