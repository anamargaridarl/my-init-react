import React, { Component } from 'react'

export class AddComment extends Component {

    state = {
        name: '',
        email: '',
        body: ''
    }

    onChangeName = (e) => this.setState({ name: e.target.value})
    onChangeEmail = (e) => this.setState({ email: e.target.value})
    onChangeBody = (e) => this.setState({ body: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.email, this.state.body)
        this.setState({name: '', email: '' , body: ''})
    }

    render() {
        return (
            <div style={BoxStyle}>
                <h3> Add New Comment </h3>
                <form style={FormStyle} onSubmit={this.handleSubmit}>
                    <input style={InputStyle} type="text" name="name" placeholder="Add Name ..." value={this.state.name} onChange={this.onChangeName} />
                    <input style={InputStyle} type="text" name="email" placeholder="Add Email ..." value={this.state.email} onChange={this.onChangeEmail} />
                    <input style={InputStyle} type="text" name="body" placeholder="Add Comment ..." value={this.state.body} onChange={this.onChangeBody} />
                    <input style={InputStyle} type="submit" className="btn" value="Submit" />
                </form>
            </div>
        )
    }
}

const BoxStyle = {
    textAlign: 'center',
    margin: '2em'
}

const FormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const InputStyle = {
    width: '80%',
    height: '2em',
    marginBottom: '1em'
}

export default AddComment
