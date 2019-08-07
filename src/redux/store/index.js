import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(
  reducer
) //倒像是个初始化的过程初始化reducer ，如果需要使用异步的中间件那么就要在这里初始化
export default store