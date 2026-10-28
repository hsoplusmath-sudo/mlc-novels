if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["moon-distance"] = {
  msg_welcome: [
    { name: "",
      text: "ある日の夜の話です。あなたはふと考えたことはありませんか？<br>「月までどれくらいだろう？」",
      speaker: "none",
      bg: "../../assets/bg/bg_night-sky.webp",
      showImgId: "none",
      nextRoute: "opening"
    }
  ],

  opening: [
    {
      name: "うさこ",
      text: "きれいな月だね🌕",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara",
      bgm: "../../assets/bgm/bgm_shizukana-tikurin.mp3"
    },
    {
      name: "ぶきようくん",
      text: "まんまるで、お団子みたい",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      partnerAction: { id: "img-usako-normal", class: "right-chara" },
    },
     {
      name: "ぶきようくん",
      text: "まんまるで、お団子みたい",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-1.webp"
    },
    {
      name: "うさこ",
      text: "おいしそう〜",
      speaker: "usako",
      posClass: "right-chara",
      showImgId: "img-usako-normal",
     nextRoute: "desire"
    }
  ],

  desire: [
    {
      name: "うさこ",
      text: "月までの距離っていくらかな？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "うーん、めっちゃ遠いんじゃない",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "昔の人はどうやったの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "すごい難しい計算したんじゃないかな？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "気になる！気になる！！気になる！！！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "とう！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      partnerAction: { id: "img-bukiyokun-hard", class: "center-chara" },
      bgm: "../../assets/bgm/bgm_escort.opus"
    },
    {
      name: "2人",
      text: "うわあ〜",
      speaker: "none",
      showImgId: "none",
      posClass: "center-chara"
    },
    {
      name: "ヒーロー",
      text: "月に代わって教えてあげよう！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ありがとう！……でも、どうするんだろう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      choices: [
  { text: "月まで直接測れないかな？", nextRoute: "measure_direct" },
  { text: "月を見ながら、何か分からないかな？", nextRoute: "wisdom" },
  { text: "だいたいの距離を予想する", nextRoute: "guess" }
]
    }
  ],

measure_direct: [
    {
      name: "うさこ",
      text: "月までレーザーとかでメジャーみたいに測ればいいんじゃないの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "昔の人はそんなことできないよ！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "center-chara",
      choices: [
  { text: "月を見ながら、何か分からないかな？", nextRoute: "wisdom" },
  { text: "だいたいの距離を予想する", nextRoute: "guess" }
]
    }
],

guess: [
    {
      name: "うさこ",
      text: "だいたい、んーと、3万キロくらいかな",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "そうっぽいかも。。でも、本当かどうか根拠ないよ",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "center-chara",
      choices: [
  { text: "月まで直接測れないかな？", nextRoute: "measure_direct" },
  { text: "月を見ながら、何か分からないかな？", nextRoute: "wisdom" }
]
    }
],

  wisdom: [
    {
      name: "ヒーロー",
      text: "2人離れてごらん",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "えっ、いきなり？？！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "分かった。僕が離れる！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "お互いの方を見てごらん",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "えっ、はい。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-2.webp"
    },
    {
      name: "ヒーロー",
      text: "そこから月を見てごらん",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-2.webp"
    },
    {
      name: "ヒーロー",
      text: "じゃあ今度は、相手の方向と月の方向。その間の角度を測ってごらん。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-2-1.webp"
    },
    {
      name: "ぶきようくん",
      text: "でも、月までの距離はどうやって測るの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "分かるところから出発するんだよ。二人の距離なら測れるよね。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "それなら、分かる！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "それと、さっき測った2つの角度がある。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-2-1.webp"
    },
    {
      name: "うさこ",
      text: "もしかして、それだけで月までの長さが分かるの！？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },  
    {
      name: "ぶきようくん",
      text: "おっきな三角形できるんだあ",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-3.webp"
    },
    {
      name: "うさこ",
      text: "たしかに！今、私たち、月と大きな三角形を作ってる！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-3.webp"
    },
    {
      name: "ヒーロー",
      text: "分かっている長さと角度から、分からない長さを出せるんだ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "ぶきようくん",
      text: "ほぉー",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "どうするの？どうするの？でも、むずかしそう！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      choices: [
        { text: "雰囲気だけで大丈夫！", nextRoute: "achievement" },
        { text: "自分で計算してみる！", nextRoute: "wisdom_sine" }
	]
    }
  ],

  wisdom_sine: [
      {
      name: "うさこ",
      text: "この三角形、分かってるのは1辺と2つの角度だよね",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-3.webp"
    },
      {
      name: "うさこ",
      text: "それだけで残りの辺を出せる公式ってあるの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },    
    {
      name: "ぶきようくん",
      text: "あるよ。それが正弦定理！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      choices: [
        { text: "詳しく知りたい！", nextRoute: "wisdom_sine_2" },
        { text: "もう知ってる", nextRoute: "achievement" },
        { text: "やっぱやめとく", nextRoute: "achievement" }
      ]
    }
  ],


  wisdom_sine_2: [
    {
      name: "",
      text: "まず「正弦定理」の「正弦（sine）」の意味を確認しておく",
      speaker: "none",
      popupLink: "#popup-step-sine-def-detail",
      popupBtnText: "サイン（sin）の詳細解説"
    },
    {
      name: "うさこ",
      text: "それで、正弦定理ってなに？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "こんな公式があるんだよ",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupLink: "#popup-step-sine-thm-detail",
      popupBtnText: "正弦定理の詳細解説"
    },
    {
      name: "うさこ",
      text: "うわーこれで計算できるんだ",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      nextRoute: "achievement"
    }
  ],

  achievement: [
    {
      name: "うさこ",
      text: "実際に、測ってみる？？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "やってみようよ",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-3.webp"
    },
    {
      name: "ヒーロー",
      text: "でも、2人の距離が近いと誤差が大きいんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "ヒーロー",
      text: "だから実際には、ものすごく離れた場所から測った人たちがいる",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-3.webp"
    },
    {
      name: "ぶきようくん",
      text: "えー、それ面白い！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "そのときのデータはこんなかんじ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-4.webp"
    },
    {
      name: "ぶきようくん",
      text: "とても興味深い！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-4.webp"
    },
    {
      name: "ヒーロー",
      text: "（ドイツと南アフリカで離れて調べたんだ！）",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img/moon-distance_calcu-4.webp"
    },
    {
      name: "うさこ",
      text: "じゃあ……この数字で計算したら？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "……出た！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "月まで36万km！？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "すごっ！！日本縦断130回くらいだ！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "やばっ、地球から月まで測れた。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "行ってないのにね。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara",
      nextRoute: "ending"
    }
  ],

  ending: [
    {
      name: "ヒーロー",
      text: "実はね。今やったのが、遠くまでの距離を測る基本の考え方なんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "（月を見る）",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "（月を見る）",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/the-moon/img_the-moon.webp"
    },
    {
      name: "ぶきようくん",
      text: "どうしたの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "……さっきより、ちょっと違って見える。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      completeStepId: "moon-distance",
    customAction: "returnToMenuScreen"
    }
  ]
};
