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

var popular_data = [
  {
    "brand": "圣罗兰",
    "serie": "莹亮纯魅唇膏",
    "color": "#DC4B41",
    "id": "14",
    "name": "一见倾心"
  },
  {
    "brand": "圣罗兰",
    "serie": "纯口红",
    "id": "19",
    "color": "#B13C79",
    "name": "玫红色"
  },
  {
    "brand": "香奈儿可可小姐",
    "serie": "唇膏水亮",
    "id": "122",
    "color": "#EA4D4A",
    "name": "CORAIL"
  },
  {
    "brand": "圣罗兰",
    "serie": "纯口红",
    "id": "52",
    "color": "#EA4E59",
    "name": "星星色"
  },
  {
    "brand": "圣罗兰",
    "serie": "莹亮纯魅美唇膏",
    "id": "11",
    "color": "#D51768",
    "name": "玫色游戏"
  },
  {
    "brand": "香奈儿可可小姐",
    "serie": "唇膏水亮",
    "id": "69",
    "color": "#F17365",
    "name": "传情"
  },
]

var lipsticks_data = [
  {
    "name": "圣罗兰",
    "seriesnum": 3,
    "series": [
      {
        "name": "莹亮纯魅唇膏",
        "lipsticks": [
          {
            "color": "#D62352",
            "id": "49",
            "name": "撩骚"
          },
          {
            "color": "#DC4B41",
            "id": "14",
            "name": "一见倾心"
          },
          {
            "color": "#B22146",
            "id": "05",
            "name": "浮生若梦"
          },
          {
            "color": "#A25356",
            "id": "08",
            "name": "纯真梦幻"
          },
          {
            "color": "#DF3443",
            "id": "12",
            "name": "红粉派对"
          }
        ]
      },
      {
        "name": "纯口红",
        "lipsticks": [
          {
            "id": "19",
            "color": "#B13C79",
            "name": "玫红色"
          },
          {
            "id": "13",
            "color": "#BB1813",
            "name": "正橘色"
          },
          {
            "id": "52",
            "color": "#EA4E59",
            "name": "星星色"
          },
          {
            "id": "01",
            "color": "#B8122B",
            "name": "正红色"
          },
          {
            "id": "17",
            "color": "#F75E70",
            "name": "嫣粉纱丽"
          }
        ]
      },
      {
        "name": "莹亮纯魅美唇膏",
        "lipsticks": [
          {
            "id": "11",
            "color": "#D51768",
            "name": "玫色游戏"
          },
          {
            "id": "3",
            "color": "#F18885",
            "name": "玫瑰轻语"
          },
          {
            "id": "8",
            "color": "#E52322",
            "name": "橙色放纵"
          },
          {
            "id": "4",
            "color": "#DA0140",
            "name": "桃红欲望"
          }
        ]
      }
    ]
  },
  {
    "name": "香奈儿可可小姐",
    "seriesnum": 2,
    "series": [
      {
        "name": "唇膏水亮",
        "lipsticks": [
          {
            "id": "69",
            "color": "#F17365",
            "name": "传情"
          },
          {
            "id": "46",
            "color": "#E87268",
            "name": "自由"
          },
          {
            "id": "122",
            "color": "#EA4D4A",
            "name": "CORAIL RADIEUX"
          },
          {
            "id": "97",
            "color": "#D53D49",
            "name": "洒脱"
          }
        ]
      },
      {
        "name": "炫亮魅力唇膏",
        "lipsticks": [
          {
            "id": "90",
            "color": "#FC6E48",
            "name": "活泼"
          },
          {
            "id": "96",
            "color": "#FA421C",
            "name": "古灵精怪"
          },
          {
            "id": "182",
            "color": "#E02E20",
            "name": "VIBRANTE"
          },
          {
            "id": "152",
            "color": "#E82F2C",
            "name": "隐约"
          },
          {
            "id": "172",
            "color": "#E40021",
            "name": "ROUGE REBELLE"
          }
        ]
      }
    ]
  }
]

var lipsticks_dict={
  "11": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅美唇膏",
    "id": "11",
    "color": "#D51768",
    "name": "玫色游戏"
  },
  "3": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅美唇膏",
    "id": "3",
    "color": "#F18885",
    "name": "玫瑰轻语"
  },
  "8": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅美唇膏",
    "id": "8",
    "color": "#E52322",
    "name": "橙色放纵"
  },
  "4": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅美唇膏",
    "id": "4",
    "color": "#DA0140",
    "name": "桃红欲望"
  },
  "19": {
    "brand": "圣罗兰",
    "series": "纯口红",
    "id": "19",
    "color": "#B13C79",
    "name": "玫红色"
  },
  "13": {
    "brand": "圣罗兰",
    "series": "纯口红",
    "id": "13",
    "color": "#BB1813",
    "name": "正橘色"
  },
  "52": {
    "brand": "圣罗兰",
    "series": "纯口红",
    "id": "52",
    "color": "#EA4E59",
    "name": "星星色"
  },
  "01": {
    "brand": "圣罗兰",
    "series": "纯口红",
    "id": "01",
    "color": "#B8122B",
    "name": "正红色"
  },
  "17": {
    "brand": "圣罗兰",
    "series": "纯口红",
    "id": "17",
    "color": "#F75E70",
    "name": "嫣粉纱丽"
  },
  "49": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅唇膏",
    "color": "#D62352",
    "id": "49",
    "name": "撩骚"
  },
  "14": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅唇膏",
    "color": "#DC4B41",
    "id": "14",
    "name": "一见倾心"
  },
  "05": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅唇膏",
    "color": "#B22146",
    "id": "05",
    "name": "浮生若梦"
  },
  "08": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅唇膏",
    "color": "#A25356",
    "id": "08",
    "name": "纯真梦幻"
  },
  "12": {
    "brand": "圣罗兰",
    "series": "莹亮纯魅唇膏",
    "color": "#DF3443",
    "id": "12",
    "name": "红粉派对"
  },
  "69": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "69",
    "color": "#F17365",
    "name": "传情"
  },
  "46": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "46",
    "color": "#E87268",
    "name": "自由"
  },
  "122": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "122",
    "color": "#EA4D4A",
    "name": "CORAIL RADIEUX"
  },
  "97": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "97",
    "color": "#D53D49",
    "name": "洒脱"
  },
  "90": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "90",
    "color": "#FC6E48",
    "name": "活泼"
  },
  "96": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "96",
    "color": "#FA421C",
    "name": "古灵精怪"
  },
  "182": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "182",
    "color": "#E02E20",
    "name": "VIBRANTE"
  },
  "152": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "152",
    "color": "#E82F2C",
    "name": "隐约"
  },
  "172": {
    "brand": "香奈儿可可小姐",
    "series": "唇膏水亮",
    "id": "172",
    "color": "#E40021",
    "name": "ROUGE REBELLE"
  }
}

module.exports = {
  popularList: popular_data,
  lipsticksData: lipsticks_data,
  lipsticksDict: lipsticks_dict
}
