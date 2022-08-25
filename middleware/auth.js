export default function ({ store, route, redirect, params, query, req, res }) {
    console.log("2-1、全局路由中间件 middleawre auth");
    // 可以进行
    if(!store.state.token){
        redirect('/login')
    }
}