//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    swipers: [
      {"imageUrl":"../../images/swiper1.jpg","text":"标题一"},
      {"imageUrl":"../../images/swiper1.jpg","text":"标题二"},
      {"imageUrl":"../../images/swiper1.jpg","text":"标题三"}
    ],
    CourseCase:{
      "title":"案例大讲堂",
      "url":"../case_course/case_course",
      "courseList":[{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"vip",
        "courseTypeText":"VIP",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目1",
        "courseStartTime":"2016.11.12 22:10 "
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":"2016.11.12 22:10 "
      }]
    },
    directed:{
      "title":"直播",
      "url":"../courses/courses",
      "courseList":[{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"vip",
        "courseTypeText":"VIP",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目1",
        "courseStartTime":"2016.11.12 22:10 "
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":"2016.11.12 22:10 "
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":"2016.11.12 22:10 "
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":"2016.11.12 22:10 "
      }]
    },
    played:{
      "title":"点播",
      "url":"../courses/courses",
      "courseList":[{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"vip",
        "courseTypeText":"VIP",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目1",
        "courseStartTime":""
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":""
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":""
      },{
        "courseImg":"../../images/curse_img.jpg",
        "courseType":"free",
        "courseTypeText":"免费",
        "courseTitle":"课程题目课程题目课程题目课程题目课程题目2",
        "courseStartTime":""
      }]
    },
    teachers:[{
      "teacherPhoto":"../../images/teachers.png",
      "teacherName":"老师名字"
    },{
      "teacherPhoto":"../../images/teachers.png",
      "teacherName":"老师名字"
    },{
      "teacherPhoto":"../../images/teachers.png",
      "teacherName":"老师名字"
    },{
      "teacherPhoto":"../../images/teachers.png",
      "teacherName":"老师名字"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

/*
title:
url:
courseList:[{
  courseImg:
  courseType:
  courseTitle:
  courseStartTime:
}]

 */