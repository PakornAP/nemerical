import logo from './logo.svg';
import './nav_bar.css';
import Nav_but from './nav_componet';
import React from 'react';
export default class Index_numer extends React.Component{
  render(){
    const username = "edok"
    return (
    <div>
      <header>
        <div className="logo_head">
          <img className="logo_index" src={logo}/>
          <h1>NUMERICAL</h1>
          <Nav_but/>
        </div>
        
        <div className="user">
          {username == "prayut"? "not allow to use":"lav yah" }
          {username} is using
        </div>
      </header>
      {/* <secton/> */}
      {/* <article/> */}
      {/* <footer/> */}
    </div>
      
    )
  }
}



