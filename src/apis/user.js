import axios from '../utils/axios'
export function getUser(){
  return axios({
    method:'post',
    url:'/getmenu'
  })
}