import React from 'react'
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom'

export default class Roe extends React.Component{
    render(){
        return(
            <>
            <h2>Root of Equation</h2>
            <BrowserRouter>
            <Switch>
                <Route path ='/Bisection'>
                    
                </Route>
            </Switch>
            </BrowserRouter>
            </>
            )
    }
}