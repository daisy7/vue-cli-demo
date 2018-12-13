'use strict'
import axios from '@/axios'
import Qs from 'qs'

const ERR_CODE = 0
const request = async (url, params = {}, type = 'post', ) => {
    try {
        if (type === 'get') {
            let response = await axios.get(url, { params: params })
            if (response.data.code === ERR_CODE)
                return response.data
        }
        else if (type === 'post') {
            let params = Qs.stringify(params)
            let response = await axios.put(url, params)
            if (response.data.code === ERR_CODE)
                return response.data
        }
        else if (type === 'put') {
            let params = Qs.stringify(params)
            let response = await axios.put(url, params)
            if (response.data.code === ERR_CODE)
                return response.data
        }
        else if (type === 'delete') {
            let response = await axios.delete(url)
            if (response.data.code === ERR_CODE)
                return response.data
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default request