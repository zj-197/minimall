// pages/home/childcpn/control-bar/control-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   controltext:{
     type:Array,
     value:[]
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
   currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
  activeitem(event){
    const dataset = event.target.dataset
    const index = dataset.index
    const offsetTop = event.target.offsetTop
    console.log(event)
    this.triggerEvent('activeIndex',{index:index,offsetTop:offsetTop})
    this.setData({
      currentIndex: index
    })
  }
  }
})
