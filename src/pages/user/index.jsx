import React from 'react'
import { Layout, Menu, Breadcrumb, Icon,Message,Input,Button} from 'antd'
// import store from '../../redux/store'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from '../../redux/actions'
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputvalue:''
        }
    }
    // getReduxState = ()=>{
    //     console.log(store.getState())
    // }
    // setReduxState = (e)=>{
    //     this.setState({inputvalue:e.target.value},()=>{store.dispatch(getInputChangeAction(this.state.inputvalue))})
        
    // }

    render(){
        return(
            <div>
                <Input value={this.state.inputvalue} onChange={(e)=>this.props.setredux(e.target.value)}  />
                <Button onClick={this.props.inputValue}>查看redux的state</Button>
            </div>
        )
    }
}

   function mapStateToProps (state){
        return {inputValue:state.inputValue }   
    }
   function mapDispatchToProps (dispatch) {
        return {
            setredux: bindActionCreators({getInputChangeAction},dispatch)
    }
}  //这个为啥要加const或者function 

export default connect(mapStateToProps,mapDispatchToProps)(User)