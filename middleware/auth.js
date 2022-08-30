export default function ({ store, route, redirect, params, query, req, res }) {
    console.log("2-1、全局路由中间件 middleawre auth");
    // 路由
    console.log(route.name) // vue 中 to 的目标路由对象
    
    // 可以进行, 如果未登录就跳转登录页面
    // nuxtServerInit 没获取的话，mutations 定义gettoken方法，可以 store.commit("gettoken");这样获取

    if(!store.state.token){
        redirect('/login')
    }
}