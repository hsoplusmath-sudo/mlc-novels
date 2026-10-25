if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["jinja"] = {

  jinja_opening: [
    {
      name: "",
      text: "近所の神社",
      speaker: "",
      bg: "kinjo-jinja",
      showImgId: "",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/jinja-icho-namiki.mp3"
    },
    {
      name: "しーくん",
      text: "……※△□○……",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara"
    },
    {
      name: "さーちゃん",
      text: "……△♪※……○……",
      speaker: "satyan",
      showImgId: "img-satyan-happy",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "……",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "みんな、楽しそうだな……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "わたしも、あんなふうに笑えたらいいのに。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "風が吹き、木々の葉が揺れる。",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "……わたし、何をしてるんだろう。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "ちゃんと考えて、頑張ってきたはずなのに。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "……わたしの人生、これであってるのかな？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "………",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "",
      text: "『思うまま、進みなさい。』",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "……え？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "",
      speaker: "sikun",
      showImgId: "",
      posClass: ""
    },
    {
      name: "",
      text: "",
      speaker: "satyan",
      showImgId: "",
      posClass: ""
    },

    {
      name: "うさこ",
      text: "あっ",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara",
      choices: [
        { text: "心に手を当てる", nextRoute: "kokoro" },
        { text: "ひさしぶりに空を見上げる", nextRoute: "houou" }
      ]
    }
],


kokoro: [
    {
      name: "うさこ",
      text: "うん……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "わたし、間違ってなかったんだ",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara",
      completeStepId: "jinja-opening",
      customAction: "returnToMenuScreen"
    }
  ],

houou: [
    {
      name: "",
      text: "",
      speaker: "usako",
      showImgId: "",
      posClass: "",
      bg: "bg_sunny-sky",
    },
    {
      name: "",
      text: "（バサッ）",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "",
      speaker: "houou",
      showImgId: "",
      posClass: "",
      completeStepId: "jinja-houou",
      customAction: "returnToMenuScreen"
    }
  ],
  
  
laststage : [
    {
      name: "",
      text: "ここは近所の神社",
      speaker: "",
      bg: "kinjo-jinja",
      showImgId: "",
      bgm: "jinja-icho"
    },
    {
      name: "しーくん",
      text: "あっ、きたきた！",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara"
    },
    {
      name: "さーちゃん",
      text: "きたよ！うれしい。",
      speaker: "satyan",
      showImgId: "img-satyan-happy",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
   {
      name: "うさこ",
      text: "わたし、たくさん頑張った！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
     {
      name: "うさぎ",
      text: "がんばったよ",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
        {
      name: "龍神さん",
      text: "よく頑張った",
      speaker: "ryujin",
      showImgId: "img-ryujin-normal",
      posClass: "right-chara"
    },
        {
      name: "シリー",
      text: "きみは苦労を越えてきた",
      speaker: "siri",
      showImgId: "img-siri-normal",
      posClass: "right-chara"
    },
    {
      name: "鳳凰",
      text: "（バサッ）",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "わたし、一生懸命、生きてきて良かった！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    
      {
      name: "",
      text: "Best Ending！",
      speaker: "",
      showImgId: "",
      posClass: "",
      completeStepId: "jinja-bestend",
      customAction: "returnToMenuScreen"
    }  
    
]

};