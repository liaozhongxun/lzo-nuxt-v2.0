// store 下 index 之外的文件，nuxt会自动认为是 modules 下的子模块

export const state = {
    moduleStateData:"moduleStateData"
}

export const mutations = {
    func(state){
        state.moduleStateData = "funcChange"
    }
}