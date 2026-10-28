if (!window.storyFlow) {
  window.storyFlow = {};
}

window.storyFlow["circle-sine"] = {

  // ========================================
  // 共通：msg_welcome
  // ========================================
  msg_welcome: [
    {
      name: "先生",
      text: "四角と円の左側に、「ピッ」て線を引くね！",
      speaker: "usagi",
      bg: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/images/bg_manabiya.webp",
      showImgId: "img-usagi-happy",
      posClass: "center-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/manabisya-hukei.mp3"
    },
    {
      name: "確認",
      text: "円は直径が「1」、正方形は辺の長さが「1」でした。",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-and-square.png"
    },    
    {
      name: "",
      text: "ピッ",
      speaker: "none",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chords.png"
    },    
    {
      name: "うさこ",
      text: "えっ、何しているの？！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "オレンジの線は、どれくらい長さ、違うかな？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ぅうう",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chords.png"
    },
    {
      name: "先生",
      text: "正方形の方は長さは「1」だね",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "円の方は全然わからない",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "むずかしい理由は「名前がない」からだよ。正確に「どこだか」分かんないんだ",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "なまえ？？？「弦」じゃないの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord.png"
    },
    {
      name: "先生",
      text: "そうなんだけど、「どれくらい」の弦かを表すもっと詳しい「名前」があるんだ！！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "名前を付ける前に、「弦」から円の反対側まで線を引いてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord.png"
    },
    {
      name: "",
      text: "ピッ、ピッ。",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sine.png"
    },
    {
      name: "うさこ",
      text: "なんか三角形みたいになった。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sine.png"
    },
    {
      name: "先生",
      text: "この角度が30度だったとしよっか",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sine-30.png"
    },
    {
      name: "先生",
      text: "「30度」の角度の「向かい側にある線（弦）」って考えることができるね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sine-30.png"
    },
    {
      name: "うさこ",
      text: "ほうほう",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "で、名前は？？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "名前はね、これが「sin30°」なんだ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sine-30.png"
    },
    {
      name: "うさこ",
      text: "えっ、サインって、あのサインコサインのサイン？？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "うん。「sine」って弦に由来する言葉なんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "ちなみに、円周角の定理ってのがあるから、どういう三角形を書いてもぜんぶ「30度」になるよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sines.png"
    },
    {
      name: "うさこ",
      text: "ほぇー。向こう側が30度の弦の長さが「サイン」なんだ！！",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sines.png"
    },
    {
      name: "先生",
      text: "うん、そうだよ。ちなみに、円の直径が「1」ってことは忘れないでね❗️",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "わくわく！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "center-chara",
      choices: [
        { text: "sin30°の長さを求める！", nextRoute: "sin_30" },
        { text: "コサインってもしかして？", nextRoute: "cos" }
      ]
    }
  ],

sin_30:[
{
      name: "先生",
      text: "で、この弦の長さをもとめよっか",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
 },
    {
      name: "うさこ",
      text: "どうすんの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "どこに三角形を作ってもよかったことを利用して、この三角形に注目してみるよ！直径を使うんだよ！。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
      },
    {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_chord-sines.png"
    },
    {
      name: "",
      text: "シュッ",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-sine-30.png"
    },
    {
      name: "うさこ",
      text: "ふむふむ、なにか分かりそう",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
    },
    {
      name: "うさこ",
      text: "あ、分かった！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-sine-30.png"
    },
    {
      name: "うさこ",
      text: "こうやれば全部の辺の長さが「1」の正三角形ができて、弦の長さは「1」の半分だから「0.5」だね！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_sin-equilateral-triangle.png"
    },
    {
      name: "先生",
      text: "そうそう賢いじゃん",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "ほい",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "30度なのに、0.5？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう、正確に言うと、向かい側の角度が「30°」のときの弦の長さは「0.5」ってことだよ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "たしかに……",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "この「30度のとき、0.5になる」という関係に、名前をつけてみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "だから、sin30°＝0.5……？ってこと？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう、お見事！！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "え、自分で式を作れちゃったよ",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "sinって、計算するものじゃないの？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そうだけど、単純に、こうやって「弦の長さと角度の関係」に名前をつけたものなんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "何を考えているの？？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      choices: [
        { text: "学校で習ったことと、なんか違う", nextRoute: "school_sine" },
        { text: "なんか、すごいサインの定理みたいなのないの？", nextRoute: "sine_law" }
      ]
    }
  ],


  // ========================================
  // コサインってもしかして？
  // ========================================
  cos: [
    {
      name: "うさこ",
      text: "コサインってもしかして……？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      posClass: "right-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/kirakira-sakurahubuki.mp3
    },
    {
      name: "先生",
      text: "お、いいところに気づいたね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "先生",
      text: "直径で作った三角形を使えば、30度の向かい側の弦の長さを計算できたよね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-sine-30.png"
    },
    {
      name: "うさこ",
      text: "うん。あれがsin30°＝0.5。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "直径と弦以外に、",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-sine-30.png"
    },
    {
      name: "うさこ",
      text: "「もう一本、線があるよね。それがコサインなんだよ。」",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_circle-cosine-30.png"
    },
    {
      name: "先生",
      text: "あっ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "やったー！自分でコサイン見つけた！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "三平方の定理使えば、ここの長さ、√3 / 2 って分かるよ！",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そうそう。思うままにやってみて！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "つまり、cos30° = √3 / 2 ってこと？？",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "その通り！よくできました！ちなみに、「0.866」くらいだよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "やったーーー！🙌",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "パチパチパチ👏",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "sinとcosって、別々の変な公式じゃなかったんだ……。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "right-chara"
    },
    {
      name: "先生",
      text: "そう。コサインって、弦（sin）を補うって感じのもので「余弦」っていう意味なんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "left-chara",
      completeStepId: "circle-sine_cos",
      customAction: "returnToMenuScreen"
    }
  ],

  // ========================================
  // ②ならったことと違う
  // 円を大きくして、最後に円を消す
  // ========================================

school_sine: [
  {
      name: "うさこ",
      text: "でも、学校ではsinって、三角形で習ったよ？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara",
      bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/kirakira-sakurahubuki.mp3
  },
  {
    name: "先生",
    text: "じゃあ、学校で習ったsinって、どんなものだったかな？",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "えーっと……三角形で、sin30° = a/c かな。。？",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara",
     popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_school-triangle.png"
  },
  {
    name: "先生",
    text: "じゃあ、その三角形を円で囲ってみて！",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_school-triangle.png"
    },
   {
      name: "",
      text: "シュッ",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_school-triangle-circle.png"
    }, 
  {
    name: "うさこ",
    text: "あっ、「弦」だ！ aのところが、円の「弦」になってる！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_school-triangle-sine.png"
  },
  {
    name: "先生",
    text: "そう。a のところは円の弦になってるね。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "30°の向こう側の弦の長さが a だから、",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_school-triangle-sine.png"
  },
  {
    name: "うさこ",
    text: "a が sin30° ってこと？",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "……そう思うよね。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "でも、この円の直径って、「1」ではないんだよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "……あ。1じゃない……。",
    speaker: "usako",
    showImgId: "img-usako-sad",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "そう。今回の円の直径は「c」だよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "ってことは、「今の弦の長さ」は、「直径１の円の弦の長さ」の「c 倍」だよね？……。",
    speaker: "usako",
    showImgId: "img-usako-sad",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "あっ！「a / c = sin30° 」 ってことだよね。（← a = sin30° × c だから。）",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "そう。それが、学校で習った sin30° = a/c の正体だよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "そうなんだ！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara",
    completeStepId: "circle-sine_school-sine",
    customAction: "returnToMenuScreen"
  }
],


// ========================================
// ③ サイン定理みたいなのないの？
// ========================================
sine_law: [
  {
    name: "うさこ",
    text: "なんか、すごいサインの定理みたいなのないの？",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara",
    bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/kirakira-sakurahubuki.mp3
  },
  {
    name: "先生",
    text: "あるよ。いったん普通の三角形を想像してみて！",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-triangle.png"
    }, 
  {
    name: "うさこ",
    text: "ほうほう。",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "初めはサイン関係ないんだけど、サインを使うと三角形のことが分かる定理なんだよ！",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "うぉーー",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "じゃあ、この三角形を円で囲ってみて。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-triangle.png"
    }, 
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-triangle-circle.png"
    }, 

  {
    name: "先生",
    text: "円の直径を「d」としておくよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "直径.......あっ、これならさっきと同じことができるんじゃない？",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-triangle-circle.png"
    }, 
  {
    name: "うさこ",
    text: "角Aの向こう側の辺aは、円の弦になってる。",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-a.png"
  },
  {
    name: "うさこ",
    text: "だから…… a = d × sinA！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-a.png"
  },
  {
    name: "先生",
    text: "そうそう。次はBの方を見てみて",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-triangle-circle.png"
    }, 

  {
    name: "うさこ",
    text: "……ん？",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "角Bの向こう側にも、辺bがあるよね。",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-b.png"
  },
  {
    name: "うさこ",
    text: "じゃあ、これも円の弦だから……",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara",
    popupImg: "https://masulessonclass.sakura.ne.jp/mlc/novels/basic/circle-sine/assets/circle-sine-image_thm-b.png"
  },
  {
    name: "うさこ",
    text: "b = d × sinB！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "うん。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "うさこ",
    text: "ってことは……",
    speaker: "usako",
    showImgId: "img-usako-normal",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "a ÷ sinA も、b ÷ sinB も、どっちも直径（d）になる！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "じゃあ……a ÷ sinA = b ÷ sinB じゃん！！",
    speaker: "usako",
    showImgId: "img-usako-epiphany",
    posClass: "right-chara"
  },
   {
      name: "",
      text: "",
      speaker: "",
      popupImg: "https://www.masulesson.com/wp-content/uploads/2026/08/sine-thm_image.webp"
    },   
  {
    name: "先生",
    text: "そう。それが「正弦定理」だよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara",
    popupImg: "https://www.masulesson.com/wp-content/uploads/2026/08/sine-thm_image.webp"
  },
  {
    name: "うさこ",
    text: "え……正弦定理って、これだけの式なの？",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara"
  },
  {
    name: "先生",
    text: "そう。新しい公式を覚えたんじゃないよ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "さっき見つけた「角度と弦の長さの関係」を、別の角度にも使ってみただけなんだ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "この式には、a, b, A, B があるでしょ。",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara"
  },
  {
    name: "先生",
    text: "この４つのうち３つが分かれば、残りの１つ（辺の長さか角度）が計算できるっていう公式なんだよ！",
    speaker: "usagi",
    showImgId: "img-usagi-happy",
    posClass: "left-chara",
    popupImg: "https://www.masulesson.com/wp-content/uploads/2026/08/sine-thm_image.webp"
  },
  {
    name: "うさこ",
    text: "そっか……。",
    speaker: "usako",
    showImgId: "img-usako-sad",
    posClass: "right-chara"
  },
  {
    name: "うさこ",
    text: "なんか……いままで損してた。。。",
    speaker: "usako",
    showImgId: "img-usako-shocked",
    posClass: "right-chara",
    completeStepId: "circle-sine_sine-law",
    customAction: "returnToMenuScreen"
  }
]

};