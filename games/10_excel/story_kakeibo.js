window.POPUP_MASTER = [
	{ id: "kakeibo-step1", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step1.webp"},
  { id: "kakeibo-step2", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step2.webp"},
  { id: "kakeibo-step3", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step3.webp"},
  { id: "kakeibo-step4", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"},

  ];



// Storyはここから
if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["kakeibo"] = {

msg_welcome: [
{ 
  name: "",
  text: "さあ、Excelを人生に役立てる物語を始めましょう！！",
  speaker: "none",
  bg: "pc-office",
  showImgId: "none",
  nextRoute: "excelmotiv"
}
    ],

excelmotiv: [
{
  name: "うさこ", text: "ぱそこん苦手。もっと使いこなせたらなぁ。",
  speaker: "usako",
  bg: "pc-office",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
  bgm: "fraita" 
  },
{
  name: "うさこ",
  text: "パソコンに打ち込むだけの仕事飽きてきたなぁ",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara" 
},
{ 
  name: "",
  text: "カタカタカタ。。。。",
  speaker: "none",
  showImgId: "none"
},
{ 
  name: "",
  text: "カタカタカタ。。。。<br>カチカチカチ。。。。",
  speaker: "none",
  showImgId: "none"
},
{ 
  name: "",
  text: "カタカタカタ。。。。<br>カチカチカチ。。。。<br>まいにちたいへん",
  speaker: "none",
  showImgId: "none"
},
{
  name: "うさこ",
  text: "まいにち大変だな。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara"
},
{
  name: "うさこ",
  text: "まいにち大変だな。<br>この作業、きめられた場所に打ち込むだけだしな。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara"
},
{
  name: "うさこ",
  text: "それにしても",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara"
},
{
  name: "うさこ",
  text: "それにしても<br>お金ない。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara"
},
{
  name: "うさこ",
  text: "たのしく自由にあそびたいよぉ",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara"
},
{
  name: "ヒーロー",
  text: "とう！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  bgm: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus",
  partnerAction: { id: "img-usako-sad", class: "right-chara" } },
{
  name: "うさこ",
  text: "だれ？！！？！！！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},

{
  name: "ヒーロー",
  text: "お金に困ってるから、来たよ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},

{
  name: "うさこ",
  text: "お金を適切に管理できるようになりたい！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "パソコンに苦手意識があるなら、まずエクセルをさわってみようよ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},

{
  name: "ヒーロー",
  text: "パソコンに苦手意識があるなら、まずエクセルをさわってみようよ。<br>あなたはどうしたい？",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "なにができるの？",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "まずは家計簿を作るのがいい練習になるかな！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
    choices: [
    { text: "「えっ、家計簿できるの！？」",
      nextRoute: "kakeibo" },
    { text: "「バイトをがんばる！」",
      nextRoute: "arbeit" },
    { text: "「いつものように家にかえって、とりあえずご飯食べて、ごろごろしながらスマホ見て、なんとなく毎日を過ごす」",
      nextRoute: "gorogoro" }]
}
],

arbeit: [
{
  name: "うさこ",
  text: "カフェでバイト楽しいな！！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara",
  bg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20arbeit.webp",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "カフェでバイト楽しいな！！<br>いらっしゃいませー",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara",
},
{
  name: "うさこ",
  text: "カフェでバイト楽しいな！！<br>いらっしゃいませー<br>いらっしゃいませー",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara",
},
{
  name: "うさこ",
  text: "いらっしゃいませー",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara"
},
{
  name: "うさこ",
  text: "いらっしゃいませー<br>いらっしゃいませー",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara"
},
{
  name: "",
  text: "・・・・・・1か月後",
  speaker: "none",
  showImgId: "none",
  nextRoute: "excelmotiv"
}
],

gorogoro: [
{
  name: "うさこ",
  text: "今日も仕事終わった！！",
  bg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20gorogoro.webp",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "今日も仕事終わった！！ご飯食べたし、",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "今日も仕事終わった！！ご飯食べたし、<br>わっはっはwww",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "今日も仕事終わった！！ご飯食べたし、<br>わっはっはwww<br>ぐーzzz、ぐーzzz",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "わっはっはwww",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara"
},
{
  name: "うさこ",
  text: "わっはっはwww<br>ぐーzzz、ぐーzzz",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara"
},
{
  name: "",
  text: "・・・・・・1か月後",
  speaker: "none",
  showImgId: "none",
  nextRoute: "excelmotiv"
}
    ],

kakeibo: [
{
  name: "ヒーロー",
  text: "よーし、いい決断だね。まず重要な１歩を踏み出したよ！", 
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  bg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20pc-office.webp",
  bgm: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_kaeru-piano.opus",
  partnerAction: { id: "img-usako-sad", class: "right-chara" } 
  },
{
  name: "うさこ",
  text: "うふふ",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},

{
  name: "ヒーロー",
  text: "こんなものを作ることができるよ",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "kakeibo-step3"
},
{
  name: "うさこ",
  text: "わあ、すごい", 
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  popupImg: "kakeibo-step3"
},
{
  name: "うさこ",
  text: "わあ、すごい<br>これを作ったらどう人生の役に立つの？", 
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "良い質問だね！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "ヒーロー",
  text: "良い質問だね！<br>ただの数字の記録だと思うかもしれないけど、実はこれが『自由への第一歩』なんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "自由への第一歩……？",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "うさこ",
  text: "自由への第一歩……？<br>大げさじゃない？",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "そんなことないよ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "ヒーロー",
  text: "そんなことないよ。<br>多くの人が『何にお金を使ったか』を正確に把握していないんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "ヒーロー",
  text: "だから、気づかないうちに『あれ？今月もお金がない』ってなってしまう。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "うっ……耳が痛い。まさに今の私だわ。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "家計簿を作ると、こんなグラフを簡単に作ることができるんだ！", 
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "ヒーロー",
  text: "エクセルで家計簿を作ると、自分が何にいくら使っているかが『見える化』される。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "ヒーロー",
  text: "そうすると、『あ、この無駄遣いを削れば、欲しかったあの服が買える！』とか『旅行に行く貯金ができる！』って気づけるんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "うさこ",
  text: "なるほど……！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "うさこ",
  text: "なるほど……！<br>ただ我慢するんじゃなくて、自分が本当に楽しく遊ぶためのお金を生み出せるってこと？",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "ヒーロー",
  text: "その通り！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "ヒーロー",
  text: "お金の流れを自分でコントロールできるようになれば、将来の不安が減って、人生の選択肢がぐっと広がるんだよ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
},
{
  name: "ヒーロー",
  text: "しかも、エクセルの基本操作も同時に身につくから、普段の『打ち込むだけの退屈な仕事』も圧倒的に早く終わらせることができるようになる！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
},
{
  name: "うさこ",
  text: "仕事も早く終わって、自由なお金も増える……！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_namidanokessyo.opus",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "仕事も早く終わって、自由なお金も増える……！<br>パソコンが苦手な私でも、挑戦してみる価値はありそうね。",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_namidanokessyo.opus",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "じゃあ、動画を見て、家計簿作ってみようかな！！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "うさこ",
  text: "じゃあ、動画を見て、家計簿作ってみようかな！！<br>がんばるぞ！！！！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "",
  text: "家計簿を作るステップを紹介します。",
  speaker: "none",
  showImgId: "none"
},
{
  name: "",
  text: "Step１では、表の枠組みの線を作成します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step1.webp"
},
{
  name: "",
  text: "Step１では、表の枠組みの線を作成します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step1.webp",
  popupLink: "#popup-step-1",
  popupBtnText: "Lesson 1：家計簿の表の作成"
},
{
  name: "",
  text: "Step２では、収入と支出に入力した金額から、収支の差や合計額を自動的に計算するシステムを入力します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step2.webp"
},
{
  name: "",
  text: "このように自動で計算するようにできます！",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/04/kakeibo_lesson_goal.jpg"
},
{
  name: "",
  text: "このように自動で計算するようにできます！",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/04/kakeibo_lesson_goal.jpg",
  popupLink: "#popup-step-2",
  popupBtnText: "Lesson 2：金額の自動計算"
},
{
  name: "",
  text: "Step３では、タブを更新して月ごとの家計簿の表を作成する方法を学びます。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step3.webp"
},
{
  name: "",
  text: "Step３では、タブを更新して月ごとの家計簿の表を作成する方法を学びます。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step3.webp",
  popupLink: "#popup-step-3",
  popupBtnText: "Lesson 3：タブ・次月への更新"
},
{
  name: "",
  text: "Step４では、作成した家計簿から支出を見える化する円グラフを作ります。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp"
},
{
  name: "",
  text: "Step４では、作成した家計簿から支出を見える化する円グラフを作ります。",
  speaker: "none",
  showImgId: "none",
  popupImg: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/excel-kakeibo_goal_step4.webp",
  popupLink: "#popup-step-4",
  popupBtnText: "Lesson 4：支出のグラフ作成"
},
{
  name: "",
  text: "ゲーム内で動画をパスした人はページの下部で一つずつ動画を見ながら家計簿を作成しよう！", 
  speaker: "none",
  showImgId: "none"
}
]

};

