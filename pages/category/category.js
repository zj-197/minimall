// pages/category/category.js
import {getCategoryData,
        getSubCategory,
        getCategoryDetail
      } from '../network/category.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     titleList:[],
     index:0,
     //数据结构（核心难点）
     categoryData:{
     categorySub:[],
     categorytype:[],
   },
    currentIndex: 0,
    currentType: 'pop',
    isShow:false,
    offsetTop:0,
    showBackTop:false,
    backtop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory()
    
  },
  currentIndex(e){
    const currentType= this.data.currentType
    const index = e.detail.index
    this.setData({
      index:index
    })
    this._getSubCategory(index)
    this._getCategoryDetail(index)

  },

  activeIndex(e) {
    const index = e.detail.index;
    console.log(index)
    let currentType=''
    switch(index){
      case 0:
        currentType = 'pop'
      break
      case 1:
        currentType = 'new'
      break
      case 2:
        currentType = 'sell'
      break

    }
    this.setData({
      currentIndex:index,
      currentType: currentType
    })
  },
    //初始化数据，建立数据结构（核心）
    //ps：所谓初始化也就是如何去接收数据，好让我们能够去使用
   getCategory(){
     getCategoryData().then(res => {
       console.log(res)
       const titleList = res.data.data.category.list
       const categoryData={}
       for (let i = 0; i < titleList.length; i++){
           categoryData[i] = {
             categorySub: [],
             categortype: {
               'pop': [],
               'new': [],
               'sell': []
             }
         }
        }
       this.setData({
         titleList: titleList,
         categoryData:categoryData
       })
       this._getSubCategory(0)
       this._getCategoryDetail(0)
     })
   },
   _getSubCategory(index){
     const titleList = this.data.titleList
     const categoryData = this.data.categoryData
     getSubCategory(titleList[index].maitKey).then(res=>{
       categoryData[index].categorySub = res.data.data.list
       this.setData({
         categoryData: categoryData
       })
     })
   },
   _getCategoryDetail(index){
     const titleList = this.data.titleList
     const categoryData = this.data.categoryData
     getCategoryDetail(titleList[index].miniWallkey,'pop')
     .then(res=>{
       categoryData[index].categortype['pop'] = res.data
      console.log(res)
       this.setData({
         categoryData: categoryData
       })
     })

       getCategoryDetail(titleList[index].miniWallkey, 'new')
       .then(res => {
       categoryData[index].categortype['new'] = res.data
       console.log(res)
       this.setData({
         categoryData: categoryData
       })
     })

     getCategoryDetail(titleList[index].miniWallkey, 'pop')
     .then(res => {
       categoryData[index].categortype['sell'] = res.data
       console.log(res)
       this.setData({
         categoryData: categoryData
       })
     })
         
   },

  finishLoad() {
    wx.createSelectorQuery().select('.bar').boundingClientRect((rect) => {
      this.setData({
        offsetTop: rect.top
      })
    }).exec()

  },
  scrollPosition(e) {
    // 1.获取滚动的顶部
    const position = e.detail.scrollTop;
    const offsetTop = this.data.offsetTop
    // 2.设置是否显示
    this.setData({
      showBackTop: position > 1000,
      isShow: position > offsetTop
    })
  },
   backtop(){
    this.setData({
      backtop:0
    })
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