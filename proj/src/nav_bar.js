import React from 'react'
import { Button, Nav, Form } from 'react-bootstrap'
export default class nav_bar extends React.Component {
    render() {
        return (
            <>
                <Nav className="navbar navbar-expand-lg navbar-light">
                    <img src="./logo192.png"></img><a className="navbar-brand" href="#"><h1>Numerical</h1></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DEV</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Example</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="btn btn-secondary btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Method
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                                    <li><a className="dropdown-item" href="#">Root of Equation</a></li>
                                    <li><a className="dropdown-item" href="#">Linear Algebra</a></li>
                                    <li><a className="dropdown-item" href="#">Inter And Extrapolation</a></li>
                                </ul>
                            </li>
                        </ul>
                        <Form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <Button className="btn btn-outline-success my-2 my-sm-0"  type="submit">SEARCH</Button>
                        </Form>
                    </div>
                </Nav>
            </>
        )
    }
}