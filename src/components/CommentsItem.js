import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class CommentsItem extends Component {

    render() {
        const { name, body, email,id } = this.props.comment

        return (
            <div style={CommentStyle} >
                <div style={{ flexBasis: '98%' }}>
                    <h3 style={{ color: 'var(--brown)' }}>{name}</h3>
                    <p>{email}</p>
                    <h4 >Comment:</h4>
                    <p>{body}</p>
                </div>
                <div style={{ flexBasis: '2%' }}>
                    <button style={BtnStyle} onClick={this.props.handleDelete.bind(this,id)} >  X </button>
                </div>
            </div>
        );
    }
}

const CommentStyle = {
    backgroundColor: '#F5F5F5',
    borderBottom: '1px var(--brown) dotted',
    display: 'flex'
}

const BtnStyle = {
    marginTop: '1em',
    backgroundColor: '#919BCA',
    borderRadius: '50px',
    height: '2em',
    width: '2em',
    border: '1px black doted'
}

CommentsItem.propTypes = {
    comment: PropTypes.object.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
}

export default CommentsItem
