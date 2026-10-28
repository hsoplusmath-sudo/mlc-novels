/*
 * 因幡の白兎
 * カズザメとまるかが交互に足場となり、うさこが海を渡る物語
 *
 * ルール：
 * ・大和言葉、中国語読み、英語の3種類から選ぶ
 * ・10回すべて同じ数え方なら成功
 * ・途中で数え方を変えると海に落ちる
 * ・成功ルートは共通のお礼場面に合流
 * ・選択肢の表示順は毎回ランダム
 */

if (!window.storyFlow) {
  window.storyFlow = {};
}

/* ----------------------------------------
   選択肢の順番をランダムにする
---------------------------------------- */

function shuffleInabaChoices(choices) {
  const shuffled = [...choices];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/* ----------------------------------------
   数え方の設定
---------------------------------------- */

const inabaCounting = {
  yamato: [
    "ひー", "ふー", "みー", "よー", "いつー",
    "むー", "ななー", "やー", "ここのー", "とー"
  ],

  chinese: [
    "イー", "アル", "サン", "スー", "ウー",
    "リュー", "チー", "パー", "ジウ", "シー"
  ],

  english: [
    "ワン", "ツー", "スリー", "フォー", "ファイブ",
    "シックス", "セブン", "エイト", "ナイン", "テン"
  ]
};

/* ----------------------------------------
   ストーリー本体
---------------------------------------- */

window.storyFlow["inaba_rabbit"] = {

  /* ========================================
     オープニング
  ======================================== */

  opening: [
    {
      name: "",
      text: "青い海が、きらきらと光っている。波の向こうには、白い砂浜が見えた。",
      speaker: "",
      showImgId: "",
      bg: "the-ocean",
      bgm: "kuzira-umi"
    },
    {
      name: "うさこ",
      text: "あっちの岸まで行ってみたいなあ……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "あの砂浜には、どんな景色が広がっているんだろう。自分の目で見てみたいな。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "でも……海は広いなあ。泳いで渡るのは、ちょっとこわいよ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "うさこは、波打ち際で立ち止まった。行ってみたい。でも、どうしたらいいんだろう。",
      speaker: "",
      showImgId: ""
    },
    {
      name: "うさこ",
      text: "あれ？ 海の上に、背中が見える……。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "カズザメ",
      text: "おーい！ どうしたんだい？ 向こう岸へ行きたいのかい？",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "うん。でも、泳いでいくのはむずかしそうで……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara"
    },
    {
      name: "カズザメ",
      text: "そっか。それなら、ぼくの背中を足場にしていいよ！",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "えっ、本当？ でも、カズザメひとりで大丈夫なの？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "カズザメ",
      text: "もちろん！ おーい、まるか！ こっちに来て、うさこの足場になってくれないか！",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "まるか",
      text: "はーい！ くじらのまるかだよ！ うさこ、わたしの背中も使ってね。",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ありがとう！ ふたりがいてくれたら、向こう岸まで行けるかもしれないね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "カズザメ",
      text: "うん。でも、背中から背中へ移るときは、あわてないでね。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "まるか",
      text: "そうだ！ ひとつずつ数えながら進んだらどうかな？ 次の足場がわかりやすいよ。",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ひとつずつ……。そっか！ 数えながら進めばいいんだね。よし、やってみる！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      nextRoute: "step1"
    }
  ],

  /* ========================================
     1〜10回目の数え方を選ぶ場面を生成
  ======================================== */

  ...(() => {
    const routes = {};

    const yamato = inabaCounting.yamato;
    const chinese = inabaCounting.chinese;
    const english = inabaCounting.english;

    for (let i = 1; i <= 10; i++) {

      const choices = [
        {
          text: yamato[i - 1],
          count: { countYamato: 1 },
          nextRoute: i < 10 ? `response${i}` : undefined,
          branch: i === 10 ? [
            {
              if: { countYamato: 10 },
              nextRoute: "ending_yamato"
            }
          ] : undefined,
          elseRoute: i === 10 ? "ending_fall" : undefined
        },
        {
          text: chinese[i - 1],
          count: { countChinese: 1 },
          nextRoute: i < 10 ? `response${i}` : undefined,
          branch: i === 10 ? [
            {
              if: { countChinese: 10 },
              nextRoute: "ending_chinese"
            }
          ] : undefined,
          elseRoute: i === 10 ? "ending_fall" : undefined
        },
        {
          text: english[i - 1],
          count: { countEnglish: 1 },
          nextRoute: i < 10 ? `response${i}` : undefined,
          branch: i === 10 ? [
            {
              if: { countEnglish: 10 },
              nextRoute: "ending_english"
            }
          ] : undefined,
          elseRoute: i === 10 ? "ending_fall" : undefined
        }
      ].map(choice => {
        const cleaned = { ...choice };

        if (cleaned.nextRoute === undefined) {
          delete cleaned.nextRoute;
        }
        if (cleaned.branch === undefined) {
          delete cleaned.branch;
        }
        if (cleaned.elseRoute === undefined) {
          delete cleaned.elseRoute;
        }

        return cleaned;
      });

      const stepNames = [
        "ひとつ目", "ふたつ目", "みっつ目", "よっつ目", "いつつ目",
        "むっつ目", "ななつ目", "やっつ目", "ここのつ目", "最後"
      ];

      routes[`step${i}`] = [
        {
          name: "うさこ",
          text: `${stepNames[i - 1]}の足場！ どの数え方で進もう？`,
          speaker: "usako",
          showImgId: "img-usako-normal",
          posClass: "center-chara",
          choices: shuffleInabaChoices(choices)
        }
      ];

      if (i < 10) {
        const isKazuzame = i % 2 === 1;

        routes[`response${i}`] = [
          {
            name: isKazuzame ? "カズザメ" : "まるか",
            text: [
              "いい調子だよ！ あわてずに、次の背中へ進んでね。",
              "波にゆられても大丈夫。しっかり足元を見てね。",
              "ひとつずつ進めば、向こう岸に近づいていくよ。",
              "うさこの声が波の音にまじって聞こえるね！",
              "半分くらいまで来たね。もう少しだよ！",
              "あわてなくていいよ。次の足場もちゃんとあるからね。",
              "その調子！ 目の前の一歩を大切にしよう。",
              "向こう岸が近づいてきたよ。最後までゆっくりね。",
              "あと一歩！ 次の足場に移れば、向こう岸はもうすぐそこだよ。"
            ][i - 1],
            speaker: isKazuzame ? "kazuzame" : "maruka",
            showImgId: isKazuzame
              ? "img-kazuzame-normal"
              : "img-maruka-normal",
            posClass: "center-chara",
            partnerAction: {
              id: isKazuzame
                ? "img-maruka-normal"
                : "img-kazuzame-normal",
              class: "right-chara"
            },
            nextRoute: `step${i + 1}`
          }
        ];
      }
    }

    return routes;
  })(),

  /* ========================================
     10回同じ数え方で渡れた場合
  ======================================== */

  ending_yamato: [
    {
      name: "カズザメ",
      text: "大和言葉で10まで数えたんだね！ ひー、ふー、みー……。やさしい響きだったね。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "left-chara",
      nextRoute: "gratitude"
    }
  ],

  ending_chinese: [
    {
      name: "まるか",
      text: "中国語読みで10まで数えたんだね！ イー、アル、サン……。リズムよく進めたね。",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara",
      nextRoute: "gratitude"
    }
  ],

  ending_english: [
    {
      name: "カズザメ",
      text: "英語で10まで数えたんだね！ ワン、ツー、スリー……。元気な声が海に響いていたよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "left-chara",
      nextRoute: "gratitude"
    }
  ],

  /* ========================================
     途中で数え方を変えた場合
  ======================================== */

  ending_fall: [
    {
      name: "うさこ",
      text: "あっ……！ あれ？ 足場が……！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "うさこは、足を踏み外して海に落ちてしまった。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "gorogoro-chara"
    },
    {
      name: "まるか",
      text: "うさこ、大丈夫！？ つかまって！",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ぷはっ！ びっくりした……。数え方を変えたら、足場をうまく渡れなかったよ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "gorogoro-chara"
    },
    {
      name: "",
      text: "エンド：数え方を途中で変えて、海に落ちてしまった。",
      speaker: "",
      showImgId: ""
    }
  ],

  /* ========================================
     共通のお礼場面
  ======================================== */

  gratitude: [
    {
      name: "うさこ",
      text: "やったー！ 向こう岸に着いたよ！ カズザメ、まるか、ふたりともありがとう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "どういたしまして！ うさこが無事に渡れてよかったよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "left-chara"
    },
    {
      name: "まるか",
      text: "みんなで力を合わせると、うれしい気持ちも大きくなるね！",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ふたりに、なんて答えよう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      choices: [
        {
          text: "助けてくれてありがとう！",
          nextRoute: "ending_happy"
        },
        {
          text: "お礼を言わず、そのまま行こうとする",
          nextRoute: "ending_bitten"
        }
      ]
    }
  ],

  /* ========================================
     ハッピーエンド
  ======================================== */

  ending_happy: [
    {
      name: "うさこ",
      text: "カズザメ、まるか、助けてくれて本当にありがとう！ ふたりがいてくれたから、向こう岸まで来られたよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "どういたしまして！ ちゃんとお礼を言ってくれて、うれしいよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "left-chara"
    },
    {
      name: "まるか",
      text: "みんなで力を合わせると、うれしい気持ちも大きくなるね！",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "三人は笑い合った。海には、あたたかな波の音が広がっていく。\nゴール：ありがとう、みんなハッピー！",
      speaker: "",
      showImgId: ""
    }
  ],

  /* ========================================
     お礼を言わず、カズザメにかまれるエンド
  ======================================== */

  ending_bitten: [
    {
      name: "うさこ",
      text: "……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "おーい！ 助けてもらったのに、お礼も言わずに行くのかい？",
      speaker: "kazuzame",
      showImgId: "img-kazuzame2-normal",
      posClass: "right-chara",
      partnerAction: {
        id: "img-usako-normal",
        class: "right-chara"
      }
    },
    {
      name: "うさこ",
      text: "きゃー！ ごめんなさい！ お礼を言うのを忘れてた！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara",
      partnerAction: {
        id: "img-kazuzame-normal",
        class: "right-chara"
      }
    },
    {
      name: "",
      text: "カズザメは、うさこにガブリ！ ……でも、すぐに離してくれた。まるかは、うさこに「助けてもらったら、ありがとうって伝えようね」と話した。\nゴール：お礼を忘れて、かまれちゃった。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    }
  ]

};