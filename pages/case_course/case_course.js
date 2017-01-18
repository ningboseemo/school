// pages/courses/courses.js
var coursesArray = [];
var selectedinit = [];
Page({
  data:{
    courseSelectShow:false,
    courseSelectCode:{
      "new":true,
      "peopele":false
    },
    courseSelect:[
      {
        "title":"播放类型",
        "list":["全部","直播","录播"],
        "activeid":-1
      },
      {
        "title":"课程类型",
        "list":["全部","税务","财务","其他"],
        "activeid":-1
      },
      {
        "title":"收费类型",
        "list":["全部","免费","VIP专属"],
        "activeid":-1
      }
    ],
    courses:[{
      "id":"1",
      "courseImg":"../../images/curse_img.jpg",
      "courseCostType":"vip",
      "courseCostTypeText":"VIP",
      "courseTtile":"1课程题目课程题目课程题目课程题目课程题目课程题目",
      "courseStartTime":"2016.11.12 22:30 开播",
      "teacherNames":["老师1/","老师2"],
      "courseType":true,
      "number":"2000人报名"
    },{
      "id":"1",
      "courseImg":"../../images/curse_img.jpg",
      "courseCostType":"free",
      "courseCostTypeText":"免费",
      "courseTtile":"2课程题目课程题目课程题目课程题目课程题目课程题目",
      "courseStartTime":"2016.11.12 22:30 开播",
      "teacherNames":["老师1/","老师2"],
      "courseType":true,
      "number":"2000人报名"
    },{
      "id":"1",
      "courseImg":"../../images/curse_img.jpg",
      "courseCostType":"vip",
      "courseCostTypeText":"VIP",
      "courseTtile":"3课程题目课程题目课程题目课程题目课程题目课程题目",
      "courseStartTime":"2016.11.12 22:30 开播",
      "teacherNames":["老师1/","老师2"],
      "courseType":true,
      "number":"2000人报名"
    },{
      "id":"1",
      "courseImg":"../../images/curse_img.jpg",
      "courseCostType":"free",
      "courseCostTypeText":"免费",
      "courseTtile":"4课程题目课程题目课程题目课程题目课程题目课程题目",
      "courseStartTime":"2016.11.12 22:30 开播",
      "teacherNames":["老师1/","老师2"],
      "courseType":true,
      "number":"2000人报名"
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    coursesArray = this.data.courses;
    selectedinit = this.data.courseSelect;
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
  refresh:function(){
    var that = this;
    coursesArray = this.data.courses.concat(coursesArray);
    this.setData({
      courses:coursesArray
    })
  },
  selectShow:function(){
    var _selectshow = !this.data.courseSelectShow;
    this.setData({
      courseSelectShow:_selectshow
    })
  },
  selected:function(e){
    var selecetId = e.currentTarget.dataset.id;
    var parentId = e.currentTarget.dataset.parent;
    var that = this;
    var selectArray = this.data.courseSelect;
    selectArray[parentId].activeid = selecetId;
    this.setData({
      courseSelect:selectArray
    })
  },
  select_reset:function(){
    this.setData({
      courseSelect:selectedinit
    })
  },
  select_sure:function(){
    this.setData({
      courseSelectShow:false
    })
  },
  selectNew:function(){
    this.setData({
      courseSelectCode:{
      "new":true,
      "people":false
    }
    })
  },
  selectPeople:function(){
    this.setData({
      courseSelectCode:{
      "new":false,
      "people":true
    }
    })
  },
})


/*
"title":
"list":[""],
"activeid":
 */