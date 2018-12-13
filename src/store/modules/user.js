import { login } from '@/tools/request'
import { setSessionStorage, getSessionStorage } from '@/tools/mixin'

export default {
    state: {
        userInfo: null, //用户信息数据
    },
    getters: {
        userInfo: state => {
            if (!state.userInfo)
                return getSessionStorage('user')
            return state.userInfo
        }
    },
    mutations: {
        set_userinfo(state, userInfo) {
            state.userInfo = userInfo
            setSessionStorage('user', userInfo)
        },
    },
    actions: {
        async Login({ commit, state }, params) {
            let res = await login(params)
            commit('set_userinfo', { username: params.username, token: res.data })
            return res
        }
    }
}