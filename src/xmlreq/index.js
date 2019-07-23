// import axios from 'axios'  这个时候需要设置一个alias来取全局变量
export function changeVlan(params={}){
  return axios({
    method:'post',
    url:'/pnet/changeVlan',
    data:params
  })
}