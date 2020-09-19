/**
 * Copyright 2020 fourier11
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// pages/lipstick/lipstick.js

var jsonData = require('../../data/data.js');
var lipsticksDict = jsonData.lipsticksDict
var app = getApp();

Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'green'
  },
  onLoad: function (options) {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      popularList: jsonData.popularList,
      lipsticksData: jsonData.lipsticksData,
    });
  },
  chooseLipStick(e) {
    var uId = e.currentTarget.id
    console.log(uId);
    // console.log(lipsticksDict);
    var lipstickInfo = lipsticksDict[uId]
    // console.log(lipstickInfo);
    var idIndex = app.globalData.lipstick_show_dict.indexOf(uId)
    console.log("index:", idIndex)
    // console.log("before:", app.globalData.lipstick_sh_list);
    if (idIndex >= 0){
      console.log("remove: ", idIndex)
      app.globalData.lipstick_sh_list.splice(idIndex, 1)
      app.globalData.lipstick_show_dict.splice(idIndex, 1)
    }

    app.globalData.lipstick_sh_list.splice(0, 0, lipstickInfo)
    app.globalData.lipstick_show_dict.splice(0, 0, uId)
    // console.log("after:", app.globalData.lipstick_sh_list);
    if (app.globalData.lipstick_sh_list.length > 5){
        app.globalData.lipstick_sh_list.pop()
        app.globalData.lipstick_show_dict.pop()
    }

    wx.redirectTo({
      url: "/pages/edit/edit",
    })
  }
})