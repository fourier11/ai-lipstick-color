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

const cloud = require('wx-server-sdk');
cloud.init();
exports.main = async (event, context) => {
  console.log(event.txt);
  const { value, txt } = event;
  try {
    let msgR = false;
    let imageR = false;
    //检查 文字内容是否违规
    if (txt) {
      msgR = await cloud.openapi.security.msgSecCheck({
        content: txt
      })
    }
    //检查 图片内容是否违规
    if (value) {
      imageR = await cloud.openapi.security.imgSecCheck({
        media: {
          header: { 'Content-Type': 'application/octet-stream' },
          contentType: 'image/png',
          value: Buffer.from(value)
        }
      })
    }
    return {
      msgR,   //内容检查返回值
      imageR   //图片检查返回值
    };
  } catch (err) {
    // 错误处理
    // err.errCode !== 0
    return err
  }
}