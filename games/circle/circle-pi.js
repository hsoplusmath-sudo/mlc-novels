if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["circle-pi"] = {

  /* =========================================
     起
     1本の線から始める
  ========================================= */

  msg_welcome: [
    {
      name: "先生",
      text: "今日は、こんな物語をしてみるよ！",
      speaker: "usagi",
      bg: "../../assets/bg/bg_manabiya.webp",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
        {
      name: "うさこ",
      text: "なになに〜？？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/setsumeisiyo.mp3"
    },
    {
      name: "先生",
      text: "ここに長さ1の線が1本あります。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "長さが「1」の線？？(なにしてるの？)",
      speaker: "usako",
      showImgId: "img-usako-sad",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_one.png",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "この線を基準にして、正方形と円を作ってみるね",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_objects.png"
    },    
    {
      name: "先生",
      text: "正方形は辺の長さがぜんぶ「１」。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_objects.png"
    },
    {
      name: "うさこ",
      text: "円は直径が「１」。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_objects.png"
    },
    {
      name: "先生",
      text: "この同じ「1」の正方形と円では、どれくらい違いがあるか分かるかな？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      nextRoute: "circumference"
    }
  ],


  /* =========================================
     承
     周の比較
  ========================================= */

  circumference: [
    {
      name: "うさこ",
      text: "うぅ〜、",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "周りの線の長さは、円の方がちょっと短そう。。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_surrounds.png"
    },
    {
      name: "先生",
      text: "正方形の周りの長さは？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "1が4本だから、4。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "では、直径1の円の周りは？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "円周だから……π。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう。正方形は「4」, 円は「π」。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_surrounds.png"
    },
    {
      name: "うさこ",
      text: "πって、3.14..だったから、ちょっと短いってこと？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
      {
      name: "先生",
      text: "そう。正方形よりも円の周りの長さの方がちょっと短い。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "へぇ〜ちょっと面白いかも。他は？？？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      choices: [
        {
          text: "面積を比べてみたい",
          nextRoute: "area"
        },
        {
          text: "もう、いっかな",
          nextRoute: "satisfied"
        }
      ]
    }
  ],

  satisfied: [
    {
      name: "先生",
      text: "えっ、もういいの？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara",
      customAction: "returnToMenuScreen"
      }
],


  /* =========================================
     転①
     面積
  ========================================= */

  area: [
    {
      name: "先生",
      text: "面積だね",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
      },
     {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_objects.png"
    },    
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_areas.png"
    },
    {
      name: "うさこ",
      text: "正方形は 1×1 だから、「1」。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "円の面積は？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "半径は0.5だから……π×0.5×0.5。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "π/4。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/kirakira-sakurahubuki.mp3"
    },
    {
      name: "先生",
      text: "正方形の面積は「1」で、円は「π/4」だね。どれくらい違うか分かる？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_areas.png"
    },
    {
      name: "うさこ",
      text: "π/4ってなに？。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "πは3.14…だったから、3.14÷4 くらいだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "「約0.785」か。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "まるい円はカクカクの正方形の「78.5%」なんだ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "へぇー、πって、3.14..なんだ。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-pi-image_areas.png"
    },
    {
      name: "うさこ",
      text: "□と◯って比べたら分かりやすい！！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      completeStepId: "circle-pi-area",
      customAction: "returnToMenuScreen"
    }
  ]

};