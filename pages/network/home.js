  import request from './request.js'
  
  export  function getBanners(){
     return request({
       url: '/home/multidata'
     }) 
  }

  export function getGoods(type,page){
    return request({
      url: '/home/data',
      data:{
       type,
       page
      }
    })
  }