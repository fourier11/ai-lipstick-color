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

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    originFilePreview: false,
    buttonDisable: true,
    originFilePath: ''
  },

  onLoad() {},

  chooseImage() {
    const self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])
        const filePath = res.tempFilePaths[0]
        wx.getFileSystemManager().readFile({
          filePath: filePath,
          success: buffer => {
            console.log('buffer.data: ' + buffer.data)
            //这里是 云函数调用方法
            wx.cloud.callFunction({
              name: 'checkContent',
              data: {
                value: buffer.data
              },
              success(json) {
                console.log('result: ' + json)
                if (json.result.errCode == 87014) {
                  wx.showToast({
                    title: '图片含有违法违规内容,不可以进行口红试色或卡通化',
                    icon: 'none'
                  });
                  self.setData({
                    originFilePreview: true,
                    buttonDisable: true,
                    originFilePath: filePath
                  })
                } else {
                  wx.setStorageSync('filePath', filePath)
                  self.setData({
                    originFilePreview: true,
                    buttonDisable: false,
                    originFilePath: filePath
                  })
                }
              },
              fail(json) {
                console.log(json)
              }
            })
          }
        })
      },
      fail({
        errMsg
      }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },

  toEdit() {
    wx.navigateTo({
        url: "/pages/edit/edit",
    })
  },

  /**
 * 对图片进行审核
 */
  checkPicture() {
    var that = this
  },

  onHide() {
    this.setData({
      originFilePreview: false,
      buttonDisable: true,
      originFilePath: ''
    })
  }
})