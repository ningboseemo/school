// pages/teachers/teachers.js
var addTeacherArray = [];
Page({
  data:{
      teacherClassifyList:["全部","财务","税务","法律","其他","财务","税务"],
      activeId:0,
      teacherList:[{
        "teacherId":0,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":true
    },{
        "teacherId":1,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":true
    },{
        "teacherId":2,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":true
    },{
        "teacherId":3,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":false
    },{
        "teacherId":4,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":true
    },{
        "teacherId":5,
        "teacherImg":"../../images/teachers.png",
        "teacherName":"老师姓名",
        "teacherProfession":"权威导师",
        "goodField":"擅长领域、擅长领域、擅长领域、擅长领域",
        "followState":false
    }]
  },
  onLoad:function(options){
    addTeacherArray = this.data.teacherList;
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
  classify:function(e){
    var id = e.currentTarget.dataset.id;
    this.setData({
      "activeId":id
    })
  },
  follow:function(e){
    var id = e.currentTarget.dataset.teacherid;
    this.data.teacherList[id].followState = !this.data.teacherList[id].followState;
    this.setData({
      teacherList:this.data.teacherList
    });
  },
  addteacher:function(){
    this.setData({
      teacherList:this.data.teacherList.concat(addTeacherArray)
    })
  }
})