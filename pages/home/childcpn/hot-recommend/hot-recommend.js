// pages/home/childcpn/hot-recommend/hot-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   flag:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    finishLoad(){
      if(this.data.flag){
        this.triggerEvent('finishLoad')
        this.data.flag = false
        console.log('sss')
      }
    }
  }
})
