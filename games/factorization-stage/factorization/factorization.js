if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["factorization"] = {

  /* =========================================
     因数分解
     不思議な面積
  ========================================= */

  factorization_start: [
    {
      name: "うさこ",
      text: "先生、これなあに？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      bg: "classroom",
      bgm: "kaeru"
    },
    {
      name: "先生",
      text: "今日は、ちょっと不思議なパズルを用意したよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "ここに3つの面積があるんだ。<br>同じ色の長さは一緒だよ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "正方形と、横長の長方形と、あと「10」ってなんだろ？！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "［課題］この3つを全部使って、ひとつの大きな長方形を作ること。",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "えっ！どうやって作るのかな？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "まずは、ちゃんとした形の方から考えてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ここと、ここは同じ色だからくっつけるよ！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "それがいいよね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "「10」は自分で形を作っていいんだよ",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うーん……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      choices: [
        {
          text: "横に置いてみる",
          nextRoute: "factorization_right"
        },
        {
          text: "下に置いてみる",
          nextRoute: "factorization_below"
        }
      ]
    }
  ],

  /* =========================================
     選択肢① 横に置く
  ========================================= */

  factorization_right: [
    {
      name: "うさこ",
      text: "右側に置いてみよう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ほら、こんな風に置いたら、ひとつの長方形だよ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "でもね。。。。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "グネグネ",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "おっきくなった！！あれ？さっきと同じ形の四角形じゃ、うまく合わないよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "私の長方形があーー。うまく合わなくなった！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "このパズルは生きているからね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "この四角形たちが、おっきくなってもちいさくなっても",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うまく長方形になるようにしなきゃいけないんだよね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      choices: [
        {
          text: "ぐるっと周りを囲む",
          nextRoute: "factorization_round"
        },
        {
          text: "長方形をパキッと割る",
          nextRoute: "factorization_split"
        }
      ]
    }
  ],

  /* =========================================
     選択肢② 下に置く
  ========================================= */

  factorization_below: [
    {
      name: "うさこ",
      text: "下側に置いてみよう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ほら、こんな風に置いたら、ひとつの長方形だよ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "でもね。。。。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "グネグネ",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "おっきくなった！！あれ？さっきと同じ形の四角形じゃ、うまく合わないよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "私の長方形があーー。うまく合わなくなった！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "このパズルは生きているからね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "この四角形たちが、おっきくなってもちいさくなっても",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うまく長方形になるようにしなきゃいけないんだよね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      choices: [
        {
          text: "ぐるっと周りを囲む",
          nextRoute: "factorization_round"
        },
        {
          text: "長方形をパキッと割る",
          nextRoute: "factorization_split"
        }
      ]
    }
  ],

  /* =========================================
     選択肢③ 周りを囲む
  ========================================= */

  factorization_round: [
    {
      name: "うさこ",
      text: "よーし！周りをぐるっと囲んでみよう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "できたーー！！ほら、きれいな長方形になったよ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "おお！これは見事だね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "グネグネ",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "あれ？…………、あぶない……！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "パチン！！",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "きゃーー！！「10」が破裂しちゃった！！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "あらら……。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "周りを囲むだけだと、長方形が大きくなることを止められなかったね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "GAME OVER",
      speaker: "",
      showImgId: "",
      posClass: "",
      customAction: "returnToMenuScreen"
    }
  ],

  /* =========================================
     選択肢③ 長方形を割る
  ========================================= */

  factorization_split: [
    {
      name: "うさこ",
      text: "うまく長方形にする方法なんてあるの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "あるんだよ！「7x」の長方形を割ってみよう！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "そんなことしてよかったの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "いいね！どこで分けたらいいか考えてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うーん……。どこで割ろうかな？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      choices: [
        {
          text: "3と4に分ける",
          nextRoute: "factorization_split_34"
        },
        {
          text: "2と5に分ける",
          nextRoute: "factorization_split_25"
        }
      ]
    }
  ],

  /* =========================================
     3と4に分ける
  ========================================= */

  factorization_split_34: [
    {
      name: "うさこ",
      text: "よし！3と4に分けてみよう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "同じ色だから、こんな風にくっつけて……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "あれ？右下に、四角い隙間ができたよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "本当だね。そこに「10」を入れてみようか。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "えーっと……。あれ？大きさが合わないよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "隙間は、3と4の長さでできているんだね……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そうだね。分け方を変えたら、隙間の形も変わるかもしれないね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "もしかして……！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      choices: [
        {
          text: "もしかして……",
          nextRoute: "factorization_split_25"
        }
      ]
    }
  ],

  /* =========================================
     2と5に分ける
  ========================================= */

  factorization_split_25: [
    {
      name: "うさこ",
      text: "2と5に分けてみよう！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "同じ色だから、2の長方形と、5の長方形をこんな風にくっつけて……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "隙間があるね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "こっちは2と5の長さだから……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "あっ！2×5で10だ！！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう！ちょうど「10」と同じ面積になったね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "やったー！ぴったりはまったよ！！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "グネグネ",
      speaker: "",
      showImgId: "",
      posClass: ""
    },
    {
      name: "うさこ",
      text: "わあ！大きくなったり、小さくなったりしても、ちゃんと「10」がはまってる！！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "不思議だね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "どうして、どんな大きさになっても、うまくいくんだろう？",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      choices: [
        {
          text: "どうしてだろう？",
          nextRoute: "factorization_discovery"
        }
      ]
    }
  ],

  /* =========================================
     発見
     どんな長さでも成り立つ関係
  ========================================= */

  factorization_discovery: [
    {
      name: "うさこ",
      text: "ねえ先生。さっきから不思議なんだけど……。",
      speaker: "usako",
      showImgId: "img-usako-thinking",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "正方形を小さくしても、大きくしても、ちゃんと長方形になるんだね！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そうだね。どうしてだと思う？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うーん……。どんな大きさでも、同じ並べ方ができるから？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そのとおり！実は、今日は長さが分からなくても成り立つ関係を探していたんだよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "長さが分からなくても？",
      speaker: "usako",
      showImgId: "img-usako-surprised",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう。例えば、正方形の一辺がどれくらい長いのか、今は決めなくてもいいんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "でも、それで本当に大丈夫なの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "うん。どんな長さだったとしても、この並べ方なら必ず長方形ができるよね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "あっ！だから、何度も大きさを変えて試していたんだね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そうなんだ。どんな長さでも成り立つ方法を見つけたかったんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "それって凄いね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "これが算数と数学の違いで「x」の役割なんだ！",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "center-chara"
    }
],



  /* =========================================
     文字と式の導入
  ========================================= */
factorization_hs: [
  {
    name: "うさこ",
    text: "グネグネ動くから困るよ……。大きさが変わると、長さが分からなくなっちゃう！",
    speaker: "usako",
    showImgId: "img-usako-sad",
    posClass: "right-chara",
    bg: "classroom",
    bgm: "kaeru"
  },
  {
    name: "先生",
    text: "そうだね。じゃあ、名前をつけたらいいんだよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "名前をつけるの？",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "そう。長さが分からないところに、名前をつけてみよう。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "あっ！それが「x」なんだ。",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "えっ……？",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara"
  },

  /* =========================================
     式に整理する
  ========================================= */

  {
    name: "先生",
    text: "この生き物たちの状況を整理するよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "",
    text: "",
    speaker: "none",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/factorization/assets/factorization-formula.png"
  },
  {
    name: "先生",
    text: "正方形の面積は「x²」、長方形の面積は「7x」、最後の四角形は「10」だね。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "ちなみに、こういうひとつひとつの式を「単項式」と言うよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "じゃあ、全部の面積を合わせると……？",
    speaker: "usako",
    showImgId: "img-usako-thinking",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "そう。全部の面積は「x² + 7x + 10」だね。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "こういう式を「多項式」と言うんだよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },

  /* =========================================
     最初の発見に戻る
  ========================================= */

  {
    name: "先生",
    text: "ところで、はじめはどうやって長方形を作ろうとしたんだっけ？",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara",
    choices: [
      {
        text: "3と4で分けた",
        nextRoute: "factorization_review_34"
      },
      {
        text: "2と5で分けた",
        nextRoute: "factorization_review_25"
      }
    ]
  },
],

  /* =========================================
     式で振り返る：3と4
  ========================================= */

  factorization_review_34: [
    {
      name: "うさこ",
      text: "そうそう！3と4に分けたんだった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "じゃあ、あのときの図をもう一度見てみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/factorization/assets/factorization-split-34.png"
    },
    {
      name: "先生",
      text: "「7x」を3xと4xに分けたんだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "そうだよ！3xと4xを合わせたら7xになるもんね！",
      speaker: "usako",
      showImgId: "img-usako-happy",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "それじゃあ、図のそれぞれの面積を式にしてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "正方形はx²、横の長方形は3x、縦の長方形は4xだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "それから、隙間は3×4だから……12だ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "全部を合わせると、x² + 3x + 4x + 12 になるね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "あれ？最後の四角形は「10」だったよね？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう。12と10では、面積が違うね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "だから、うまくはまらなかったんだ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      choices: [
        {
          text: "2と5の場合も見てみる",
          nextRoute: "factorization_review_25"
        }
      ]
    }
  ],
  
  /* =========================================
     式で振り返る：2と5
  ========================================= */

  factorization_review_25: [
    {
      name: "うさこ",
      text: "じゃあ、2と5に分けたときはどうなるんだろう？",
      speaker: "usako",
      showImgId: "img-usako-thinking",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "同じように、図を見ながら考えてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/factorization/assets/factorization-split-25.png"
    },
    {
      name: "先生",
      text: "今度は「7x」を2xと5xに分けたんだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "うん！2xと5xを合わせたら7xになるよ！",
      speaker: "usako",
      showImgId: "img-usako-happy",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "じゃあ、隙間の面積はどうなるかな？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "2×5だから……10だ！！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう！全部の面積を式にすると、x² + 2x + 5x + 10 になるね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "あっ！2xと5xを合わせたら7xだから……。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "x² + 7x + 10！最初の式と同じになったよ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そのとおり。だから、2と5に分けたときは、ぴったり長方形になったんだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "なるほど！式で考えると、どうしてうまくいったのか分かるね！",
      speaker: "usako",
      showImgId: "img-usako-happy",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そして、この式はこんなふうにも書けるよ。",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/factorization/assets/factorization-factorized.png"
    },
    {
      name: "うさこ",
      text: "えっ！さっきの長方形の形が、そのまま式になっているんだ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう。こうして、ひとつの式をいくつかの式の積に表すことを「因数分解」というんだよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "図で見つけたことが、数学の式につながったんだね！",
      speaker: "usako",
      showImgId: "img-usako-happy",
      posClass: "right-chara",
      customAction: "returnToMenuScreen"
    }
  ],
};