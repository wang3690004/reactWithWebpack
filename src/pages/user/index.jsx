import React from 'react'
import { Layout, Menu, Breadcrumb, Icon,Message,Input,Button} from 'antd'
import store from '../../redux/store'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from '../../redux/actions'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputvalue:''
        }
    }
    getReduxState = ()=>{
        console.log(store.getState())
    }
    setReduxState = (e)=>{
        this.setState({inputvalue:e.target.value},()=>{store.dispatch(getInputChangeAction(this.state.inputvalue))})
        
    }

    render(){
        return(
            <div>
                <Input value={this.state.inputvalue} onChange={(e)=>this.setReduxState(e)}  />
                <Button onClick={this.getReduxState}>查看redux的state</Button>
            </div>
        )
    }
}

export default User