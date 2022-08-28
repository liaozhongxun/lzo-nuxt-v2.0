export default ( {app} ) => {
    console.log('全局插件 plugin')
    // 插件实现导航守卫
    app.router.beforeEach((to,from,next)=>{
        console.log(`全局插件导航守卫 to ${to.path}`);
        console.log(`全局插件导航守卫 from ${from.path}`);
        next();
    })
}