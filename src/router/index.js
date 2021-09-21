import Vue from 'vue'
import VueRouter from 'vue-router'

const home=()=>import("../views/home/home.vue")
const cart=()=>import("../views/cart/cart.vue")
const category=()=>import("../views/category/category.vue")
const profile=()=>import("../views/profile/profile.vue")
const detail=()=>import("../views/detail/detail.vue")

Vue.use(VueRouter)

const routes=[
    {
        path:"",
        //重定向
        redirect:"/home"
    },
       {
           path:"/home",
           component:home
       },
       {
        path:"/cart",
        component:cart
        },
        {
            path:"/category",
            component:category
        },
        {
            path:"/profile",
            component:profile
        },
        {
            //动态路由
            path:'/detail/:iid',
            name:'detail',
            component:detail
        }

       
]

const router = new VueRouter({
    routes
})

export default router