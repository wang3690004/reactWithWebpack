import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import User from '../pages/user/index.jsx'
import UserGroup from '../pages/usergroup/index.jsx'
import notMatch from '../pages/notMatch/index.jsx'

const routes = (
    <Switch>
        <Route path='/' exact render={()=>(<Redirect to ='/user'/>)}/>
        <Route path='/user' component = {User}/>
        <Route path = '/notMatch' component = {notMatch} />
    </Switch>
)
export default routes
// class RouteIndex extends React.Component{
//     render(){
//         return(
//             <Switch>
//                 <Route path='/' exact render={()=>(<Redirect to='/user' />)} />
//                 <Route path='/user' component={User} />
//                 <Route path='/usergroup' component={UserGroup} />
//             </Switch>
//         )
//     }
// }
// export default RouteIndex