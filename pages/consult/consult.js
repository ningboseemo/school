// pages/consult/consult.js
Page({
  data:{
    class:['flex-item-shift1','flex-item-shift2','flex-item-shift3']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  shift:function(){
    var that = this;
    if(this.data.class[0]){
      that.setData({
      class:['','','']
    })
    }else{
      that.setData({
       class:['flex-item-shift1','flex-item-shift2','flex-item-shift3']
    })
    }
    
  }
})