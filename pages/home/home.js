// pages/home/home.js
import {getBanners,getGoods} from '../network/home.js'
Page({
  data: {
   banners:[],
   recommends:[],
   goods:{
     'pop':{
      page:0,
      list:[]
     },
     'new': {
       page: 0,
       list: []
     },
     'sell':{
       page: 0,
       list: []
     }
   },
   index:0,
   currentType:'pop',
   topPosition: 0,
   showBackTop: false,
   offsetTop:0,
   fixed:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     getBanners().then(res=>{
         const banners = res.data.data.banner.list
         const recommend = res.data.data.recommend.list
         this.setData({
         banners:banners,
         recommends:recommend
      })
     })
     this.getProduct('pop')
     this.getProduct('new')
     this.getProduct('sell')
  },
  getProduct(type) {
    // 1.获取数据对应的页码
    const page = this.data.goods[type].page +1;

    // 2.请求数据
    getGoods(type, page).then(res => {
      // 1.取出数据
      const list = res.data.data.list;

      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
    })
  },
  
  activeIndex(event){
    const index = event.detail.index
    let currentType = ''
    switch(index){
      case 0:
        currentType = 'pop'
      break;
      case 1:
        currentType = 'new'
      break;
      case 2:
        currentType = 'sell'
      break;
    }
    this.setData({
      currentType:currentType,
    })
  },
  finishLoad() {
    wx.createSelectorQuery().select('#control').boundingClientRect(rect =>{
      this.data.offsetTop = rect.top
    }).exec()
    
  },
  scrollPosition(e) {
    // 1.获取滚动的顶部
    const position = e.detail.scrollTop;
    const offsetTop = this.data.offsetTop
    // 2.设置是否显示
    this.setData({
      showBackTop: position > 800,
      fixed: position>offsetTop
    })
    },
  backtop() {
    // wx.pageScrollTo({
    //   scrollTop: 0,
    //   duration: 0
    // })
    this.setData({
      showBackTop: false,
      topPosition: 0,
      
      // tabControlTop: 0
    })
  },
  loadMore(){
    const type = this.data.currentType
    this.getProduct(type)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})