// pages/category/childcpn/titleList/titleList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   isActive:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentType(e){
    const index = e.currentTarget.dataset.index
    this.data.isActive = index
     this.triggerEvent('currentIndex',{index:index})
    this.setData({
      isActive:index
    })
   },

  }
})
