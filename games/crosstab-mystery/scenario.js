/*
 * 新作ごとに変更するのは、このゲームID、場面、会話、必要な素材IDです。
 * 共通エンジン・共通設定・既存ゲームのファイルは変更しないでください。
 */
if (!window.storyFlow) window.storyFlow = {};

// popupLink の #id は共通エンジンの openCustomModal に渡されます。
window.ML_POPUPS = window.ML_POPUPS || {};
window.ML_POPUPS['crosstab-clue'] = {
  title: '12人の回答カードをならべてみよう',
  blocks: [{
    type: 'html',
    html: `
      <img class="clue-image" src="./images/answer-cards.svg" alt="うさことぶきようくんが回答カードを見ているイラスト">
      <p>クラスの12人に、2つの質問をしました。</p>
      <div class="table-scroll"><table aria-label="話すことが好きかと発表係をやりたいかのクロス集計表">
        <thead><tr><th>話すのが好き？ ＼ 発表係したい？</th><th>したい</th><th>したくない</th><th>合計</th></tr></thead>
        <tbody>
          <tr><th>好き</th><td>4人</td><td>1人</td><td>5人</td></tr>
          <tr><th>好きではない</th><td>2人</td><td>5人</td><td>7人</td></tr>
          <tr><th>合計</th><td>6人</td><td>6人</td><td>12人</td></tr>
        </tbody>
      </table></div>
      <p class="note">行と列の交わるマスを見ると、「話すのが好き」かつ「発表係をしたい」人は4人。表は手がかりを見つける道具。理由まで決めつけず、次の調査でたしかめよう。</p>
    `
  }]
};

window.storyFlow['crosstab_mystery'] = {
  start: [
    { name: '', text: '放課後の教室。発表会の係を決めるため、クラスで小さなアンケートをとった。', speaker: '', bg: 'school-sakura' },
    { name: 'ぶきようくん', text: '「発表係をしたい人」は6人か。じゃあ、話すのが好きな人が多いんだな！', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara' },
    { name: 'うさこ', text: '待って。6人って、話すのが好きな人の数？ それとも発表係をしたい人の数？', speaker: 'usako', showImgId: 'img-usagi-happy', posClass: 'right-chara' },
    { name: 'ぶきようくん', text: 'あっ……同じ「6人」でも、聞いた質問がちがうのか。回答カードを2つの質問で並べ直してみよう！', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara', popupLink: '#crosstab-clue', popupBtnText: '回答カードを見る' },
    { name: 'うさこ', text: '表の「好き」×「したい」は4人。ここは、2つの答えが重なっているマスだね。', speaker: 'usako', showImgId: 'img-usagi-epiphany', posClass: 'right-chara' },
    { name: 'ぶきようくん', text: 'なるほど！ 合計の6人だけ見てたときは、誰と誰が重なっているか見えなかったんだ。', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara' },
    { name: 'うさこ', text: 'ではクイズ。表から読み取れるのはどっち？', speaker: 'usako', showImgId: 'img-usagi-happy', posClass: 'right-chara', choices: [
      { text: '「好き」かつ「したい」人は4人', nextRoute: 'ending_clue' },
      { text: 'したい人は全員、話すのが好き', nextRoute: 'ending_check' }
    ] }
  ],
  ending_clue: [
    { name: 'ぶきようくん', text: '正解！ 行と列の交わるマスを読めば、2つの答えがそろった人数がわかるんだね。', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara' },
    { name: 'うさこ', text: 'そうそう。でも、この表だけで「好きだから係をしたい」と理由まで決めつけないでおこう。', speaker: 'usako', showImgId: 'img-usagi-epiphany', posClass: 'right-chara' },
    { name: 'ぶきようくん', text: 'まずは「こんな関係があるかも」という手がかり。次は本人たちに聞いてみよう！', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara' },
    { name: '', text: '12枚の答えは、ただの数字から、次に聞いてみたいことへ変わった。調査ノートに「仮説」と書き、ふたりは教室を出た。', speaker: '' }
  ],
  ending_check: [
    { name: 'うさこ', text: '表をもう一度見てみよう。「好きではない」けれど「したい」人も、2人いるね。', speaker: 'usako', showImgId: 'img-usagi-happy', posClass: 'right-chara', popupLink: '#crosstab-clue', popupBtnText: '表を見直す' },
    { name: 'ぶきようくん', text: 'ほんとだ！ 「全員」とは言えないけれど、好きではなくてもやってみたい人がいるんだ。', speaker: 'bukiyokun', showImgId: 'img-bukiyokun-hard', posClass: 'left-chara' },
    { name: 'うさこ', text: '気づけたね。数字から人の気持ちを決めつけず、「どうしてかな？」を次の質問にしてみよう。', speaker: 'usako', showImgId: 'img-usagi-epiphany', posClass: 'right-chara' },
    { name: '', text: '「好きではないけれど、やってみたい」。そんな声を見つけたふたりは、本人に話を聞くための調査ノートを開いた。', speaker: '' }
  ]
};
