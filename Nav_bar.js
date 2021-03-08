import logo from './logo.svg';
import './nav_bar.css';
import Nav_but from './nav_componet';
import React from 'react';
export default class Index_numer extends React.Component {
  render() {
    const onclick = () =>{console.log("state")}
    return (
      <nav className="logo_head">
          <div className="but" >
            <Nav_but text="Home" onclick={onclick}/>
            <Nav_but text="Method" />
            <Nav_but text="Docs" />
            <Nav_but text="Contract" />
            <Nav_but text="DEV"/>
          </div>
          <header>NUMERICAL</header>
          <img className="logo_index" src={logo} />
          {/* <div className="user">user</div> */}
      </nav>
    )
  }
}



