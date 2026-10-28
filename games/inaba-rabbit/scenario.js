/*
 * 因幡の白兎をモチーフにしたノベルゲーム
 * 「ひとつ、ふたつ、みっつ」は、うさこが渡る間の自然な数え声として使います。
 * ゲームID inaba_rabbit、開始場面 opening は index.html と一致させます。
 */

if (!window.storyFlow) {
  window.storyFlow = {};
}

window.storyFlow["inaba_rabbit"] = {

  // 最初の場面。最後の選択肢だけで、2つのゴールへ分かれます。
  opening: [
    {
      name: "",
      text: "白い砂浜の先には、うさこが渡りたい海が広がっている。",
      speaker: "",
      showImgId: "",
      bg: "the-ocean",
      bgm: "kuzira-umi"
    },
    {
      name: "うさこ",
      text: "向こう岸まで行きたいな。でも、泳いで渡るのは大変そう……。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "あれ？ 海の上に、背中が三つ並んでる。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara"
    },
    {
      name: "カズザメ",
      text: "向こう岸へ行きたいのかい？ ぼくたちが道になってあげるよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "一匹ずつ並べば、うさこが渡れるかもしれないね。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "みんなで道を作ってくれるの？ ありがとう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ひとつ……。最初の背中に、そっと乗る。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      partnerAction: {
        id: "img-kazuzame-normal",
        class: "left-chara"
      }
    },
    {
      name: "カズザメ",
      text: "ゆっくりで大丈夫。ぼくたちはここにいるよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame2-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ふたつ……。波の音に合わせて、次の背中へ。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara",
      partnerAction: {
        id: "img-kazuzame-normal",
        class: "center-chara"
      }
    },
    {
      name: "カズザメ",
      text: "あとひとつで、向こう岸だよ！",
      speaker: "kazuzame",
      showImgId: "img-kazuzame3-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "みっつ！ 着いたよ。ひとつ、ふたつ、みっつ……数えていたら、あっという間だった。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      partnerAction: {
        id: "img-kazuzame-normal",
        class: "right-chara"
      }
    },
    {
      name: "カズザメ",
      text: "よかった！ ところで、うさこは何を数えていたの？",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "center-chara",
      choices: [
        {
          text: "「みんなを数えて渡っていたの」と正直に話す",
          nextRoute: "ending_angry"
        },
        {
          text: "「渡らせてくれてありがとう」とお礼を言う",
          nextRoute: "ending_calm"
        }
      ]
    }
  ],

  // ゴール1：うさこが正直に話し、カズザメを怒らせる。
  ending_angry: [
    {
      name: "うさこ",
      text: "みんなを数えながら渡っていたの。ひとつ、ふたつ、みっつって。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "ぼくたちを数えていたの？ だまされたみたいで、ちょっと怒っちゃうぞ！",
      speaker: "kazuzame",
      showImgId: "img-kazuzame2-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "そっか……。助けてもらったのに、びっくりさせちゃった。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "カズザメたちは、ぷいっと海の方を向いた。うさこは岸辺から小さく「ありがとう」とつぶやく。",
      speaker: "",
      showImgId: ""
    },
    {
      name: "",
      text: "波の向こうで、カズザメの尾びれが一度だけ水面をたたいた。\nゴール：カズザメを怒らせてしまった。",
      speaker: "",
      showImgId: ""
    }
  ],

  // ゴール2：お礼を伝え、カズザメを怒らせずに渡り終える。
  ending_calm: [
    {
      name: "うさこ",
      text: "渡らせてくれてありがとう。みんなのおかげで向こう岸に着けたよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "カズザメ",
      text: "どういたしまして！ うさこの「みっつ！」って声、ちゃんと聞こえたよ。",
      speaker: "kazuzame",
      showImgId: "img-kazuzame-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "ひとつ、ふたつ、みっつ。みんなのこと、ちゃんと覚えておくね。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "うさこが振り返ると、三匹は波の上に並んだまま、ゆっくり尾びれを揺らしていた。",
      speaker: "",
      showImgId: ""
    },
    {
      name: "",
      text: "波音にまじって「またね」と聞こえた気がして、うさこは笑って手を振った。\nゴール：カズザメを怒らせず、向こう岸へ着いた。",
      speaker: "",
      showImgId: ""
    }
  ]
};
