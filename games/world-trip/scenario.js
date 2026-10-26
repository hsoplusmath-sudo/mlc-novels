
if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["worldtrip"] = {

  // =====================================================
  // ⓪ 野原：冒険のはじまり
  // =====================================================
  start_nohara: [
    {
      name: "",
      text: "ここは、いつもの野原。いつもの空。いつもの帰り道。",
      speaker: "none",
      showImgId: "none",
      bg: "nohara"
    },
    {
      name: "うさこ",
      text: "ねえ、うさぎ。毎日見ているこの世界って、どこまで続いているんだろう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "おっ、うさこ！ いきなり大きな疑問だね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "山の向こうには何があるの？ 海の向こうは？ その先は？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "知らない場所があるなら、行ってみたくない？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "right-chara"
    },
    {
      name: "ぶきようくん",
      text: "ぼ、ぼくは遠くまで行くのは、ちょっと苦手だけど……。",
      speaker: "bukiyokun",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "大丈夫！ 最初から何でもできる必要なんてないよ。一歩ずつ進めばいいんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "そうだ！ まずは近所を探検しようよ。ほら、あそこの神社！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara"
    },
    {
      name: "ヒーロー",
      text: "神社か。いつも前を通るだけだったな。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "いつもの景色の中に、知らない世界を探しに行こう！",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "center-chara",
      partnerAction: {  id: "img-hero-happy", class: "hidden-chara"  },
      nextRoute: "manabiya_intro"
    }
  ],

  // =====================================================
  // ⓪ 学び舎：冒険の準備
  // =====================================================
  manabiya_intro: [
    {
      name: "うさぎ",
      text: "出発前に、ひとつだけ覚えておいてほしいことがあるんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara",
      bg: "manabiya"
    },
    {
      name: "うさこ",
      text: "えっ、冒険のルール？ 危険な場所には近づかない、とか？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "それも大事！ でも、もうひとつ。分からないことに出会ったら、すぐに諦めないこと。",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "center-chara"
    },
    {
      name: "ぶきようくん",
      text: "分からないのに、諦めないの？ それって難しくない？",
      speaker: "bukiyokun",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "分からないからこそ、面白いこともあるんだよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "『なんで？』って考えるところから、発見が始まるんだね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "失敗したっていい。気づいたことは、きみだけの宝物になる。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "ぶきようくん",
      text: "ぼくが苦手なことにも、何か発見があるかもしれないんだね。",
      speaker: "bukiyokun",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "よーし！ 今日はどんな宝物が見つかるかな？",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "未知の世界への第一歩。さあ、近所の神社へ出発だ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara",
      partnerAction: {  id: "img-bukiyokun-hard",  class: "hidden-chara" },
      nextRoute: "shrine_gate"
    }
  ],

  // =====================================================
  // ① 近所の神社：二匹の狛犬
  // シーくんとサーちゃんは左右に同時表示
  // =====================================================
  shrine_gate: [
    {
      name: "",
      text: "近所の神社に到着！ 鳥居の向こうから、何か視線を感じる……。",
      speaker: "none",
      showImgId: "none",
      bg: "kinjo-jinja"
    },
    {
      name: "シーくん",
      text: "待った！ ここから先へ進むなら、まずはおれたちに挨拶していきな！",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara",
      partnerAction: {  id: "img-satyan-happy", class: "right-chara" }
    },
    {
      name: "サーちゃん",
      text: "シーくん、いきなり大声を出さないの！ びっくりしてるでしょ？",
      speaker: "satyan",
      showImgId: "img-satyan-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "うわっ！ 狛犬がしゃべった！？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "center-chara"
    },
    {
      name: "シーくん",
      text: "ははは！ おれたちは、この神社を守る狛犬だからな！",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara",
      partnerAction: {  id: "img-satyan-happy",   class: "right-chara"  }
    },
    {
      name: "うさぎ",
      text: "ねえ、二匹はずっとここにいるの？ 毎日、何を見ているの？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "center-chara"
    },
    {
      name: "サーちゃん",
      text: "人の行き来、風の音、木々の揺れ。同じ場所でも、毎日違うことが起きるのよ。",
      speaker: "satyan",
      showImgId: "img-satyan-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "同じ場所なのに毎日違う？ よく観察したら、何か見つかるってこと？",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    {
      name: "シーくん",
      text: "その通り！ 目の前の景色を、ただ通り過ぎるだけじゃもったいないぞ！",
      speaker: "sikun",
      showImgId: "img-sikun-happy",
      posClass: "left-chara"
    },
    {
      name: "サーちゃん",
      text: "ふふっ。次は、もっと山の奥へ行ってみない？",
      speaker: "satyan",
      showImgId: "img-satyan-happy",
      posClass: "right-chara",
      nextRoute: "misen_forest",
      partnerAction: {  id: "img-sikun-happy",  class: "hidden-chara"   }
    }
  ],

  // =====================================================
  // ② 厳島・弥山モチーフ：森の奥の出会い
  // =====================================================
  misen_forest: [
    {
      name: "",
      text: "神社をあとにして、山の奥へ。町の音がだんだん遠くなっていく。",
      speaker: "none",
      showImgId: "none",
      bg: "itukushima-misen",
      partnerAction: {  id: "img-satyan-happy", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "わあ……。木がいっぱい。上を見ても、葉っぱばっかり！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    }, 
    {
      name: "うさぎ",
      text: "足元も見てごらん。木の根っこ、石、落ち葉。同じ山でも、場所によって景色が違うね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "イツシカ",
      text: "……よく、ここまで来たね。",
      speaker: "itushika",
      showImgId: "img-itushika-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "わあっ！ いつからそこにいたの！？ 全然気づかなかった！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "イツシカ",
      text: "この山には、急いでいると見落としてしまうものがたくさんある。",
      speaker: "itushika",
      showImgId: "img-itushika-normal",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "見落としてしまうもの……。それは、景色だけじゃないのかな？",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "right-chara"
    },
    {
      name: "イツシカ",
      text: "そう。小さな変化も、見方を変えれば大切な手がかりになる。",
      speaker: "itushika",
      showImgId: "img-itushika-normal",
      posClass: "center-chara"
    },
    {
      name: "うさこ",
      text: "なんだか宝探しみたい！ これからは、もっとよく見て歩こうっと！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "イツシカ",
      text: "その気持ちを忘れずに。この先には、雪の厳しい山もあるよ。",
      speaker: "itushika",
      showImgId: "img-itushika-normal",
      posClass: "center-chara",
      nextRoute: "sanmine_snow"
    }
  ],

  // =====================================================
  // ③ 三峰神社モチーフ：冬の山
  // =====================================================
  sanmine_snow: [
    {
      name: "",
      text: "さらに山を進むと、一面の雪！ 息をのむほど白い世界が広がっていた。",
      speaker: "none",
      showImgId: "none",
      bg: "sanmine-torii",
      partnerAction: {   id: "img-itushika-normal", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "さ、寒いっ！ さっきまでの森と、まるで別の世界だよ！",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara",
      partnerAction: {   id: "img-usagi-epiphany", class: "left-chara"  }
    },
    {
      name: "みねるふ",
      text: "おい、そこの旅人！ 雪山を甘く見るんじゃないぞ！",
      speaker: "mineruf",
      showImgId: "img-mineruf-angry",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ひゃあっ！ 怒られた！ ぼくたち、何か悪いことした！？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "みねるふ",
      text: "まだ何もしていないからこそ言っているんだ！ 準備もなしに進めば、立ち往生するぞ！",
      speaker: "mineruf",
      showImgId: "img-mineruf-angry",
      posClass: "right-chara"
    },
    {
      name: "トヤとり",
      text: "みねるふ、言い方がきついよ。でも、言っていることは正しい。まずは周りを見よう。",
      speaker: "toyatori",
      showImgId: "img-toyatori-normal",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "雪の深さ、道の傾き、風の向き……。進む前に確かめることが、こんなにあるんだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "トヤとり",
      text: "そうだ。勢いだけでは越えられない場所もある。何を見て、どう判断するかが大切なんだ。",
      speaker: "toyatori",
      showImgId: "img-toyatori-normal",
      posClass: "center-chara"
    },
    {
      name: "みねるふ",
      text: "……ふん。少しは分かっているようだな。だが、ここから先はもっと険しいぞ。",
      speaker: "mineruf",
      showImgId: "img-mineruf-normal",
      posClass: "right-chara"
    },
    {
      name: "トヤとり",
      text: "雪山を越えた先には、まだ知らない山の世界がある。覚悟はできたか？",
      speaker: "toyatori",
      showImgId: "img-toyatori-normal",
      posClass: "right-chara",
      partnerAction: {   id: "img-mineruf-normal", class: "hidden-chara"  },
      nextRoute: "nara_deep_mountain"
    }
  ],

  // =====================================================
  // ④ 奈良の弥山モチーフ：山の深奥
  // =====================================================
  nara_deep_mountain: [
    {
      name: "",
      text: "雪の山を越えた先。岩山が連なり、空気まで変わったような場所にたどり着いた。",
      speaker: "none",
      showImgId: "none",
      bg: "sangaku-titai",
      partnerAction: {   id: "img-toyatori-normal", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "ここ……なんだか、今までの山と違うね。静かなのに、何かがいる気配がする。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "ごっちゃん",
      text: "おっ、旅人たち！ よくぞここまで来たな！",
      speaker: "gotyan",
      showImgId: "img-gotyan-normal",
      posClass: "right-chara"
    },
    {
      name: "ぜんくん",
      text: "ここまで来る道のり、ちゃんと覚えている？ 振り返ると不思議だよね。",
      speaker: "zenkun",
      showImgId: "img-zenkun-normal",
      posClass: "left-chara",
      partnerAction: {   id: "img-usagi-happy", class: "center-chara"  }
    },
    {
      name: "うさこ",
      text: "野原から始まって、神社、森、雪山……。ひとつひとつは小さな一歩だったのに！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    {
      name: "",
      text: "どんどん",
      speaker: "",
      showImgId: "",
      posClass: "",
      partnerAction: {   id: "img-usako-epiphany", class: "left-chara"  }
    },
    {
      name: "",
      text: "どんどん",
      speaker: "",
      showImgId: "",
      posClass: "",
      partnerAction: {   id: "img-usagi-happy", class: "left-chara"  }
    },
    {
      name: "シリー先生",
      text: "小さな一歩も、積み重ねれば遠くまで行ける。だが、進むほどに見えてくるものも変わる。",
      speaker: "siri",
      showImgId: "img-siri-normal",
      posClass: "center-chara",
      partnerAction: {   id: "img-zenkun-normal", class: "hidden-chara"  }
    },
    {
      name: "龍神さん",
      text: "ふむ。おまえたちは、何を知りたくて旅をしているのだ？",
      speaker: "ryujin",
      showImgId: "img-ryujin-normal",
      posClass: "right-chara",
      partnerAction: {   id: "img-gotyan-normal", class: "hidden-chara"  }
    },
    {
      name: "うさぎ",
      text: "最初は、世界の向こうに何があるのか知りたかったんです。でも今は、目の前にも不思議がいっぱいあるって分かってきました。",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara"
    },
    {
      name: "龍神さん",
      text: "よい気づきだ。世界は広い。すべてを一度に知ることはできぬ。だからこそ、問いを持ち、歩き、発見するのだ。",
      speaker: "ryujin",
      showImgId: "img-ryujin-normal",
      posClass: "center-chara",
      partnerAction: {   id: "img-siri-normal", class: "hidden-chara"  }
    },
    {
      name: "龍神さん",
      text: "山の教えは、ここまでだ。次は山を離れ、空の向こうにある世界を見てくるがよい。",
      speaker: "ryujin",
      showImgId: "img-ryujin-normal",
      posClass: "center-chara",
      nextRoute: "phoenix_sky"
    }
  ],

  // =====================================================
  // ⑤ 空：山の物語をいったんリセット
  // =====================================================
  phoenix_sky: [
    {
      name: "",
      text: "――そして、山の物語はいったん終わる。",
      speaker: "none",
      showImgId: "none",
      bg: "sunny-sky",
      partnerAction: {   id: "img-ryujin-normal", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "わあ……。山から見上げた空とは全然違う！ どこまでも続いているみたい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "山では、足元を見て、道を確かめて、一歩ずつ進んだ。けれど空には、道が見当たらないね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "鳳凰",
      text: "道がないなら、自分で見つければいい。",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "えっ……！ 空から誰か来た！？ あなたは誰？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "center-chara"
    },
    {
      name: "鳳凰",
      text: "我は鳳凰。山の上にも、海の向こうにも、世界は広がっている。",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "鳳凰",
      text: "山で学んだことを、いったん手放してみるのもよい。新しい場所では、新しい見方が必要になるからな。",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "手放すって、忘れちゃうってこと？ せっかく見つけたことなのに？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "鳳凰",
      text: "忘れるのではない。今までの経験を胸に、新しい問いを迎えるのだ。",
      speaker: "houou",
      showImgId: "img-houou-normal",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "なるほど……！ 山の次は空。そして、その先へ！ 今度は海を見に行こう！",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "center-chara",
      nextRoute: "ocean_world"
    }
  ],

  // =====================================================
  // ⑥ 海：広い世界の向こうへ
  // =====================================================
  ocean_world: [
    {
      name: "",
      text: "空を越え、広い海へ。見渡す限り、青い水が広がっている。",
      speaker: "none",
      showImgId: "none",
      bg: "the-ocean",
      partnerAction: {   id: "img-houou-normal", class: "hidden-chara"  },
    },
    {
      name: "うさこ",
      text: "うわああっ！ 海って、こんなに大きいの！？ 端っこが見えないよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "陸から眺める海と、海の中から見る世界は、きっと違うんだろうね。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      posClass: "left-chara"
    },
    {
      name: "まるか",
      text: "おーい！ そこの旅人たち！ 海の広さに驚いているのかい？",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "わっ！ 今度は海から誰かが！ あなたは海の住人なの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },
    {
      name: "まるか",
      text: "そうさ！ 海には、陸とは違う流れがある。目に見える波だけが、海のすべてじゃないんだ。",
      speaker: "maruka",
      showImgId: "img-maruka-normal",
      posClass: "right-chara"
    },
    {
      name: "",
      text: "そのとき、遠くから大きな影が近づいてきた……。",
      speaker: "none",
      showImgId: "none"
    },
    {
      name: "えびすくじら",
      text: "おおきな海へ、ようこそ……。小さな旅人たちよ。",
      speaker: "ebisukuzira",
      showImgId: "img-ebisukuzira-normal",
      posClass: "center-chara",
      partnerAction: {   id: "img-usako-normal", class: "left-chara"  }
    },
    {
      name: "うさこ",
      text: "すごい……！ こんなに大きな生き物が海の中にいるなんて！ 世界には、まだ知らないことがいっぱいだね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      partnerAction: {   id: "img-maruka-normal", class: "hidden-chara"  }
    },
    {
      name: "えびすくじら",
      text: "海の向こうにも、別の土地がある。そこには、長い歴史と不思議な問いが待っているぞ。",
      speaker: "ebisukuzira",
      showImgId: "img-ebisukuzira-normal",
      posClass: "center-chara",
      partnerAction: {   id: "img-usagi-kaeru", class: "hidden-chara"  },
      nextRoute: "egypt_mystery"
    }
  ],

  // =====================================================
  // ⑦ エジプト：世界を越えた謎
  // =====================================================
  egypt_mystery: [
    {
      name: "",
      text: "海の向こうにたどり着いたのは、見たこともない砂漠。遠くには巨大なピラミッドがそびえていた。",
      speaker: "none",
      showImgId: "none",
      bg: "egypt-piramid",
      partnerAction: {   id: "img-ebisukuzira-normal", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "うそ……！ あれ、人間が作ったの！？ 大きすぎるよ！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "どうやって、こんなに大きなものを作ったんだろう。どれくらいの石が必要だったのかな？",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara"
    },
    {
      name: "スフィンクス",
      text: "ほう……。見た目に驚くだけでなく、その理由を知ろうとするか。",
      speaker: "sphinx",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "ひゃっ！ スフィンクスがしゃべった！ ねえ、あなたは何でも知っているの？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "left-chara"
    },
    {
      name: "スフィンクス",
      text: "すべてを知る者などいない。大切なのは、分からぬものを前にして、問いを持ち続けることだ。",
      speaker: "sphinx",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "ぼくたち、野原から出発して、神社も山も、空も海も旅してきたんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "スフィンクス",
      text: "その旅で、何を見つけた？",
      speaker: "sphinx",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "最初は、知らない世界を見たかった。でも今は、知っていると思っていた世界にも、まだまだ不思議があるって思うんだ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara"
    },
    {
      name: "スフィンクス",
      text: "よい答えだ。旅の終わりは、問いの終わりではない。さあ、次はきみ自身が世界に問いかける番だ。",
      speaker: "sphinx",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara",
      nextRoute: "adventure_end"
    }
  ],

  // =====================================================
  // エンディング：プレイヤー自身の冒険へ
  // =====================================================
  adventure_end: [
    {
      name: "",
      text: "野原から始まった旅は、遠い異国まで続いた。",
      speaker: "none",
      showImgId: "none",
      bg: "nohara",
      partnerAction: {   id: "img-sphinx-normal", class: "hidden-chara"  }
    },
    {
      name: "うさこ",
      text: "でも、まだ終わりじゃないよね？ 世界には、もっともっと不思議があるんだから！",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },
    {
      name: "うさぎ",
      text: "そう。ここから先は、きみ自身が発見する番だ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "身の回りの『なんで？』を、ひとつずつ追いかけてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      partnerAction: {   id: "img-usako-happy", class: "right-chara"  }
    },
    {
      name: "うさこ",
      text: "次は、きみが世界の秘密を見つける冒険へ！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    }
  ]

};