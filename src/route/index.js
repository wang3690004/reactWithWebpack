import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import User from '../pages/user/index'

class RouteIndex extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/' exact render={()=>(<Redirect to='/user' />)} />
                <Route path='/user' component={User} />
            </Switch>
        )
    }
}
export default RouteIndex