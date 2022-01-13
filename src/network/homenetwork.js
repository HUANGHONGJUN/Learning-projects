//封装关于home的所有axios请求，以便以后方便修改

import {request} from './request'

export  function getHomeMultidata(){
    return request({
        method:"get",
        url:"/home/multidata"
    })
}

export default function getHomeGoods(type,page) {
    return request({
        url:"/home/data",
        params:{
            type,
            page
        },
    })
}