if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["tutorial"] = {

  turorial_start: [
    { name: "",
      text: "ようこそ！まずはこのアプリの使い方をマスターしましょう！",
      speaker: "none",
      bg: "http://masulessonclass.sakura.ne.jp/mlc/novels/assets/images/bg_school-class.webp",
      showImgId: "none",
      nextRoute: "tutorial_start"
    }
  ],

  tutorial_start: [
    {
      name: "うさこ",
      text: "あ、新しい画面になった！ここがチュートリアルなんだね。",
      speaker: "usako",
      bg: "http://masulessonclass.sakura.ne.jp/mlc/novels/assets/images/bg_school-class.webp",
      showImgId: "img-usako-normal",
      posClass: "center-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_france_italia.opus"
    },
    {
      name: "うさこ",
      text: "画面をクリックするか、タップするとお話が進むみたい。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "ヒーロー",
      text: "その通り！よく気づいたね、うさこちゃん！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus",
      partnerAction: { id: "img-usako-normal", class: "right-chara" }
    },
    {
      name: "ヒーロー",
      text: "このシステムでは、お話の途中でポップアップを開いて学習を挟むことができるんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "さっそく練習として、オレンジ色のボタンを出すから、それを押してポップアップを開いてみてごらん？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "わあ、ボタンが出てきた！これを押せばいいんだね？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-1_tutorial",
      popupBtnText: "ボタンを押してみよう"
    },
    {
      name: "うさこ",
      text: "ポップアップを閉じて戻ってきたよ！ちゃんと「完了」のスタンプももらえた！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "素晴らしい！これでポップアップの使い方はバッチリだね。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "聞いておきたいことがあって、、、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "聞いておきたいことがあって、、、どんなことを学べるの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "うん、いい質問だね！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "ポップアップにまとめたから見てみてよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      popupLink: "#el-course",
      popupBtnText: "コース紹介"
    },
    {
      name: "うさこ",
      text: "へぇー、なんかちょっとむずかしそう。でも、ワクワクするね🥰",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "その気持ちが大事だよ！えらい！！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "次は「選択肢」の練習をしてみよう。どっちの道に進みたい？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      choices: [
        { text: "もっと詳しく使い方を学ぶ！", nextRoute: "tutorial_deep_study" },
        { text: "もうバッチリだから先に進む！", nextRoute: "tutorial_skip" }
      ]
    }
  ],

  tutorial_deep_study: [
    {
      name: "うさこ",
      text: "念のため、もうちょっと詳しく教えてほしいな！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "いい心がけだね！このアプリでは、学んだ内容を活かしてシミュレーションをすることもできるんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "ちょっと説明しておくね",
      speaker: "hero",
      showImgId: "img-hero-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-3_tutorial",
      popupBtnText: "説明"
    },
    {
      name: "ヒーロー",
      text: "これからの学習がどんどん楽しみになってくるはずだよ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "tutorial_end"
    }
  ],

  tutorial_skip: [
    {
      name: "うさこ",
      text: "直感で操作できるから、もうばっちり分かっちゃった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "頼もしいな！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "でも、その場合、ポップアップ問題が飛ばされて、花丸がもらえないこともあるから気をつけてね！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "わぁぁ、そうなんだ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ぜったい、花丸欲しいから、もらえなかったら、最初からやり直したいな！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "人生はやり直せないけど、このレッスンは何度でもやり直せるから安心してね！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "tutorial_end"
    },
    {
      name: "うさこ",
      text: "よかった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "ほかにみんなに伝えないといけない大事なことあったかな？！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "tutorial_end"
    }
  ],

  tutorial_end: [
    {
      name: "うさこ",
      text: "私たちの仲間のことも知ってほしいな！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
    },
    {
      name: "うさこ",
      text: "私もボタンを出してみよう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupBtnText: "ともだちの紹介！"
    },
    {
      name: "うさこ",
      text: "私もボタンを出してみよう！ひょい！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-4_tutorial",
      popupBtnText: "ともだちの紹介！"
    },
    {
      name: "ヒーロー",
      text: "よくできたね！すごい、すごい👏",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "褒めてもらっちゃった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "これでチュートリアルはすべて完了さ。よくがんばったね！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "やったー！早く本編のレッスンもやってみたいな！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "ヒーロー",
      text: "その意気だよ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
    },
    {
      name: "",
      text: "（シークレットステージへ招待します）",
      speaker: "",
      popupLink: "#popup-step-5_tutorial",
      popupBtnText: "こちら"
    },
    {
      name: "ヒーロー",
      text: "さあ、一度メニュー画面に戻って、好きなレッスンを選ぼう！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      customAction: "returnToMenuScreen" 
    }
  ]
};