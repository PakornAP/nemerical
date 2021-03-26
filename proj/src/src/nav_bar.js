import React from 'react'
import { Button, Nav, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class nav_bar extends React.Component {
    render() {
        return (
            <>
                <Nav className="navbar navbar-expand-lg navbar-light">
                    <img src="./logo192.png"></img><h1>Numerical</h1>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Example">Example</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">Profile</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="btn btn-secondary btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Method
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                                    <li><Link className="dropdown-item" to="/Roe">Root of Equation</Link></li>
                                    <li><Link className="dropdown-item" to="/Lin">Linear Algebra</Link></li>
                                    <li><Link className="dropdown-item" to="/In_Ex">Inter And Extrapolation</Link></li>
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