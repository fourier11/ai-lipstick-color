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

// pages/edit/edit.js
var jsonData = require('../../data/data.js');
var lipsticksDict = jsonData.lipsticksDict

var app = getApp();
var selected = ''

Page({
  data: {
    filePath: '',
    lipstick_cur: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      filePath: wx.getStorageSync('filePath'),
      lipstick_list: app.globalData.lipstick_sh_list,
      lipstick_cur: app.globalData.lipstick_sh_list[0],
      selected: ''
    })
    // console.log(app.globalData)
    // console.log(options.filePath)
    console.log(selected)
    wx.setNavigationBarTitle({
      title: '口红试色'
    })
  },

  /**
   * 添加口红点击方法
   */
  addLipStick() {
    wx.navigateTo({
      url: "/pages/lipstick/lipstick",
    })
  },


  /**
   * 点击口红之后，上传图片替换页面
   */
  clickLipstick(e) {
    var that = this
    var id = e.currentTarget.id
    var path = wx.getStorageSync('filePath')
    var color = lipsticksDict[id].color.substring(1)
    that.setData({
      lipstick_cur: lipsticksDict[id],
      selected: id
    })
    console.log('color is ' + color)
    wx.uploadFile({
      url: 'https://test.s.ads.sohu.com/upload?color=' + color,
      filePath: path,
      name: 'img',
      success (res) {
        const data = JSON.parse(res.data)
        console.log(data.url)
        that.setData({
          filePath: data.url
        })
      },
      fail({ errMsg }) {
        console.log('upload fail, errMsg is', errMsg)
      }
    })
  },

  /**
   * 点击卡通化按钮
   */
  clickCartoonButton() {
    var that = this
    var path = that.data.filePath
    if (path.length === 0) {
      path = wx.getStorageSync('filePath')
      that.cartoonUpload(path)
    } else {
      wx.downloadFile({
        url: that.data.filePath,
        success(res) {
          that.cartoonUpload(res.tempFilePath)
        }
      })
    }
  },

  /**
   * 卡通化上传代码
   */
  cartoonUpload(path) {
    var that = this
    wx.uploadFile({
      url: 'https://test.s.ads.sohu.com/cartoon',
      filePath: path,
      name: 'img',
      success(res) {
        const data = JSON.parse(res.data)
        that.setData({
          filePath: data.url
        })
      },
      fail({ errMsg }) {
        console.log('cartoon upload fail, errMsg is', errMsg)
      }
    })
  },

  /**
   * 预览图片
   */
  previewImage(e) {
    wx.previewImage({
      urls: [this.data.filePath]
    })
  },

  /**
   * 跳转购买链接
   */
  goShopping() {
    var that = this
    console.log("shoppingUrl is " + that.data.lipstick_cur.url)
    wx.setStorage({
      key: 'shoppingUrl',
      data: that.data.lipstick_cur.url
    })
    wx.navigateTo({
      url: '../shop/shop'
    })
  }
})