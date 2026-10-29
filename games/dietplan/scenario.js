// 箱がなければ作り、その中の「dietplan」という部屋にデータを入れます
if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow.dietplan = {

msg_welcome_dietplan: [
    { name: "",
      text: "さあ、Excelを使って理想の自分をデザインする物語を始めましょう！！",
      speaker: "none",
      bg: "../../assets/bg/bg_gorogoro.webp",
      showImgId: "none",
      nextRoute: "diet_motiv"
    }
  ],

diet_motiv: [
{
  name: "うさこ", 
  text: "はぁ、また体重計に乗るのが怖い……。",
  speaker: "usako",
  bg: "../../assets/bg/bg_gorogoro.webp",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
  bgm: "../../assets/bgm/bgm_france_italia.opus" 
},
{
  name: "うさこ", 
  text: "はぁ、また体重計に乗るのが怖い……。また体重が増えちゃった。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "うさこ", 
  text: "はぁ、また体重計に乗るのが怖い……。また体重が増えちゃった。私って本当に意思が弱いのかな。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},

{
  name: "うさこ",
  text: "SNSで綺麗な人を見るたびに落ち込んじゃう。自分に自信が持てないなぁ。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara" 
},
{
  name: "うさこ",
  text: "「明日から頑張る」って何回言っただろう。",
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
  bgm: "../../assets/bgm/bgm_escort.opus",
  partnerAction: { id: "img-usako-sad", class: "right-chara" } 
},
{
  name: "うさこ",
  text: "きゃあ？！びっくりした！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "うさこ",
  text: "きゃあ？！びっくりした！体重聞いてた？！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "自分を変えたくて悩んでいる声が聞こえたから、来たよ！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "私、ダイエットできないみたい。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "うさこ",
  text: "私、ダイエットできないみたい。全然うまくいかなくて嫌になっちゃう。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "意思の問題じゃないんだよ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "えっ、どういうこと？？？！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "継続するには『環境』が大事なんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "ヒーロー",
  text: "継続するには『環境』が大事なんだ。ほかには、根性じゃなくて、正しい『計画』と『見える化』が役立つかもね！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},

{
  name: "ヒーロー",
  text: "エクセルでダイエットの計画表を作って見える化するのがいいかもね！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "えっ、エクセル使ってダイエット……？ってこと？",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "うさこ",
  text: "えっ、エクセル使ってダイエット……？ってこと？そんなこと考えたことなかった！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "ただ体重を記録するだけじゃなく、目標を立てて、うまくいかなかったら、軌道修正しながら継続を目指すんだ！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  choices: [
    { text: "「ダイエットの計画立ててみようかな？！」", nextRoute: "diet_plan" },
    { text: "「やっぱりサラダ生活を頑張る！」", nextRoute: "gaman_diet" },
    { text: "「明日からでいいやwww」", nextRoute: "gorogoro_diet" }
  ]
}
],

gaman_diet: [
{
  name: "うさこ",
  text: "今日からサラダしか食べないぞ！絶対に痩せてやるんだから！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "center-chara",
  bg: "../../assets/bg/bg_kitchen.webp",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "お腹すいたなぁ……。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "うさこ",
  text: "お腹すいたなぁ……。でも我慢、我慢……。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "",
  text: "・・・・・・３日後",
  speaker: "none",
  showImgId: "none"
},
{
  name: "うさこ",
  text: "お腹すいたなぁ……。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "うさこ",
  text: "お腹すいたなぁ……。でも我慢、我慢……。",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "うさこ",
  text: "もう限界！ガマンできない！ドカ食いしちゃえー！！",
  speaker: "usako",
  showImgId: "img-usako-sad",
  posClass: "center-chara",
},
{
  name: "",
  text: "バクバク、バクバク、バクバク。。。",
  speaker: "none",
  showImgId: "none",
  nextRoute: "diet_motiv"
}
],

gorogoro_diet: [
{
  name: "うさこ",
  text: "どうせ私には無理だし。ポテチ食べながらスマホ見てる時間が一番幸せ～。",
      bg: "../../assets/bg/bg_gorogoro.webp",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "あ～あ、画面の中の人はみんな綺麗だなぁ……",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "あ～あ、画面の中の人はみんな綺麗だなぁ……（モグモグ）",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "あ～あ、画面の中の人はみんな綺麗だなぁ……（モグモグ）（モグモグ）",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "あ～あ、画面の中の人はみんな綺麗だなぁ……（モグモグ）（モグモグ）（モグモグ）",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "うさこ",
  text: "あ～あ、画面の中の人はみんな綺麗だなぁ……（モグモグ）（モグモグ）（モグモグ）（モグモグ）（モグモグ）（モグモグ）",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "gorogoro-chara",
},
{
  name: "",
  text: "・・・・・・１か月後",
  speaker: "none",
  showImgId: "none",
  nextRoute: "diet_motiv"
}
],

diet_plan: [
{
  name: "ヒーロー",
  text: "素晴らしい決断だね！その一歩が、新しい自分へのスタートラインだよ！", 
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
      bg: "../../assets/bg/bg_gorogoro.webp",
  bgm: "../../assets/bgm/bgm_kaeru-piano.opus",
  partnerAction: { id: "img-usako-sad", class: "right-chara" }
},
{
  name: "うさこ",
  text: "うん！でも、具体的にどんなものを作るの？",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "こんな風に、自分の目標体重までの道のりをしっかり管理できる計画表だよ！",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_goal-image.jpg"
},
{
  name: "うさこ",
  text: "わあ、すごい！本格的！でもこれを作ると、どう人生が変わるの？", 
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_goal-image.jpg"
},
{
  name: "ヒーロー",
  text: "多くの人がダイエットに失敗するのは、『なんとなく』で始めてしまうからなんだ。ゴールまでの地図がない状態で暗闇を走るようなものさ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_goal-image.jpg"
},
{
  name: "ヒーロー",
  text: "でも、エクセルで計画表を作ると、『１日にあと何キロカロリー抑えればいいか』『今どれくらい順調か』がすべて数字で『見える化』されるんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_goal-image.jpg"
},
{
  name: "うさこ",
  text: "数字で見えるようになると、どうして続けられるの？",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "ヒーロー",
  text: "それはね、『自分で自分の体をコントロールできている！』という実感が湧くからだよ。これが最高の『自信』になるんだ。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "ヒーロー",
  text: "ただ闇雲に我慢するんじゃなくて、『今日はこれだけ頑張ったから、週末は友達と楽しく美味しいものを食べよう！』っていう選択も自分で自由にできるようになる。",
  speaker: "hero",
  showImgId: "img-hero-happy",
  posClass: "left-chara"
},
{
  name: "うさこ",
  text: "なるほど……！我慢のための計画じゃなくて、人生を思いっきり楽しむための計画表なんだね！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara",
  bgm: "../../assets/bgm/bgm_namidanokessyo.opus",
  partnerAction: { id: "img-hero-happy", class: "hidden-chara" }
},
{
  name: "うさこ",
  text: "自分で体型を管理できるようになれば、好きな服を着て出かけるのも絶対に楽しくなる！私、自分を好きになりたい！やってみる！",
  speaker: "usako",
  showImgId: "img-usako-normal",
  posClass: "right-chara"
},
{
  name: "",
  text: "それでは、ダイエット計画表を作成するステップを紹介します。",
  speaker: "none",
  showImgId: "none"
},
{
  name: "",
  text: "Step１では、計画表のベースとなる枠組みとデザインを作成します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step1.png"
},
{
  name: "",
  text: "Step１では、計画表のベースとなる枠組みとデザインを作成します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step1.png",
  popupLink: "#popup-step-1-diet-plan",
  popupBtnText: "Lesson 1：計画表の表作成"
},
{
  name: "",
  text: "Step２では、現在の体重や目標値を入力した際に、必要な消費カロリーを自動で算出する計算式を組み込みます。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step2.png"
},
{
  name: "",
  text: "Step２では、現在の体重や目標値を入力した際に、必要な消費カロリーを自動で算出する計算式を組み込みします。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step2.png",
  popupLink: "#popup-step-2-diet-plan",
  popupBtnText: "Lesson 2：カロリーの自動計算"
},
{
  name: "",
  text: "Step３では、日々の体重推移を自動でグラフ化し、自分の頑張りがひと目でわかるように設定します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step3.png"
},
{
  name: "",
  text: "Step３では、日々の体重推移を自動でグラフ化し、自分の頑張りがひと目でわかるように設定します。",
  speaker: "none",
  showImgId: "none",
  popupImg: "https://www.masulesson.com/wp-content/uploads/2026/03/diet-plan_step3.png",
  popupLink: "#popup-step-3-diet-plan",
  popupBtnText: "Lesson 3：推移グラフの作成"
},
{
  name: "",
  text: "ゲーム内で動画をパスした人は、ページの下部で一つずつ動画を見ながら、自分だけのダイエット計画表を完成させよう！", 
  speaker: "none",
  showImgId: "none"
}
],

msg_congratulations_diet: [
    { name: "",
      text: "ダイエット計画表の完成おめでとうございます！",
      speaker: "none",
      showImgId: "none",
      nextRoute: "diet_motiv"
    }
  ]

};