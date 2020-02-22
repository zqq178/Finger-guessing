Page({

  /**
   * 页面的初始数据
   */
  data: {
    'flg':true,
    'total':0,
    "info":"",
    "timer":'',
    "btnstat": true,
    "img": " ",
    "img1": "../../image/wenhao.png",
    "picarr": [
      "../../image/jiandao.png",
      "../../image/shitou.png",
      "../../image/bu.png",
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  let that = this;
  that.data.timer=setInterval(function(){
    var n1 = Math.floor(Math.random() * 3);
   
  that.setData({
    "img": that.data.picarr[n1],
    'btnstat': true
  });

  }, 20);
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
    
  },
  bog1: function () {

    if(this.data.flg == false){
      return false;
    }   
 
    let curnum = this.data.total;
    let pc = this.data.img;

    if (pc == '../../image/bu.png')
        {
      curnum++;
      this.setData({
        "total": curnum,
        "info": "你赢了",
      })
    }
    else if (pc == '../../image/jiandao.png')
      {
      this.setData({
        "info": "平局",
      })
    }
    else if (pc == '../../image/shitou.png')
    {
      this.setData({
        "info": "你输了",
      })
    }

    this.setData({
      'img1': '../../image/jiandao.png',
    });

      //清除定时器
      clearInterval(this.data.timer);
      this.setData({
        "btnstat": false, //按钮状态
        "flg":false
      });
      
    },
  
  bog2: function () {

    if (this.data.flg == false) {
      return false;
    }

    let curnum = this.data.total;
    let pc = this.data.img;
    
    if (pc == '../../image/jiandao.png')
    {
      curnum++;
      this.setData({
        "total": curnum,
        "info": "你赢了",
      })
    }

    else if (pc == '../../image/shitou.png')
     {
      this.setData({
        "info": "平局",
      })
    }

    else if (pc == '../../image/bu.png'){
      this.setData({
        "info": "你输了",
      })
    }

    this.setData({
      'img1': '../../image/shitou.png',
    });
    //清除定时器
    clearInterval(this.data.timer);
    this.setData({
      "flg":false,
      "btnstat": false //按钮状态
    });
  },
  bog3: function () {

    if (this.data.flg == false) {
      return false;
    }

    let curnum = this.data.total;
    let pc = this.data.img;
   
    if (pc == '../../image/shitou.png')
      {
      curnum++;
      this.setData({
        "total": curnum,
        "info": "你赢了",
      })
    }
    else if (pc == '../../image/bu.png')
       {
      this.setData({
        "info": "平局",
      })
    }
    else if (pc == '../../image/jiandao.png'){
      this.setData({
        "info": "你输了",
      })
    }

    
    this.setData({
      'img1': '../../image/bu.png',
    });
    //清除定时器
    clearInterval(this.data.timer);
    this.setData({
      "flg":false,
      "btnstat": false //按钮状态
    });
  },
  bog4: function () {
    let that = this;
    that.data.timer = setInterval(function () {
      var n1 = Math.floor(Math.random() * 3);

      that.setData({
        "flg":true,
        "img": that.data.picarr[n1],
        'btnstat': true,
        "img1": '../../image/wenhao.png',
        "info":"",
      });

    }, 20);
    },
    bog5:function (){
      this.setData({
        "total":0
      })
    }
})
