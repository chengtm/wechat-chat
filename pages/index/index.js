//index.js

var websocket = require('../../utils/websocket.js');


//获取应用实例
var app = getApp()
    
var message = '';

var text = '';

var user = {};

Page({
  data: {
    message : '',
    text : text,
    message_focus : true
  },
  bindChange: function(e) {
        message = e.detail.value
  },
  //事件处理函数
  add: function(e) {
    if(message){
      websocket.send(user.nickName +" : "+ message);
    }else{
      wx.showToast({
        title: '发送内容不能为空',
        icon: 'none',
        duration: 1000,
        mask: false
      })
    }
   // 清空对话框
   message = ''
   this.setData({
     message: '',
     message_focus: true
   })
  },
  
  onLoad: function () {
    
    var that = this


    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      user = userInfo;

      websocket.connect(user, function(res) {
        text = res.data +"\n" + text;
        that.setData({
          text:text
        });
      })
    })
  }
})
