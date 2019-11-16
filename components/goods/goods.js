// pages/home/childcpn/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   product:{
     type:Array,
     value:[]
   }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   goDetail(e){
     const iid = e.currentTarget.dataset.iid
     wx.navigateTo({
       url: '/pages/detail/detail?iid=' + iid,
     })
   }
  }
})
