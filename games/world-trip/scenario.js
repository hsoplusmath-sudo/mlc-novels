
if (!window.storyFlow) {  window.storyFlow = {}; }

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
      name: "",
      text: "ねえ、うさぎ。毎日見ているこの世界って、どこまで続いているんだろう？",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "おっ、うさこ！ いきなり大きな疑問だね。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "山の向こうには何があるの？ 海の向こうは？ その先は？",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "知らない場所があるなら、行ってみたくない？",
      speaker: "ヒーロー",
      showImgId: "img-hero-happy",
      posClass: "right-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "ぼ、ぼくは遠くまで行くのは、ちょっと苦手だけど……。",
      speaker: "ぶきようくん",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "大丈夫！ 最初から何でもできる必要なんてないよ。一歩ずつ進めばいいんだ。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "そうだ！ まずは近所を探検しようよ。ほら、あそこの神社！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "神社か。いつも前を通るだけだったな。",
      speaker: "ヒーロー",
      showImgId: "img-hero-happy",
      posClass: "right-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "いつもの景色の中に、知らない世界を探しに行こう！",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "nohara",
      nextRoute: "manabiya_intro"
    }
  ],

  // =====================================================
  // ⓪ 学び舎：冒険の準備
  // =====================================================
  manabiya_intro: [
    {
      name: "",
      text: "出発前に、ひとつだけ覚えておいてほしいことがあるんだ。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "えっ、冒険のルール？ 危険な場所には近づかない、とか？",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "それも大事！ でも、もうひとつ。分からないことに出会ったら、すぐに諦めないこと。",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "分からないのに、諦めないの？ それって難しくない？",
      speaker: "ぶきようくん",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "分からないからこそ、面白いこともあるんだよ。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "『なんで？』って考えるところから、発見が始まるんだね！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "失敗したっていい。気づいたことは、きみだけの宝物になる。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "ぼくが苦手なことにも、何か発見があるかもしれないんだね。",
      speaker: "ぶきようくん",
      showImgId: "img-bukiyokun-hard",
      posClass: "right-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "よーし！ 今日はどんな宝物が見つかるかな？",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "manabiya"
    },
    {
      name: "",
      text: "未知の世界への第一歩。さあ、近所の神社へ出発だ！",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "manabiya",
      nextRoute: "shrine_gate"
    }
  ],

  // =====================================================
  // ① 近所の神社：二匹の狛犬
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
      name: "",
      text: "待った！ ここから先へ進むなら、まずはおれたちに挨拶していきな！",
      speaker: "シーくん",
      showImgId: "img-sikun-happy",
      posClass: "right-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "シーくん、いきなり大声を出さないの！ びっくりしてるでしょ？",
      speaker: "サーちゃん",
      showImgId: "img-satyan-happy",
      posClass: "left-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "うわっ！ 狛犬がしゃべった！？",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "ははは！ おれたちは、この神社を守る狛犬だからな！",
      speaker: "シーくん",
      showImgId: "img-sikun-happy",
      posClass: "right-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "ねえ、二匹はずっとここにいるの？ 毎日、何を見ているの？",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "人の行き来、風の音、木々の揺れ。同じ場所でも、毎日違うことが起きるのよ。",
      speaker: "サーちゃん",
      showImgId: "img-satyan-happy",
      posClass: "right-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "同じ場所なのに毎日違う？ よく観察したら、何か見つかるってこと？",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "その通り！ 目の前の景色を、ただ通り過ぎるだけじゃもったいないぞ！",
      speaker: "シーくん",
      showImgId: "img-sikun-happy",
      posClass: "right-chara",
      bg: "kinjo-jinja"
    },
    {
      name: "",
      text: "ふふっ。次は、もっと山の奥へ行ってみない？",
      speaker: "サーちゃん",
      showImgId: "img-satyan-happy",
      posClass: "right-chara",
      bg: "kinjo-jinja",
      nextRoute: "misen_forest"
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
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "わあ……。木がいっぱい。上を見ても、葉っぱばっかり！",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "足元も見てごらん。木の根っこ、石、落ち葉。同じ山でも、場所によって景色が違うね。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "……よく、ここまで来たね。",
      speaker: "イツシカ",
      showImgId: "img-itushikaa-normal",
      posClass: "right-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "わあっ！ いつからそこにいたの！？ 全然気づかなかった！",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "この山には、急いでいると見落としてしまうものがたくさんある。",
      speaker: "イツシカ",
      showImgId: "img-itushikaa-normal",
      posClass: "right-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "見落としてしまうもの……。それは、景色だけじゃないのかな？",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "そう。小さな変化も、見方を変えれば大切な手がかりになる。",
      speaker: "イツシカ",
      showImgId: "img-itushikaa-normal",
      posClass: "right-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "なんだか宝探しみたい！ これからは、もっとよく見て歩こうっと！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "itukushima-misen"
    },
    {
      name: "",
      text: "その気持ちを忘れずに。この先には、雪の厳しい山もあるよ。",
      speaker: "イツシカ",
      showImgId: "img-itushikaa-normal",
      posClass: "right-chara",
      bg: "itukushima-misen",
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
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "さ、寒いっ！ さっきまでの森と、まるで別の世界だよ！",
      speaker: "うさこ",
      showImgId: "img-usako-sad",
      posClass: "left-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "おい、そこの旅人！ 雪山を甘く見るんじゃないぞ！",
      speaker: "みねるふ",
      showImgId: "img-meneruf-angry",
      posClass: "right-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "ひゃあっ！ 怒られた！ ぼくたち、何か悪いことした！？",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "まだ何もしていないからこそ言っているんだ！ 準備もなしに進めば、立ち往生するぞ！",
      speaker: "みねるふ",
      showImgId: "img-meneruf-angry",
      posClass: "right-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "みねるふ、言い方がきついよ。でも、言っていることは正しい。まずは周りを見よう。",
      speaker: "トヤとり",
      showImgId: "img-toyatori-normal",
      posClass: "right-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "雪の深さ、道の傾き、風の向き……。進む前に確かめることが、こんなにあるんだね。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "そうだ。勢いだけでは越えられない場所もある。何を見て、どう判断するかが大切なんだ。",
      speaker: "トヤとり",
      showImgId: "img-toyatori-normal",
      posClass: "right-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "……ふん。少しは分かっているようだな。だが、ここから先はもっと険しいぞ。",
      speaker: "みねるふ",
      showImgId: "img-meneruf-normal",
      posClass: "right-chara",
      bg: "sanmine-torii"
    },
    {
      name: "",
      text: "雪山を越えた先には、まだ知らない山の世界がある。覚悟はできたか？",
      speaker: "トヤとり",
      showImgId: "img-toyatori-normal",
      posClass: "right-chara",
      bg: "sanmine-torii",
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
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "ここ……なんだか、今までの山と違うね。静かなのに、何かがいる気配がする。",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "おっ、旅人たち！ よくぞここまで来たな！",
      speaker: "ごっちゃん",
      showImgId: "img-gotyan-normal",
      posClass: "right-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "ここまで来る道のり、ちゃんと覚えている？ 振り返ると不思議だよね。",
      speaker: "ぜんくん",
      showImgId: "img-zenkun-normal",
      posClass: "right-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "野原から始まって、神社、森、雪山……。ひとつひとつは小さな一歩だったのに！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "小さな一歩も、積み重ねれば遠くまで行ける。だが、進むほどに見えてくるものも変わる。",
      speaker: "シリー",
      showImgId: "img-siri-normal",
      posClass: "right-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "ふむ。おまえたちは、何を知りたくて旅をしているのだ？",
      speaker: "龍神さん",
      showImgId: "img-ryujin-normal",
      posClass: "center-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "最初は、世界の向こうに何があるのか知りたかったんです。でも今は、目の前にも不思議がいっぱいあるって分かってきました。",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "よい気づきだ。世界は広い。すべてを一度に知ることはできぬ。だからこそ、問いを持ち、歩き、発見するのだ。",
      speaker: "龍神さん",
      showImgId: "img-ryujin-normal",
      posClass: "center-chara",
      bg: "sangaku-titai"
    },
    {
      name: "",
      text: "山の教えは、ここまでだ。次は山を離れ、空の向こうにある世界を見てくるがよい。",
      speaker: "龍神さん",
      showImgId: "img-ryujin-normal",
      posClass: "center-chara",
      bg: "sangaku-titai",
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
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "わあ……。山から見上げた空とは全然違う！ どこまでも続いているみたい！",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "山では、足元を見て、道を確かめて、一歩ずつ進んだ。けれど空には、道が見当たらないね。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "道がないなら、自分で見つければいい。",
      speaker: "鳳凰",
      showImgId: "img-houou-normal",
      posClass: "right-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "えっ……！ 空から誰か来た！？ あなたは誰？",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "我は鳳凰。山の上にも、海の向こうにも、世界は広がっている。",
      speaker: "鳳凰",
      showImgId: "img-houou-normal",
      posClass: "right-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "山で学んだことを、いったん手放してみるのもよい。新しい場所では、新しい見方が必要になるからな。",
      speaker: "鳳凰",
      showImgId: "img-houou-normal",
      posClass: "right-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "手放すって、忘れちゃうってこと？ せっかく見つけたことなのに？",
      speaker: "うさこ",
      showImgId: "img-usako-sad",
      posClass: "left-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "忘れるのではない。今までの経験を胸に、新しい問いを迎えるのだ。",
      speaker: "鳳凰",
      showImgId: "img-houou-normal",
      posClass: "right-chara",
      bg: "sunny-sky"
    },
    {
      name: "",
      text: "なるほど……！ 山の次は空。そして、その先へ！ 今度は海を見に行こう！",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "sunny-sky",
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
      bg: "the-ocean"
    },
    {
      name: "",
      text: "うわああっ！ 海って、こんなに大きいの！？ 端っこが見えないよ！",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "陸から眺める海と、海の中から見る世界は、きっと違うんだろうね。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "おーい！ そこの旅人たち！ 海の広さに驚いているのかい？",
      speaker: "まるか",
      showImgId: "img-maruka-normal",
      posClass: "right-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "わっ！ 今度は海から誰かが！ あなたは海の住人なの？",
      speaker: "うさこ",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "そうさ！ 海には、陸とは違う流れがある。目に見える波だけが、海のすべてじゃないんだ。",
      speaker: "まるか",
      showImgId: "img-maruka-normal",
      posClass: "right-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "そのとき、遠くから大きな影が近づいてきた……。",
      speaker: "none",
      showImgId: "none",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "おおきな海へ、ようこそ……。小さな旅人たちよ。",
      speaker: "えびすくじら",
      showImgId: "img-ebisukuzira-normal",
      posClass: "center-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "すごい……！ こんなに大きな生き物が海の中にいるなんて！ 世界には、まだ知らないことがいっぱいだね！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "the-ocean"
    },
    {
      name: "",
      text: "海の向こうにも、別の土地がある。そこには、長い歴史と不思議な問いが待っているぞ。",
      speaker: "えびすくじら",
      showImgId: "img-ebisukuzira-normal",
      posClass: "center-chara",
      bg: "the-ocean",
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
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "うそ……！ あれ、人間が作ったの！？ 大きすぎるよ！",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "どうやって、こんなに大きなものを作ったんだろう。どれくらいの石が必要だったのかな？",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "ほう……。見た目に驚くだけでなく、その理由を知ろうとするか。",
      speaker: "スフィンクス",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "ひゃっ！ スフィンクスがしゃべった！ ねえ、あなたは何でも知っているの？",
      speaker: "うさこ",
      showImgId: "img-usako-shocked",
      posClass: "left-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "すべてを知る者などいない。大切なのは、分からぬものを前にして、問いを持ち続けることだ。",
      speaker: "スフィンクス",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "ぼくたち、野原から出発して、神社も山も、空も海も旅してきたんだ。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "その旅で、何を見つけた？",
      speaker: "スフィンクス",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "最初は、知らない世界を見たかった。でも今は、知っていると思っていた世界にも、まだまだ不思議があるって思うんだ！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "egypt-piramid"
    },
    {
      name: "",
      text: "よい答えだ。旅の終わりは、問いの終わりではない。さあ、次はきみ自身が世界に問いかける番だ。",
      speaker: "スフィンクス",
      showImgId: "img-sphinx-normal",
      posClass: "right-chara",
      bg: "egypt-piramid",
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
      bg: "nohara"
    },
    {
      name: "",
      text: "でも、まだ終わりじゃないよね？ 世界には、もっともっと不思議があるんだから！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "そう。ここから先は、きみ自身が発見する番だ。",
      speaker: "うさぎ",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "身の回りの『なんで？』を、ひとつずつ追いかけてみよう。",
      speaker: "うさぎ",
      showImgId: "img-usagi-epiphany",
      posClass: "left-chara",
      bg: "nohara"
    },
    {
      name: "",
      text: "次は、きみが世界の秘密を見つける冒険へ！",
      speaker: "うさこ",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      bg: "nohara"
    }
  ]

};
