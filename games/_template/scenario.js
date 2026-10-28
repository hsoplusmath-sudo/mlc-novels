/*
 * 新作ゲーム用シナリオひな形
 *
 * 【新作ごとに変更する箇所】
 * - window.storyFlow["template_game"] のゲームID
 * - 最初の場面ID "start"（index.html の開始指定と一致させる）
 * - 各場面の会話、必要な素材ID、次の場面ID
 *
 * 【変更しない共通部分】
 * - window.storyFlow を用意する仕組み
 * - 共通エンジンが読むシーン配列の形
 */

if (!window.storyFlow) {
  window.storyFlow = {};
}

// 【新作ごとに変更】index.html の第4引数 template_game と同じIDにします。
window.storyFlow["template_game"] = {

  // 【新作ごとに変更】index.html の第1引数 start と同じ場面IDです。
  start: [
    {
      name: "シーくん",
      text: "ここから、新しい物語が始まるよ。",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara",
      bg: "kinjo-jinja",
      bgm: "jinja-icho"
    },
    {
      name: "うさこ",
      text: "どんな発見に出会えるのかな？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      nextRoute: "ending"
    }
  ],

  // 【新作ごとに変更】場面は、移動先に使うIDと同じ名前で登録します。
  ending: [
    {
      name: "シーくん",
      text: "サンプルのお話はここまでです。",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara"
    }
  ]
};
