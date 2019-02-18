import Home from './components/Home.vue';
import GoodsDetail from './components/GoodsDetail.vue';
import Mine from './components/Mine.vue';
import Login from './components/Login.vue';
import Reg from './components/Reg.vue';
import Cart from './components/Cart.vue';

export default [
    {
    path:'/detail/:id',
    component:GoodsDetail
    },
    {
    path: '/home',
    component: Home
}, {
    path: '/cart',
    component: Cart
},{
    path: '/mine',
    component: Mine
}, {
    path:'/login',
    component:Login
},{
    path: '/register',
    component: Reg
},
{
    path: '/',
    redirect: '/home'
}, {
    path: '*',
    redirect: '/home'
}
]
