import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header style={HeaderStyle}>
                <h1 style={TitleStyle}>MyApp</h1>
                <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>
            </header>
        )
    }
}

const LinkStyle = {
    color: '#000',
    textDecoration:'none'
}

const HeaderStyle = {
    backgroundColor:'#EADDD7',
    textAlign:'center'
}

const TitleStyle = {
    color:'var(--brown)',
}
export default Header
