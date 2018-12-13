'use strict'
import axios from 'axios'
import store from '@/store'

axios.interceptors.request.use(config => {
    const userInfo = store.getters.userInfo;
    if (userInfo) {
        config.headers.common['Authorization'] = 'Bearer ' + userInfo.token;
    }
    return config;
})

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                store.commit('set_userinfo', null)
                router.replace({
                    path: 'Login',
                    query: { redirect: router.currentRoute.fullPath }
                })
        }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

export default axios
