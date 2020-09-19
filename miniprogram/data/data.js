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
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173870",
    "name": "约会",
    "color": "#F8657F",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "87"
  },
  {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160990",
    "name": "海盗",
    "color": "#8A010D",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "99"
  },
  {
    "url": "https://www.sephora.cn/product/6825.html?sku=21095",
    "name": "法式红",
    "color": "#E50036",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N306"
  },
  {
    "url": "https://www.sephora.cn/product/6825.html?sku=21088",
    "name": "迷人茶色",
    "color": "#C74A52",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N103"
  },
  {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "迪奥小姐",
    "color": "#E40068",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "047"
  },
  {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "传奇红唇哑光",
    "color": "#CC434D",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "99901"
  }
]

var lipsticks_data = [
  {
    "series": [
      {
        "name": "唇膏水亮",
        "lipsticks": [
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173910",
            "name": "波希米亚",
            "color": "#C12A33",
            "series": "唇膏水亮",
            "brand": "香奈儿可可小姐",
            "id": "91"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173870",
            "name": "约会",
            "color": "#F8657F",
            "series": "唇膏水亮",
            "brand": "香奈儿可可小姐",
            "id": "87"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173550",
            "name": "浪漫爱情",
            "color": "#F14C77",
            "series": "唇膏水亮",
            "brand": "香奈儿可可小姐",
            "id": "55"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173418",
            "name": "ENERGY",
            "color": "#EB2755",
            "series": "唇膏水亮",
            "brand": "香奈儿可可小姐",
            "id": "118"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173620",
            "name": "蒙特卡罗",
            "color": "#E12948",
            "series": "唇膏水亮",
            "brand": "香奈儿可可小姐",
            "id": "62"
          }
        ]
      },
      {
        "name": "炫亮魅力唇膏",
        "lipsticks": [
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160900",
            "name": "活泼",
            "color": "#FC6E48",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "90"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160960",
            "name": "古灵精怪",
            "color": "#FA421C",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "96"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160182",
            "name": "VIBRANTE",
            "color": "#E02E20",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "182"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160152",
            "name": "隐约",
            "color": "#E82F2C",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "152"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160135",
            "name": "谜情",
            "color": "#99413D",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "135"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160990",
            "name": "海盗",
            "color": "#8A010D",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "99"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160910",
            "name": "吸引力",
            "color": "#E45661",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "9101"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160179",
            "name": "LUMINOUS",
            "color": "#ED6160",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "179"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160940",
            "name": "着迷",
            "color": "#FC3E6E",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "94"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160138",
            "name": "激昂",
            "color": "#D93E5E",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "138"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160136",
            "name": "悠扬",
            "color": "#EF4246",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "136"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160930",
            "name": "兴奋",
            "color": "#CD0043",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "93"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160184",
            "name": "INCANTEVOLE",
            "color": "#C80F2E",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "184"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160102",
            "name": "悸动",
            "color": "#B20032",
            "series": "炫亮魅力唇膏",
            "brand": "香奈儿可可小姐",
            "id": "102"
          }
        ]
      },
      {
        "name": "炫亮魅力唇膏丝绒",
        "lipsticks": [
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162510",
            "name": "震撼",
            "color": "#9E333D",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "5133"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162380",
            "name": "迷惑",
            "color": "#892833",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "38"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162630",
            "name": "NIGHTFALL",
            "color": "#802932",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "63"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162420",
            "name": "显眼",
            "color": "#FE697F",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "4201"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162430",
            "name": "亲爱",
            "color": "#FA5059",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "4301"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162460",
            "name": "慧黠",
            "color": "#C92D38",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "4601"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162370",
            "name": "纵情",
            "color": "#C43759",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "37"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162440",
            "name": "歌剧名伶",
            "color": "#F06FA5",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "44"
          },
          {
            "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162500",
            "name": "浪漫幻想",
            "color": "#9F2F56",
            "series": "炫亮魅力唇膏丝绒",
            "brand": "香奈儿可可小姐",
            "id": "50"
          }
        ]
      }
    ],
    "name": "香奈儿可可小姐",
    "imge": "CHANEL.png",
    "seriesnum": 3,
  },
  {
    "series": [
      {
        "name": "高定香榭天鹅绒唇膏（小羊皮）",
        "lipsticks": [
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21088",
            "name": "迷人茶色",
            "color": "#C74A52",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N103"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21090",
            "name": "阳光小麦",
            "color": "#A82A40",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N105"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21091",
            "name": "幻想玫瑰",
            "color": "#F43556",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N202"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21093",
            "name": "樱桃玫瑰",
            "color": "#BE2446",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N204"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21094",
            "name": "加仑玫瑰",
            "color": "#E70060",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N205"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21096",
            "name": "加州红",
            "color": "#F82131",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N304"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21095",
            "name": "法式红",
            "color": "#E50036",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N306"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21097",
            "name": "珊瑚红",
            "color": "#FA054B",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N303"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=21098",
            "name": "芭比红",
            "color": "#FB2C60",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "N302"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=346552",
            "name": "缪斯红",
            "color": "#FA013D",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "305"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=346553",
            "name": "糖果玫瑰",
            "color": "#FA6173",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "201"
          },
          {
            "url": "https://www.sephora.cn/product/6825.html?sku=346555",
            "name": "明艳玫瑰",
            "color": "#F60071",
            "series": "高定香榭天鹅绒唇膏（小羊皮）",
            "brand": "纪梵希",
            "id": "209"
          }
        ]
      },
      {
        "name": "禁忌之吻霓虹唇膏",
        "lipsticks": [
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835560",
            "name": "御姐橘",
            "color": "#BA353C",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "11"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835561",
            "name": "幻想紫",
            "color": "#8B2844",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "7"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835562",
            "name": "暗夜莓",
            "color": "#B12252",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "8"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835563",
            "name": "沉睡红",
            "color": "#DD485B",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "9"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835564",
            "name": "帅T红",
            "color": "#B53D52",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "10"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835565",
            "name": "女巫红",
            "color": "#B9282D",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "1282"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835566",
            "name": "禁忌红",
            "color": "#CA292E",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "1301"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835567",
            "name": "鬼魅红",
            "color": "#CB2D21",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "1401"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835568",
            "name": "夜光橘",
            "color": "#D43A29",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "1501"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835569",
            "name": "潮女红",
            "color": "#DF4541",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "1641"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835570",
            "name": "童话粉",
            "color": "#D35C5E",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "18"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835571",
            "name": "精灵粉",
            "color": "#EC2663",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "2201"
          },
          {
            "url": "https://www.sephora.cn/product/842511.html?sku=835572",
            "name": "魔女粉",
            "color": "#C62E54",
            "series": "禁忌之吻霓虹唇膏",
            "brand": "纪梵希",
            "id": "2301"
          }
        ]
      }
    ],
    "name": "纪梵希",
    "imge": "GIVENCHY.png",
    "seriesnum": 2,
  },
  {
    "series": [
      {
        "name": "魅惑釉唇膏",
        "lipsticks": [
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "鸡尾酒",
            "color": "#EB636B",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "457"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "泡泡堂",
            "color": "#EB5C97",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "487"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "小心计",
            "color": "#E47082",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "550"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "日光浴",
            "color": "#EA5344",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "554"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "购物狂",
            "color": "#E94858",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "564"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "混日子",
            "color": "#C86378",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "577"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "热点",
            "color": "#E74218",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "637"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "生存游戏",
            "color": "#EA5331",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "644"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "人生赢家",
            "color": "#E60860",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "684"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "可乐部",
            "color": "#902216",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "740"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "花蝴蝶",
            "color": "#E51E1B",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "744"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "天生玩家",
            "color": "#95358C",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "794"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "好莱坞大咖",
            "color": "#A01314",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "857"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "红酒",
            "color": "#901A32",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "867"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "给我迪奥",
            "color": "#C4032B",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "877"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
            "name": "野蛮女友",
            "color": "#BB0E63",
            "series": "魅惑釉唇膏",
            "brand": "迪奥",
            "id": "882"
          },
          // {
          //   "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
          //   "name": "黑咖啡",
          //   "color": "#391E1D",
          //   "series": "魅惑釉唇膏",
          //   "brand": "迪奥",
          //   "id": "904"
          // },
          // {
          //   "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
          //   "name": "不羁",
          //   "color": "#602227",
          //   "series": "魅惑釉唇膏",
          //   "brand": "迪奥",
          //   "id": "924"
          // }
        ]
      },
      {
        "name": "烈艳蓝金唇膏",
        "lipsticks": [
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Actrice",
            "color": "#E83F4A",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "028"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "迪奥小姐",
            "color": "#E40068",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "047"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "首映礼",
            "color": "#D36179",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "060"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "微笑正红",
            "color": "#D91820",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "080"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Metallic",
            "color": "#A82628",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "999"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "蒙田灰",
            "color": "#BBC3C2",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "20701"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Osée",
            "color": "#DB7096",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "277"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Panaréa",
            "color": "#EF7C6B",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "343"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Dansante",
            "color": "#E46177",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "351"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Charnelle",
            "color": "#D1546E",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "459"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Feel Good",
            "color": "#E4003E",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "520"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Sillage",
            "color": "#DA4F4E",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "553"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Rose en Dior",
            "color": "#EA5069",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "567"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Pretty Matte",
            "color": "#F08182",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "576"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "狂想",
            "color": "#2E4763",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "602"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Ready",
            "color": "#EA5155",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "642"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Stand Out",
            "color": "#E84617",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "643"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "珊瑚",
            "color": "#ED6C7F",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "652"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Désir",
            "color": "#D0546B",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "663"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Rêvée",
            "color": "#BD5154",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "665"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Culte",
            "color": "#CC4A6B",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "678"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Favorite",
            "color": "#DC002C",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "746"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Panache",
            "color": "#E52F31",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "756"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Rose Harpers",
            "color": "#CF1D59",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "766"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Radiant Matte",
            "color": "#E96C81",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "771"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Classic Matte",
            "color": "#CB7A84",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "772"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Hyde Park",
            "color": "#E1244B",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "775"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Exuberant Matte",
            "color": "#E6699D",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "787"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "痴迷",
            "color": "#96518F",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "789"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Trafalgar",
            "color": "#E0262E",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "844"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Célèbre",
            "color": "#B62631",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "856"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "Strong Matte",
            "color": "#EB5958",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "888"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "奇葩",
            "color": "#86556D",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "962"
          },
          {
            "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
            "name": "传奇红唇哑光",
            "color": "#CC434D",
            "series": "烈艳蓝金唇膏",
            "brand": "迪奥",
            "id": "99901"
          }
        ]
      }
    ],
    "name": "迪奥",
    "imge": "Dior.png",
    "seriesnum": 2,
  },
  {
    "series": [
      {
        "name": "莹亮纯魅唇膏",
        "lipsticks": [
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-001",
            "name": "撩骚",
            "color": "#D62352",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "49"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-002",
            "name": "一见倾心",
            "color": "#DC4B41",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "14"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-008",
            "name": "浮生若梦",
            "color": "#B22146",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "05"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-019",
            "name": "纯真梦幻",
            "color": "#A25356",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "08"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-003",
            "name": "红粉派对",
            "color": "#DF3443",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "12"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-007",
            "name": "珊瑚恋人",
            "color": "#E06C68",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "15"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-011",
            "name": "华丽转身",
            "color": "#842C71",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "19"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-026",
            "name": "唇印",
            "color": "#D13C4F",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "43"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-020",
            "name": "危情禁果",
            "color": "#B71D32",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "04"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-033",
            "name": "糖果女孩",
            "color": "#CD4143",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "1643"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-006",
            "name": "告白",
            "color": "#EC6A70",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "41"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-031",
            "name": "初恋",
            "color": "#EFE9DE",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "42"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-015",
            "name": "拥吻",
            "color": "#C60F2F",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "45"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-018",
            "name": "心跳",
            "color": "#BB6868",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "47"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-034",
            "name": "钟情",
            "color": "#D1121B",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "46"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-035",
            "name": "夜色",
            "color": "#8E243E",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "48"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00031YSL-012",
            "name": "私语",
            "color": "#EE7486",
            "series": "莹亮纯魅唇膏",
            "brand": "圣罗兰",
            "id": "51"
          }
        ]
      },
      {
        "name": "纯口红",
        "lipsticks": [
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-039",
            "name": "玫红色",
            "color": "#B13C79",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "1901"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-038",
            "name": "正橘色",
            "color": "#BB1813",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "13"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-001",
            "name": "星星色",
            "color": "#EA4E59",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "52"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-002",
            "name": "正红色",
            "color": "#B8122B",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "01"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-003",
            "name": "嫣粉纱丽",
            "color": "#F75E70",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "17"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-007",
            "name": "雅紫纱蓉",
            "color": "#CB2276",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "07"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-010",
            "name": "绛紫丝绒",
            "color": "#C27482",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "09"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-026",
            "name": "绯红香缎",
            "color": "#BB444A",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "16"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-021",
            "name": "莹亮裸粉",
            "color": "#E86E9F",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "22"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-011",
            "name": "杏色府绸",
            "color": "#DE6F5C",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "23"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-016",
            "name": "堇色流纱",
            "color": "#CC6D84",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "26"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-013",
            "name": "珊瑚雪纺",
            "color": "#ED695D",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "36"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-014",
            "name": "想你色",
            "color": "#DC4D8D",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "4901"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-033",
            "name": "莹亮珊瑚橙",
            "color": "#FA6C55",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "5155"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-020",
            "name": "橙红织锦",
            "color": "#D9100E",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "56"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-008",
            "name": "珊瑚柚",
            "color": "#CA4061",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "207"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00030YSL-016",
            "name": "纯真玫红",
            "color": "#D24379",
            "series": "纯口红",
            "brand": "圣罗兰",
            "id": "27"
          }
        ]
      },
      {
        "name": "莹亮纯魅美唇膏",
        "lipsticks": [
          {
            "url": "https://www.yslbeautycn.com/item/00199YSL-005",
            "name": "红色触碰",
            "color": "#CC0824",
            "series": "莹亮纯魅美唇膏",
            "brand": "圣罗兰",
            "id": "6"
          },
          {
            "url": "https://www.yslbeautycn.com/item/00199YSL-006",
            "name": "苺色暧昧",
            "color": "#B81D3D",
            "series": "莹亮纯魅美唇膏",
            "brand": "圣罗兰",
            "id": "1281"
          }
        ]
      }
    ],
    "name": "圣罗兰",
    "imge": "YSL.png",
    "seriesnum": 3,
  },
]

var lipsticks_dict = {
  "N304": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21096",
    "name": "加州红",
    "color": "#F82131",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N304"
  },
  "4301": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162430",
    "name": "亲爱",
    "color": "#FA5059",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "4301"
  },
  "N306": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21095",
    "name": "法式红",
    "color": "#E50036",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N306"
  },
  "1301": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835566",
    "name": "禁忌红",
    "color": "#CA292E",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "1301"
  },
  "N303": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21097",
    "name": "珊瑚红",
    "color": "#FA054B",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N303"
  },
  "N302": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21098",
    "name": "芭比红",
    "color": "#FB2C60",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N302"
  },
  "665": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Rêvée",
    "color": "#BD5154",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "665"
  },
  "663": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Désir",
    "color": "#D0546B",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "663"
  },
  "136": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160136",
    "name": "悠扬",
    "color": "#EF4246",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "136"
  },
  "135": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160135",
    "name": "谜情",
    "color": "#99413D",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "135"
  },
  "165": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160165",
    "name": "ÉBLOUISSANTE",
    "color": "#C82C40",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "165"
  },
  "138": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160138",
    "name": "激昂",
    "color": "#D93E5E",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "138"
  },
  "26": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-016",
    "name": "堇色流纱",
    "color": "#CC6D84",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "26"
  },
  "27": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-016",
    "name": "纯真玫红",
    "color": "#D24379",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "27"
  },
  "22": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-021",
    "name": "莹亮裸粉",
    "color": "#E86E9F",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "22"
  },
  "23": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-011",
    "name": "杏色府绸",
    "color": "#DE6F5C",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "23"
  },
  "4901": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-014",
    "name": "想你色",
    "color": "#DC4D8D",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "4901"
  },
  "962": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "奇葩",
    "color": "#86556D",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "962"
  },
  "789": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "痴迷",
    "color": "#96518F",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "789"
  },
  "343": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Panaréa",
    "color": "#EF7C6B",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "343"
  },
  "8": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835562",
    "name": "暗夜莓",
    "color": "#B12252",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "8"
  },
  "96": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160960",
    "name": "古灵精怪",
    "color": "#FA421C",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "96"
  },
  "678": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Culte",
    "color": "#CC4A6B",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "678"
  },
  "844": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Trafalgar",
    "color": "#E0262E",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "844"
  },
  "766": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Rose Harpers",
    "color": "#CF1D59",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "766"
  },
  "999": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Metallic",
    "color": "#A82628",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "999"
  },
  "028": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Actrice",
    "color": "#E83F4A",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "028"
  },
  "118": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173418",
    "name": "ENERGY",
    "color": "#EB2755",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "118"
  },
  "58": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162580",
    "name": "ROUGE VIE",
    "color": "#822E2E",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "58"
  },
  "55": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173550",
    "name": "浪漫爱情",
    "color": "#F14C77",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "55"
  },
  "57": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162570",
    "name": "ROUGE FEU",
    "color": "#BE2B24",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "57"
  },
  "56": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-020",
    "name": "橙红织锦",
    "color": "#D9100E",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "56"
  },
  "51": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-012",
    "name": "私语",
    "color": "#EE7486",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "51"
  },
  "50": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162500",
    "name": "浪漫幻想",
    "color": "#9F2F56",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "50"
  },
  "52": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-001",
    "name": "星星色",
    "color": "#EA4E59",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "52"
  },
  "924": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "不羁",
    "color": "#602227",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "924"
  },
  "775": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Hyde Park",
    "color": "#E1244B",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "775"
  },
  "179": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160179",
    "name": "LUMINOUS",
    "color": "#ED6160",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "179"
  },
  "5155": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-033",
    "name": "莹亮珊瑚橙",
    "color": "#FA6C55",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "5155"
  },
  "5601": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162560",
    "name": "ROUGE CHARNEL",
    "color": "#B23030",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "5601"
  },
  "277": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Osée",
    "color": "#DB7096",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "277"
  },
  "N204": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21093",
    "name": "樱桃玫瑰",
    "color": "#BE2446",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N204"
  },
  "N205": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21094",
    "name": "加仑玫瑰",
    "color": "#E70060",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N205"
  },
  "4201": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162420",
    "name": "显眼",
    "color": "#FE697F",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "4201"
  },
  "87": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173870",
    "name": "约会",
    "color": "#F8657F",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "87"
  },
  "N202": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21091",
    "name": "幻想玫瑰",
    "color": "#F43556",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N202"
  },
  "01": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-002",
    "name": "正红色",
    "color": "#B8122B",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "01"
  },
  "07": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-007",
    "name": "雅紫纱蓉",
    "color": "#CB2276",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "07"
  },
  "04": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-020",
    "name": "危情禁果",
    "color": "#B71D32",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "04"
  },
  "05": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-008",
    "name": "浮生若梦",
    "color": "#B22146",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "05"
  },
  "2301": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835572",
    "name": "魔女粉",
    "color": "#C62E54",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "2301"
  },
  "08": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-019",
    "name": "纯真梦幻",
    "color": "#A25356",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "08"
  },
  "09": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-010",
    "name": "绛紫丝绒",
    "color": "#C27482",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "09"
  },
  "520": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Feel Good",
    "color": "#E4003E",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "520"
  },
  "7": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835561",
    "name": "幻想紫",
    "color": "#8B2844",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "7"
  },
  "1401": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835567",
    "name": "鬼魅红",
    "color": "#CB2D21",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "1401"
  },
  "305": {
    "url": "https://www.sephora.cn/product/6825.html?sku=346552",
    "name": "缪斯红",
    "color": "#FA013D",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "305"
  },
  "N105": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21090",
    "name": "阳光小麦",
    "color": "#A82A40",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N105"
  },
  "99901": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "传奇红唇哑光",
    "color": "#CC434D",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "99901"
  },
  "N103": {
    "url": "https://www.sephora.cn/product/6825.html?sku=21088",
    "name": "迷人茶色",
    "color": "#C74A52",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "N103"
  },
  "102": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160102",
    "name": "悸动",
    "color": "#B20032",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "102"
  },
  "904": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "黑咖啡",
    "color": "#391E1D",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "904"
  },
  "38": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162380",
    "name": "迷惑",
    "color": "#892833",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "38"
  },
  "1641": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835569",
    "name": "潮女红",
    "color": "#DF4541",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "1641"
  },
  "1643": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-033",
    "name": "糖果女孩",
    "color": "#CD4143",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "1643"
  },
  "37": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162370",
    "name": "纵情",
    "color": "#C43759",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "37"
  },
  "36": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-013",
    "name": "珊瑚雪纺",
    "color": "#ED695D",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "36"
  },
  "643": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Stand Out",
    "color": "#E84617",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "643"
  },
  "642": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Ready",
    "color": "#EA5155",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "642"
  },
  "644": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "生存游戏",
    "color": "#EA5331",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "644"
  },
  "047": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "迪奥小姐",
    "color": "#E40068",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "047"
  },
  "459": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Charnelle",
    "color": "#D1546E",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "459"
  },
  "577": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "混日子",
    "color": "#C86378",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "577"
  },
  "576": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Pretty Matte",
    "color": "#F08182",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "576"
  },
  "457": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "鸡尾酒",
    "color": "#EB636B",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "457"
  },
  "61": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162610",
    "name": "LA SECRÈTE",
    "color": "#EC7879",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "61"
  },
  "62": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173620",
    "name": "蒙特卡罗",
    "color": "#E12948",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "62"
  },
  "63": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162630",
    "name": "NIGHTFALL",
    "color": "#802932",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "63"
  },
  "64": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162640",
    "name": "FIRST LIGHT",
    "color": "#E84632",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "64"
  },
  "66": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162660",
    "name": "L'INDOMABILE",
    "color": "#E1112A",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "66"
  },
  "178": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160178",
    "name": "NEW PRODIGIOUS",
    "color": "#BF5363",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "178"
  },
  "176": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160176",
    "name": "INDÉPENDANTE",
    "color": "#A80D1F",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "176"
  },
  "5133": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162510",
    "name": "震撼",
    "color": "#9E333D",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "5133"
  },
  "172": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160172",
    "name": "ROUGE REBELLE",
    "color": "#E40021",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "172"
  },
  "1901": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-039",
    "name": "玫红色",
    "color": "#B13C79",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "1901"
  },
  "554": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "日光浴",
    "color": "#EA5344",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "554"
  },
  "2201": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835571",
    "name": "精灵粉",
    "color": "#EC2663",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "2201"
  },
  "856": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Célèbre",
    "color": "#B62631",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "856"
  },
  "857": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "好莱坞大咖",
    "color": "#A01314",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "857"
  },
  "182": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160182",
    "name": "VIBRANTE",
    "color": "#E02E20",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "182"
  },
  "1501": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835568",
    "name": "夜光橘",
    "color": "#D43A29",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "1501"
  },
  "652": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "珊瑚",
    "color": "#ED6C7F",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "652"
  },
  "184": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160184",
    "name": "INCANTEVOLE",
    "color": "#C80F2E",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "184"
  },
  "6": {
    "url": "https://www.yslbeautycn.com/item/00199YSL-005",
    "name": "红色触碰",
    "color": "#CC0824",
    "series": "莹亮纯魅美唇膏",
    "brand": "圣罗兰",
    "id": "6"
  },
  "060": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "首映礼",
    "color": "#D36179",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "060"
  },
  "756": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Panache",
    "color": "#E52F31",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "756"
  },
  "637": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "热点",
    "color": "#E74218",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "637"
  },
  "564": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "购物狂",
    "color": "#E94858",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "564"
  },
  "567": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Rose en Dior",
    "color": "#EA5069",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "567"
  },
  "99": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160990",
    "name": "海盗",
    "color": "#8A010D",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "99"
  },
  "787": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Exuberant Matte",
    "color": "#E6699D",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "787"
  },
  "169": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160169",
    "name": "ROUGE TENTATION",
    "color": "#8E2622",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "169"
  },
  "91": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-coco-shine--p173410.html#skuid-0173910",
    "name": "波希米亚",
    "color": "#C12A33",
    "series": "唇膏水亮",
    "brand": "香奈儿可可小姐",
    "id": "91"
  },
  "90": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160900",
    "name": "活泼",
    "color": "#FC6E48",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "90"
  },
  "93": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160930",
    "name": "兴奋",
    "color": "#CD0043",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "93"
  },
  "94": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160940",
    "name": "着迷",
    "color": "#FC3E6E",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "94"
  },
  "4601": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162460",
    "name": "慧黠",
    "color": "#C92D38",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "4601"
  },
  "11": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835560",
    "name": "御姐橘",
    "color": "#BA353C",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "11"
  },
  "10": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835564",
    "name": "帅T红",
    "color": "#B53D52",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "10"
  },
  "13": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-038",
    "name": "正橘色",
    "color": "#BB1813",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "13"
  },
  "12": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-003",
    "name": "红粉派对",
    "color": "#DF3443",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "12"
  },
  "15": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-007",
    "name": "珊瑚恋人",
    "color": "#E06C68",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "15"
  },
  "14": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-002",
    "name": "一见倾心",
    "color": "#DC4B41",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "14"
  },
  "17": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-003",
    "name": "嫣粉纱丽",
    "color": "#F75E70",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "17"
  },
  "16": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-026",
    "name": "绯红香缎",
    "color": "#BB444A",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "16"
  },
  "19": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-011",
    "name": "华丽转身",
    "color": "#842C71",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "19"
  },
  "18": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835570",
    "name": "童话粉",
    "color": "#D35C5E",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "18"
  },
  "867": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "红酒",
    "color": "#901A32",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "867"
  },
  "740": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "可乐部",
    "color": "#902216",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "740"
  },
  "882": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "野蛮女友",
    "color": "#BB0E63",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "882"
  },
  "152": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160152",
    "name": "隐约",
    "color": "#E82F2C",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "152"
  },
  "744": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "花蝴蝶",
    "color": "#E51E1B",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "744"
  },
  "746": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Favorite",
    "color": "#DC002C",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "746"
  },
  "602": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "狂想",
    "color": "#2E4763",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "602"
  },
  "158": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160158",
    "name": "VIREVOLTANTE",
    "color": "#B24957",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "158"
  },
  "888": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Strong Matte",
    "color": "#EB5958",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "888"
  },
  "550": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "小心计",
    "color": "#E47082",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "550"
  },
  "553": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Sillage",
    "color": "#DA4F4E",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "553"
  },
  "9101": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-luminous-intense-lip-colour-p160110.html#skuid-0160910",
    "name": "吸引力",
    "color": "#E45661",
    "series": "炫亮魅力唇膏",
    "brand": "香奈儿可可小姐",
    "id": "9101"
  },
  "48": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-035",
    "name": "夜色",
    "color": "#8E243E",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "48"
  },
  "49": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-001",
    "name": "撩骚",
    "color": "#D62352",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "49"
  },
  "46": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-034",
    "name": "钟情",
    "color": "#D1121B",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "46"
  },
  "47": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-018",
    "name": "心跳",
    "color": "#BB6868",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "47"
  },
  "44": {
    "url": "https://www.chanel.cn/zh_CN/fragrance-beauty/makeup/p/lips/lipsticks/rouge-allure-velvet-luminous-matte-lip-colour-p162310.html#skuid-0162440",
    "name": "歌剧名伶",
    "color": "#F06FA5",
    "series": "炫亮魅力唇膏丝绒",
    "brand": "香奈儿可可小姐",
    "id": "44"
  },
  "45": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-015",
    "name": "拥吻",
    "color": "#C60F2F",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "45"
  },
  "42": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-031",
    "name": "初恋",
    "color": "#EFE9DE",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "42"
  },
  "43": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-026",
    "name": "唇印",
    "color": "#D13C4F",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "43"
  },
  "41": {
    "url": "https://www.yslbeautycn.com/item/00031YSL-006",
    "name": "告白",
    "color": "#EC6A70",
    "series": "莹亮纯魅唇膏",
    "brand": "圣罗兰",
    "id": "41"
  },
  "9": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835563",
    "name": "沉睡红",
    "color": "#DD485B",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "9"
  },
  "201": {
    "url": "https://www.sephora.cn/product/6825.html?sku=346553",
    "name": "糖果玫瑰",
    "color": "#FA6173",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "201"
  },
  "771": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Radiant Matte",
    "color": "#E96C81",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "771"
  },
  "207": {
    "url": "https://www.yslbeautycn.com/item/00030YSL-008",
    "name": "珊瑚柚",
    "color": "#CA4061",
    "series": "纯口红",
    "brand": "圣罗兰",
    "id": "207"
  },
  "772": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Classic Matte",
    "color": "#CB7A84",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "772"
  },
  "209": {
    "url": "https://www.sephora.cn/product/6825.html?sku=346555",
    "name": "明艳玫瑰",
    "color": "#F60071",
    "series": "高定香榭天鹅绒唇膏（小羊皮）",
    "brand": "纪梵希",
    "id": "209"
  },
  "20701": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "蒙田灰",
    "color": "#BBC3C2",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "20701"
  },
  "080": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "微笑正红",
    "color": "#D91820",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "080"
  },
  "794": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "天生玩家",
    "color": "#95358C",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "794"
  },
  "487": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "泡泡堂",
    "color": "#EB5C97",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "487"
  },
  "1281": {
    "url": "https://www.yslbeautycn.com/item/00199YSL-006",
    "name": "苺色暧昧",
    "color": "#B81D3D",
    "series": "莹亮纯魅美唇膏",
    "brand": "圣罗兰",
    "id": "1281"
  },
  "1282": {
    "url": "https://www.sephora.cn/product/842511.html?sku=835565",
    "name": "女巫红",
    "color": "#B9282D",
    "series": "禁忌之吻霓虹唇膏",
    "brand": "纪梵希",
    "id": "1282"
  },
  "351": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0027830-dior%E8%BF%AA%E5%A5%A5%E7%83%88%E8%89%B3%E8%93%9D%E9%87%91%E5%94%87%E8%86%8F-y0027830",
    "name": "Dansante",
    "color": "#E46177",
    "series": "烈艳蓝金唇膏",
    "brand": "迪奥",
    "id": "351"
  },
  "877": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "给我迪奥",
    "color": "#C4032B",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "877"
  },
  "684": {
    "url": "https://www.dior.cn/zh_cn/products/beauty-Y0028808-dior%E8%BF%AA%E5%A5%A5%E9%AD%85%E6%83%91%E9%87%89%E5%94%87%E8%86%8F-%E6%B5%93%E9%83%81%E6%BC%86%E5%85%89%EF%BC%8C%E8%BD%BB%E7%9B%88%E6%8C%81%E5%A6%86",
    "name": "人生赢家",
    "color": "#E60860",
    "series": "魅惑釉唇膏",
    "brand": "迪奥",
    "id": "684"
  }
}

module.exports = {
  popularList: popular_data,
  lipsticksData: lipsticks_data,
  lipsticksDict: lipsticks_dict
}
