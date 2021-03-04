import logo from './logo.svg';
import './nav_component.css';
import React from 'react';
export default class Index_nav extends React.Component{
    click = (e) =>{
        console.log("edok_my")
    }
    render(){
        return(
            <div className='bar'>
                <table>
                    <th onClick= {this.click}>
                        HOME
                    </th>
                    <th>
                        METHOD
                    </th>
                    <th>
                        GRAPH
                    </th>
                    <th>
                        SETTING
                    </th>
                    <th>
                        ELSE    
                    </th>
                </table>
            </div>
        )
    }
}