//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{id:1,img_url:"../../images/b1.jpg"},
      { id: 2, img_url: "../../images/b2.jpg" },
      { id: 3, img_url: "../../images/b3.jpg" },],

  cakelist: [
    { id: 1, img_url:'../../images/tianp2.jpg',name:"精品甜品系列1",price:50,promotion:true},
    { id: 2, img_url: '../../images/tianp1.jpg', name: "精品甜品系列2", price: 80, promotion: false }, 
    { id: 3, img_url: '../../images/tianp4.jpg', name: "精品甜品系列3", price: 150, promotion: true }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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