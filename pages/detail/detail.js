// pages/detail/detail.js
const app = getApp()
import {getDetail,getRecommend} from '../network/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:null,
    topImages:[],
    shopDesc:{},
    shopInfo:{},
    skus:[],
    descd:'',
    itemRules:[],
    itemInfo:[],
    rate:[],
    recommend:[],
    showBackTop:false,
    topPosition:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
    this.getShopDetail()
    this.getRecommends()
  },
  getShopDetail(){
    getDetail(this.data.iid).then(res => {
      console.log(res)
      const result = res.data.result
    const  topImages = result.itemInfo.topImages
    const shopDesc={}
    const shopInfo={}
    shopDesc.columns = result.columns
    shopDesc.price = result.itemInfo.price
    shopDesc.discountDesc = result.itemInfo.discountDesc
    shopDesc.service = result.shopInfo.services
    shopDesc.title = result.itemInfo.title
    shopDesc.lowPrice = result.itemInfo.lowPrice
    
      shopInfo.cGoods = result.shopInfo.cGoods
      shopInfo.cSells = result.shopInfo.cSells
      shopInfo.name = result.shopInfo.name
      shopInfo.logo = result.shopInfo.shopLogo
      shopInfo.score = result.shopInfo.score
     const descd = result.itemInfo.desc
     const skus = result.detailInfo.detailImage[0].list
     const itemRules = result.itemParams.rule.tables[0]
     const itemInfo = result.itemParams.info.set
     const rate = result.rate.list
     
      this.setData({
        topImages: topImages,
        shopDesc:shopDesc,
        shopInfo:shopInfo,
        descd: descd,
        skus:skus,
        itemInfo:itemInfo,
        itemRules:itemRules,
        rate:rate
      })
    })
  },
  scrollPosition(e){
    const position = e.detail.scrollTop;
    // 2.设置是否显示
    this.setData({
      showBackTop: position > 800,
  })
  },
  isShow(){
   this.setData({
     topPosition:0
   })
  },
  getRecommends(){
    getRecommend().then(res=>{
      const recommend = res.data.data.list
      this.setData({
        recommend:recommend
      })
    })
  },
  addToCart(){
   const obj={}
   obj.title = this.data.shopDesc.title
   obj.desc = this.data.descd;
   obj.iid = this.data.iid;
   obj.imageURL = this.data.topImages[0];
    obj.price = this.data.shopDesc.lowPrice
   app.addToCart(obj)
    //加入成功提示
    wx.showToast({
      title: '加入购物车成功',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
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