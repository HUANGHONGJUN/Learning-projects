import axios from 'axios'
//config 就是一些url params  Headers
export function request(config){
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 8000,
    })
    //请求前拦截
    instance.interceptors.request.use(config =>{
        return config
    },err=>{
        console.log(err);
    })
    //响应栏接
    instance.interceptors.response.use(
        res => {
          return res.data;
        },
        err => {
          console.log(err);
        }
      );
      
    return instance(config)
}