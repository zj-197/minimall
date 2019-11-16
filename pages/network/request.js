import {
  baseURL,
  timeout
} from './config.js'
export default function request(options){
  wx.showLoading({
    title: '数据加载中ing',
  })
   return new Promise((resolve, reject)=>{
     const url = baseURL + options.url
     const data = options.data || null
     const method = options.method || 'get'
     wx.request({
       url: url,
       data: data,
       method: method,
       timeout: timeout,
       success:resolve,
       fail:reject,
       complete: res => {
         wx.hideLoading()
       }
   })
  })
  
}