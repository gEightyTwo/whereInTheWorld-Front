import React, { Component } from 'react'
import Comments from './Comments'

class CommentList extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <Comments />
        )
    }
}

export default CommentList