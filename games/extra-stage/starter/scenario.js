
/**
 * ==========================================================
 * starter.js
 *
 * お部屋でちょっと練習
 * ・タップ操作
 * ・選択肢
 * ・popup
 * ==========================================================
 */

window.POPUP_MASTER = [
  { id: "tutorial_cake", src: "./img/tutorial_cake.webp"}, 
  { id: "tutorial_cookie", src: "./img/tutorial_cookie.webp"}
];

// ----------------------------------------------------------
// 初期化
// ----------------------------------------------------------

if (!window.storyFlow) window.storyFlow = {};

window.ML_POPUPS = window.ML_POPUPS || {};

window.ML_POPUPS["starter-popup"] = {
  title: "ちょっとしたヒント",
  blocks: [
    {
      type: "html",
      html: `
        <div style="
          padding: 12px 8px;
          text-align: center;
          line-height: 1.9;
        ">
          <p style="font-size:1.1em; font-weight:bold;">
            困ったときは、ここをのぞいてみよう！
          </p>

          <p>
            レッスンの途中には、
            説明やヒントを見るためのボタンが
            出てくることがあるよ。
          </p>

          <p>
            分からないときは、無理に進まず、
            ゆっくり考えてみてね。
          </p>

          <p style="margin-top:18px;">
            <strong>自分のペースで楽しもう！</strong>
          </p>
        </div>
      `
    }
  ]
};


// ----------------------------------------------------------
// ストーリー
// ----------------------------------------------------------

window.storyFlow["starter"] = {

  // ========================================================
  // はじまり
  // ========================================================

  msg_welcome: [

    {
      name: "うさこ",
      text: "あっ、来てくれたんだ！",
      speaker: "usako",
      bg: "living-room",
      showImgId: "img-usako-normal",
      posClass: "center-chara",
      bgm: "fraita"
    },

    {
      name: "うさこ",
      text: "ここは、わたしのお部屋。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "わたし、説明ヘタだから、代わりにヒーローに説明してもらうね！",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "うん。今日は、ちょっとだけ、ゲームの遊び方を一緒に練習してみようか。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      bgm: "escort",
      partnerAction: {
        id: "img-usako-sad",
        class: "right-chara"
      }
    },

    {
      name: "うさこ",
      text: "うん！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "「右下」の「次へ」ボタンを押すと、物語が進んでいくんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "きっと、みんな、さっきから押してるよ！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "そうだね、次は「選択肢」の練習をするよ",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },
    // ======================================================
    // ② 選択肢の練習
    // ======================================================

    {
      name: "ヒーロー",
      text: "ちょっと質問！おやつを食べるなら、どっちがいい？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      bgm: "sanpo",
      choices: [
        {
          text: "ケーキがいいな！",
          nextRoute: "tutorial_cake"
        },
        {
          text: "クッキーがいいな！",
          nextRoute: "tutorial_cookie"
        }
      ]
    }
  ],


  // ========================================================
  // ③ 選択結果：ケーキ
  // ========================================================

  tutorial_cake: [

    {
      name: "うさこ",
      text: "ケーキなんだね！私も甘いケーキ、大好き！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "tutorial_cake",
      nextRoute: "tutorial_popup"
    }
  ],


  // ========================================================
  // ③ 選択結果：クッキー
  // ========================================================

  tutorial_cookie: [

    {
      name: "うさこ",
      text: "クッキーなんだね！サクサクしておいしいよね！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "tutorial_cookie",
      nextRoute: "tutorial_popup"
    }
  ],


  // ========================================================
  // ④ popupの練習
  // ========================================================

  tutorial_popup: [

    {
      name: "ヒーロー",
      text: "そうそう！自分で好きなものを選んでいいんだよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "もう一つだけ。このボタンを押してみてくれる？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      popupLink: "#starter-popup",
      popupBtnText: "ヒントを見てみる！"
    },

    {
      name: "うさこ",
      text: "へぇー！こんなふうに説明が見られるんだね！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "そうだよ。でも、「次へ」ボタンを押してしまったら、見逃してしまうから、気をつけてね。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },


    // ======================================================
    // ⑤ おしまい
    // ======================================================

    {
      name: "うさこ",
      text: "思ったより簡単だったね！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "うん！これでちょっとした練習はおしまい。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "これから、いろんなレッスンを楽しみたいな！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "ゆっくり、自分のペースで楽しんでね！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      customAction: "returnToMenuScreen"
    }
  ]

};
