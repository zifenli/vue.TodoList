/**
 * Created by lizifen on 16/8/8.
 */
var photos = {}
var photosData = [
  [{
    name: "安吉深溪峡谷漂流",
    description: "标签：峡谷",
    width: 1001,
    height: 799,
    image: {
      small: "http://m.tuniucdn.com/filebroker/cdn/olb/15/4b/154b6f68f10fedea03a44db34487664d_w1001_h801_c1_t0.jpg",
      large: "http://m.tuniucdn.com/filebroker/cdn/olb/15/4b/154b6f68f10fedea03a44db34487664d_w1001_h801_c1_t0.jpg"
    }
  },
    {
      name: "景物摄影",
      description: "标签：森林",
      width: 605,
      height: 1821,
      image: {
        small: "http://img.hb.aicdn.com/67da30916db9533e50c3b9fc8e7d51293961603031954-51P0vS",
        large: "http://img.hb.aicdn.com/67da30916db9533e50c3b9fc8e7d51293961603031954-51P0vS"
      }
    },
    {
      name: "意大利,托斯卡纳,柏树,行列,私家车道,向上,别墅",
      description: "标签：田园,全部",
      width: 683,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/danita_rm005/eu16-bja0729.jpg",
        large: "http://m2.quanjing.com/2m/danita_rm005/eu16-bja0729.jpg"
      }
    },
    {
      name: "意大利,托斯卡纳,皮恩扎,正面,住宅",
      description: "标签：田园,全部",
      width: 683,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/danita_rm005/eu16-bja0731.jpg",
        large: "http://m2.quanjing.com/2m/danita_rm005/eu16-bja0731.jpg"
      }
    },
    {
      name: "江门,潮莲别墅",
      description: "标签：中式,田园,全部",
      width: 1024,
      height: 683,
      image: {
        small: "http://m2.quanjing.com/2m/chineseview065/177-5037.jpg",
        large: "http://m2.quanjing.com/2m/chineseview065/177-5037.jpg"
      }
    }],
  [{
    name: "花盘栽的鲜花",
    description: "标签：田园,全部",
    width: 683,
    height: 1024,
    image: {
      small: "http://m2.quanjing.com/2m/chineseview085/485-0351.jpg",
      large: "http://m2.quanjing.com/2m/chineseview085/485-0351.jpg"
    }
  },
    {
      name: "查看到休息室",
      description: "标签：田园,全部",
      width: 683,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/fodrm017/fod-00289587.jpg",
        large: "http://m2.quanjing.com/2m/fodrm017/fod-00289587.jpg"
      }
    },
    {
      name: "运河,反射,布鲁日,比利时",
      description: "标签：田园,全部",
      width: 1019,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/rob_pre001/rob-485-3683.jpg",
        large: "http://m2.quanjing.com/2m/rob_pre001/rob-485-3683.jpg"
      }
    },
    {
      name: "历史,居住环境,场所,悬崖,宫殿,圆,仪式,房间,广告,梅萨维德国家公园,科罗拉多,美国",
      description: "标签：田园,全部",
      width: 1024,
      height: 686,
      image: {
        small: "http://m2.quanjing.com/2m/ibrm049/iblhmw01206426.jpg",
        large: "http://m2.quanjing.com/2m/ibrm049/iblhmw01206426.jpg"
      }
    },
    {
      name: "俯视,土豆田,丰收,爱德华王子岛,加拿大",
      description: "标签：田园,全部",
      width: 677,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/acp002/acp-acp05169.jpg",
        large: "http://m2.quanjing.com/2m/acp002/acp-acp05169.jpg"
      }
    }],
  [{
    name: "岐阜,日本",
    description: "标签：田园,全部",
    width: 832,
    height: 1024,
    image: {
      small: "http://m2.quanjing.com/2m/afl003/AFR-01-08-00977.jpg",
      large: "http://m2.quanjing.com/2m/afl003/AFR-01-08-00977.jpg"
    }
  },
    {
      name: "温室内盛开的粉色蝴蝶兰",
      description: "标签：中式,田园,简约,全部",
      width: 683,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/chineseview070/414-yxag1201262.jpg",
        large: "http://m2.quanjing.com/2m/chineseview070/414-yxag1201262.jpg"
      }
    },
    {
      name: "红色,长椅,鹅卵石,乡村,街道",
      description: "标签：田园,简约,地中海,全部",
      width: 1024,
      height: 683,
      image: {
        small: "http://m2.quanjing.com/2m/cultura006/37sg0006rf.jpg",
        large: "http://m2.quanjing.com/2m/cultura006/37sg0006rf.jpg"
      }
    },
    {
      name: "复古,旧式,历史",
      description: "标签：田园,全部",
      width: 1024,
      height: 693,
      image: {
        small: "http://m2.quanjing.com/2m/glass002/ghi-circa00233.jpg",
        large: "http://m2.quanjing.com/2m/glass002/ghi-circa00233.jpg"
      }
    },
    {
      name: "四川泸州古蔺县太平古镇",
      description: "标签：中式,田园,全部",
      width: 683,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/chineseview066/263-7922.jpg",
        large: "http://m2.quanjing.com/2m/chineseview066/263-7922.jpg"
      }
    },
    {
      name: "半木结构,房子,后面,花园,大门,河,地区,石荷州,德国,欧洲",
      description: "标签：田园,全部",
      width: 680,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/ibrm023/iblmid02049363.jpg",
        large: "http://m2.quanjing.com/2m/ibrm023/iblmid02049363.jpg"
      }
    },
    {
      name: "桌子,早餐,传统,蓝色,白色,瓷器,天窗,大厨房",
      description: "标签：厨房,田园,全部",
      width: 1007,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/fodrm018/fod-00711714.jpg",
        large: "http://m2.quanjing.com/2m/fodrm018/fod-00711714.jpg"
      }
    },
    {
      name: "老,家园,水彩,美国,宾夕法尼亚,费城",
      description: "标签：田园,全部",
      width: 1024,
      height: 785,
      image: {
        small: "http://m2.quanjing.com/2m/sps017/sps849-10987.jpg",
        large: "http://m2.quanjing.com/2m/sps017/sps849-10987.jpg"
      }
    },
    {
      name: "梯田,区域,棚架,正面,地中海,天然石,房子",
      description: "标签：田园,地中海,全部",
      width: 680,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/fod_liv002/fod-11031778.jpg",
        large: "http://m2.quanjing.com/2m/fod_liv002/fod-11031778.jpg"
      }
    },
    {
      name: "道森市,育空地区,加拿大,服务,小屋,家园,诗人",
      description: "标签：田园,全部",
      width: 1024,
      height: 683,
      image: {
        small: "http://m2.quanjing.com/2m/destina_rm001/destina1877358.jpg",
        large: "http://m2.quanjing.com/2m/destina_rm001/destina1877358.jpg"
      }
    }],
  [{
    name: "多特蒙德,德国",
    description: "标签：田园,全部",
    width: 1024,
    height: 683,
    image: {
      small: "http://m2.quanjing.com/2m/fo007/fo-5572141.jpg",
      large: "http://m2.quanjing.com/2m/fo007/fo-5572141.jpg"
    }
  },
    {
      name: "房子,都柏林,爱尔兰,18世纪,乔治时期风格,宅邸",
      description: "标签：田园,全部",
      width: 820,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/irish_rm001/isish1804493.jpg",
        large: "http://m2.quanjing.com/2m/irish_rm001/isish1804493.jpg"
      }
    },
    {
      name: "床,蚊子,网,木屋,墨西哥",
      description: "标签：卧室,田园,全部",
      width: 682,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/acp005/acp-wwp20283.jpg",
        large: "http://m2.quanjing.com/2m/acp005/acp-wwp20283.jpg"
      }
    },
    {
      name: "晃动,床,舒适,座椅,露营,图书馆,帐蓬,盐磐",
      description: "标签：田园,全部",
      width: 985,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/fodrm016/fod-00719790.jpg",
        large: "http://m2.quanjing.com/2m/fodrm016/fod-00719790.jpg"
      }
    },
    {
      name: "坎布里亚,英格兰,英国",
      description: "标签：田园,现代,全部",
      width: 1020,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/rob_pre001/rob-485-5070.jpg",
        large: "http://m2.quanjing.com/2m/rob_pre001/rob-485-5070.jpg"
      }
    },
    {
      name: "城镇,长野",
      description: "标签：田园,全部",
      width: 1024,
      height: 683,
      image: {
        small: "http://m2.quanjing.com/2m/aflrf002/cmob002227.jpg",
        large: "http://m2.quanjing.com/2m/aflrf002/cmob002227.jpg"
      }
    },
    {
      name: "屋舍,新森林地区,汉普郡,英格兰,英国",
      description: "标签：田园,全部",
      width: 694,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/rob_pre001/rob-485-3177.jpg",
        large: "http://m2.quanjing.com/2m/rob_pre001/rob-485-3177.jpg"
      }
    },
    {
      name: "木桌子,乡村,就餐,椅子,创作,就餐区,阳台,壮观,景色",
      description: "标签：阳台,田园,全部",
      width: 1015,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/fodrm016/fod-00721934.jpg",
        large: "http://m2.quanjing.com/2m/fodrm016/fod-00721934.jpg"
      }
    }],
  [{
    name: "城镇,梅克内斯,区域,摩洛哥,北非,非洲",
    description: "标签：田园,全部",
    width: 1024,
    height: 691,
    image: {
      small: "http://m2.quanjing.com/2m/rob_pre002/rob-712-1486.jpg",
      large: "http://m2.quanjing.com/2m/rob_pre002/rob-712-1486.jpg"
    }
  },
    {
      name: "农田,爱德华王子岛,加拿大",
      description: "标签：田园,全部",
      width: 680,
      height: 1024,
      image: {
        small: "http://m2.quanjing.com/2m/acp002/acp-acp00621.jpg",
        large: "http://m2.quanjing.com/2m/acp002/acp-acp00621.jpg"
      }
    }]
];
photos.getPhotos = function (page) {
  return photosData[page];
}

export default photos;
