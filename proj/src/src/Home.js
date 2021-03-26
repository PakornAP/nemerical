import React from 'react'
import { Container } from 'react-bootstrap'
import './Home.css'

export default class home extends React.Component{
    render(){
        return(
            <>
            <h1 className="Name">Home</h1>
            <Container className='Content'>
            </Container>
            </>
        )
    }
}