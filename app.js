//app.js
App({
  onLaunch: function () {
  },
  addToCart(obj) {
    // 1.判断是否已经添加进来
    const oldInfo = this.globalData.cartList.find((item) => item.iid === obj.iid)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    cartList:[]
  }
})