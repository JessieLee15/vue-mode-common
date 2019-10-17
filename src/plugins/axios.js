"use strict";

import Vue from 'vue';
import axios from "axios";
import vm from '@/main'
import QS from 'qs';

/**
 * axios使用规范：： 原则： 使用时只关心并处理resolve（状态码正确，且ret为0）； 其他异常公共处理，但是可以捕获（reject）
 * 通用拦截说明：
 *  1. request异常： 直接抛出reject，参数为整个http response
 *  2. response异常： 
 *    1. code异常：关闭全局fsLoading； 错误提示response.msg || '请求错误！请稍后重试'； 抛出reject，参数为整个http response
 *    2. ret异常：闭全局fsLoading；
 *      1. [50001, 100021]： alert提示response.data.msg || '登陆超时！请重新登陆'； 跳转登陆页面； cookie删除：zone_id； 抛出reject，参数为整个response.data
 *      2. -20000000: confirm:response.data.msg || "为了您的账号安全，请及时修改密码";  抛出reject，参数为整个response.data
 *      3. 其他非0: 错误提示response.data.msg ;  抛出reject，参数为整个response.data
 *  
 */

axios.defaults.timeout = 5000;
//axios.defaults.baseURL ='http://www.baidu.com'; //填写域名

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.withCredentials = true
    config.headers = {
      // "withCredentials":true,
      // "xhrFields": {
      //   "withCredentials": true
      // },
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  // console.log('response:::', response)
  if (response.data.ret === 0) { //首次登陆，修改密码
    return response.data;
  } else if ([50001, 100021].indexOf(response.data.ret) > -1) { //掉登录
    setTimeout(() => {
      Vue.prototype.$alert(response.data.msg || '登陆超时！请重新登陆', {
        callback: () => {
          vm.$router.replace({
            path: '/login'
          })
        }
      });
    }, 0);
    return Promise.resolve(response.data);
  } else if (response.data.ret === -20000000) { //提示修改密码
    vm.$store.state.fsLoading && vm.$store.state.fsLoading.close();
    Vue.prototype.$confirm(response.data.msg || "为了您的账号安全，请及时修改密码", {
      callback: (action) => {
        if (action == 'confirm') {
          setTimeout(() => {
            vm.$router.replace({
              path: '/pwd/modify' //TODO: replace
            });
          }, 0);
        }
        return Promise.resolve(response.data)
      }
    });
  } else {
    vm.$store.state.fsLoading && vm.$store.state.fsLoading.close();
    setTimeout(() => {
      Vue.prototype.$message.error(response.data.msg || '网络错误');
    }, 0);
    return Promise.resolve(response.data)
  }
}, err => {
  //统一处理 http错误
  setTimeout(() => {
    vm.$store.state.fsLoading && vm.$store.state.fsLoading.close();
    Vue.prototype.$message.error(err.msg || '请求错误！请稍后重试');
  }, 0);
  return Promise.resolve(err)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(data))
      .then(response => {
        if (response.ret == 0) {
          resolve(response);
        } else {
          reject(response);
        }
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

export default {
  fetch,
  post
}