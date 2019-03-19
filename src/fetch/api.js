// import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import router from '../router'
import store from 'vuex'
// import * as types from '../store/types'

// Vue.prototype.axios = axios
// axios 配置
axios.defaults.timeout = 60000 * 3
axios.defaults.withCredentials = false

// POST传参序列化
axios.interceptors.request.use((config) => {
  // let oldData = config.data;
  if (store.state.user.token) {
    if (!config.data) {
      config.data = {}
    }
    // config.headers["Set-Cookie"] = "token:"+store.state.user.token;
  }
  if (config.method === 'post') {
    if (!config.headers['Content-Type']) { config.data = qs.stringify(config.data) } else { config.data = JSON.stringify(config.data) }
  }
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return config
}, (error) => {
  console.log('请求网络异常')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  let filename = res.headers['filename'] || null
  if (filename) {
    return {
      data: res.data,
      filename: filename
    }
  } else {
    let response = res.data
    if (parseInt(response.errcode) === 0) {
      return res
    } else if (parseInt(response.errcode) === 304 && this.$route.path !== 'login') {
      if (!router.currentRoute.params) {
        router.push({
          name: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }
    } else {
      return Promise.reject(response)
    }
  }
}, (error) => {
  console.log('返回数据网络异常')
  if (error.response) {
    switch (error.response.status) {
      case 404:
        // 后台返回的404
        router.push({
          name: '404'
          // name: 'login'
        })
        break
      case 403:
        router.push({
          name: '403'
        })
    }
  }
  return Promise.reject(error)
})

export function fetch (url, params, headers) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, headers).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetch_json (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    }}).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function dowload_json (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'arraybuffer'}).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}