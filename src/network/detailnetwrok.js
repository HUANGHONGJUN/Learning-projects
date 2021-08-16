import { request } from './request'

export function getdetail(iid) {
   return request({
    url:'/detail',
    params:{
        iid
    }
   })
   
   
}

//通过es6的类的方式来拿到各种单个数据
export class Goods{
    constructor(itemInfo,columns,service){
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.Price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = service
    }
}

//ES6使用类
class aa{
    //构造器
    constructor(name,age){
       this.name = name;
        this.age = age;
    }
}
const p = new aa('黄',18)
console.log(p.name);