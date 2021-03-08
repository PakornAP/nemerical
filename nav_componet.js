import logo from './logo.svg';
import './nav_component.css';
import React from 'react';

export default class nav_component extends React.Component{
    render(){
        return(
            <button className='btd' onClick={this.props.onclick}>{this.props.text}</button>
        )
    }
}
