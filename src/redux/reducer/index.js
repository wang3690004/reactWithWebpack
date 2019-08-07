import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../actions'

const defaultState ={
  inputValue :'',
  list:[]
} //初始化数据 reducers可以接收state 但是不能修改state

export default (state = defaultState,action) =>{
  //state是上一个store中存储的数据，action是用户发过来的操作请求
  //使用纯函数，不要对接收的参数直接进行修改
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}

