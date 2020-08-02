import React, { Component } from 'react'
import { CommentsItem } from './CommentsItem';
import PropTypes from 'prop-types';

export class Comments extends Component {

    render() {
        return this.props.comments.map((comment) => (
            <div style={CommentsStyle}>
                <CommentsItem key={comment.id} comment={comment} handleDelete={this.props.handleDelete} />
            </div>
        ));
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}

const CommentsStyle = {
    margin: '2em 5em'
}

export default Comments
