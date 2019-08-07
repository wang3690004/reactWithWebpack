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
        console.log(e)
        this.setState({inputvalue:e.target.value},()=>{console.log(this.state.inputvalue)})
        store.dispatch(getInputChangeAction(e.target.value))
    }

    render(){
        return(
            <div>
                <Input value={this.state.inputvalue} onChange={this.setReduxState}  />
                <Button>查看redux的state</Button>
            </div>
        )
    }
}

export default User