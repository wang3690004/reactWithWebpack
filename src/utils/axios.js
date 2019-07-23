import axios from 'axios'

let axiosinstance = axios.create({
  baseURL:'/ecnw-web',
  timeout:7000
});

axiosinstance.interceptors.request.use(
  (config)=>{
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  },
  (err)=>{
    console.log(err)
    return Promise.reject(err)
  }
) //添加请求前的拦截，后面如果要用到token 应该在添加其他代码

axiosinstance.interceptors.response.use(
  (res)=>{
    if(res.data.statusCode === 401){
      alert('无权限，重新登录')
      window.location.href = '/login'
      return Promise.reject()
    }
    return res
  },
   (err)=>{
     switch(err&&err.response && err.response.status){
       case 400:
         err.message = '请求错误'
         break
       case 401:
         err.message = '未授权'
         break
       case 403:
         err.message = '拒绝访问'
         break
       case 404:
         err.message = '请求地址错误'
         break
       case 500:
         err.message = '服务器内部错误'
         break
       case 501:
         err.message = '服务未实现'
         break
       case 502:
         err.message = '网关错误'
         break
       case 503:
         err.message = '服务不可用'
         break
       case 504:
         err.message = '网关超时'
         break
         default:    
     }
     return Promise.reject(err)
   }
)
export default axiosinstance