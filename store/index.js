export const state = {
    token:"123"
}

export const mutations = {
    setToken(state,token){
        state.token = token;
    }
}

export const actions = { 
    // 服务端生命周期全局的，刷新任何页面就会执行
    nuxtServerInit(store, context) { // vuex上下文  nuxt上下文
        console.log("1、服务端生命周期 nuxtServerInit");
        // 这里最早，可以进行获取token操作
        store.commit("setToken",'new token')
        // console.log(store)
    }
}