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
        console.log("服务端生命周期 1、nuxtServerInit");
        store.commit("setToken",'nuxtServerInit updata new token')
        console.log(store)
    }
}