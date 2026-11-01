if (!window.storyFlow) { window.storyFlow = {}; }



window.storyFlow["new-nisa"] = {



  msg_welcome: [

    { name: "",

      text: "うさこの日常を覗いてみましょう！！",
      speaker: "none",
      bg: "../../assets/bg/bg_gorogoro.webp",
      showImgId: "none",
      nextRoute: "new_nisa_start"
    }

  ],



  new_nisa_start: [

    {
      name: "うさこ",
      text: "将来のこと、しんぱいだよ",
      speaker: "usako",
      bg: "../../assets/bg/bg_gorogoro.webp",
      showImgId: "img-usako-sad",
      posClass: "center-chara",
      bgm: "../../assets/bgm/bgm_france_italia.opus"
    },

    {
      name: "うさこ",
      text: "でも、私、毎日バイトがんばって給料少ないけど、貯金100万円貯めました。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "やったー、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "やったー、わたし、自分に自信持ってます。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "でも銀行に貯金しても1年で100円位しかお金が増えないなあ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "でも銀行に貯金しても1年で100円位しかお金が増えないなあ。貯金している意味あんのかなあ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "何か他にどんなことあるんだろう。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "株とか興味あるけど、難しそうやから怖いなぁ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "株とか興味あるけど、難しそうやから怖いなぁ。そういえばなんかみんなニーサっていうのやってるから、やってみたいな。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "でも、難しそう。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "そもそもnisaって、",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "うさこ",
      text: "そもそもnisaって、なんなん？！",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "center-chara"
    },

    {
      name: "ヒーロー",
      text: "とうっ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      bgm: "../../assets/bgm/bgm_escort.opus",
      partnerAction: { id: "img-usako-sad", class: "right-chara" }
    },

    {
      name: "ヒーロー",
      text: "教えてあげよう！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "new_nisa_step1"
    }

  ],



  new_nisa_step1: [

    {
      name: "ヒーロー",
      text: "画面の中央にオレンジのボタンを出すから、押してごらん",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      popupLink: "#popup-step-1_new-nisa",
      popupBtnText: "Lesson 1：NISAってなんなん？！"
    },

    {
      name: "うさこ",
      text: "はい！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-1_new-nisa",
      popupBtnText: "Lesson 1：NISAってなんなん？！"
    },

    {
      name: "うさこ",
      text: "完了ボタンを押したら、花丸貰っちゃった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "うふふ❣️、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "うふふ❣️、とにかく、新NISAにしたら、貯まるってことだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "ってか、なんでお金貯まるの。利子って毎回100円くらいだけど、なんなん？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "NISAでは利子という言葉は使わないけど、同じ考え方をするよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "それはなんと「複利」っていう計算をするんだよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "むずかしそうー。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "でも、いちど原理を理解しといたら、世の中のことすごくよく分かるから一緒に学んでみようよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "「賢くなれる」ってこと🥺",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "うん、そうだよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      choices: [

        { text: "じゃあ、やってみる。", nextRoute: "new_nisa_step2" },

        { text: "数学でしょ、難しそうだからやめとく", nextRoute: "new_nisa_skip_to_step3" }

      ]

    }

  ],



  new_nisa_step2: [

    {
      name: "うさこ",
      text: "今回も押してみればいいんだね",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-2_new-nisa",
      popupBtnText: "Lesson 2：複利の計算仕組み"
    },

    {
      name: "うさこ",
      text: "ふーん、って感じだね。分かったけど、分かっただけだよ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "じゃあ、実際に、いま学んだことを、",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "じゃあ、実際に、いま学んだことを、君の人生に応用してみようか。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "えっ、どういうこと？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "君は毎月、何万円ならNISAに投資できるかな？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "うーん、貯金続けたいから1万円は無理だわ。5千円が限度かな。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "分かった！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "そしたら、初めはいくら預けられるかな？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "貯金貯まってきてるから、10万円くらいいけるんじゃない！？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "分かった！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "そしたら、そのプランで新NISAやったら、いくらに増えると思う？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "うーん？？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "75歳まで投資し続けたら、めっちゃ貯まりそう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "なんで、75歳まで貯めるってしたの？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "日本人の平均寿命がそれくらいだから。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "それは、バカだよ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "投資したリターンを使わないの？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "確かに！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "そうだね、50歳になった30年後くらいで計算してみる",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "どうやって計算すればいいの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "基本の考えかたは、さっきやった「複利」の考え方なんだ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "基本の考えかたは、さっきやった「複利」の考え方なんだ。でも、30年後まで計算できないよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "そこで、パソコンの力を使うんだよ！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "どういうこと！？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "ほんとうはExcelとかGoogleスプレッドシートでやってほしいんだけど、",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "ほんとうはExcelとかGoogleスプレッドシートでやってほしいんだけど、今日は、自動で計算してくれるシステムを作ってきたよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "同じシステムはExcelとかGoogleスプレッドシートでもそんなに時間かからずに作ることができるよ。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "うさこ",
      text: "えっ、ほんと！すごい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "すごい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "すごい！すごい！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "やってみたい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "じゃあ、起動しようか",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara"
    },

    {
      name: "ヒーロー",
      text: "ピッピーピー、",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "new_nisa_step3"
    }

  ],



  new_nisa_skip_to_step3: [

    {
      name: "ヒーロー",
      text: "ふーん、たしかに、理屈は難しいもんね。裏技として新NISAの自動計算システムを起動しよう！",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      nextRoute: "new_nisa_step3"
    }

  ],



  new_nisa_step3: [

    {
      name: "うさこ",
      text: "なにこれ！！？！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      popupLink: "#popup-step-3_new-nisa",
      popupBtnText: "Lesson 3：30年後自動計算ツール"
    },

    {
      name: "うさこ",
      text: "すごいじゃん。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "すごいじゃん！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "わたし賢くなった気がする。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "じゃあ、君はどんな未来を想像する？？",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      choices: [

        { text: "「パーっと贅沢に世界旅行にいく！」", nextRoute: "new_nisa_choice_travel" },

        { text: "「もっと賢くなるために自己投資する！」", nextRoute: "new_nisa_choice_study" }

      ]

    }

  ],



  new_nisa_choice_travel: [

    {
      name: "うさこ",
      text: "やっぱり贅沢に世界旅行でしょ！ 誰も私を止められないわ！",
      bg: "../../assets/bg/bg_romaneau-beach.jpg",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "ヨーロッパ行って、北欧行って、アジアも行って、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "ヨーロッパ行って、北欧行って、アジアも行って、ピラミッドも見たい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "いちどきり私の人生だもの！夢を叶えたい！ぜったいに‼️",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      nextRoute: "new_nisa_step4"
    }

  ],



  new_nisa_choice_study: [

    {
      name: "うさこ",
      text: "もっといろんなこと勉強して、自分の可能性を掛け算していきたい！！",
      speaker: "usako",
      bg: "../../assets/bg/bg_stocksnap-people.jpg",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
   },

   {
      name: "うさこ",
      text: "お店出しちゃおうかな‼️",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
    },

   {
      name: "うさこ",
      text: "お店出すなら、トップがいい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

   {
      name: "うさこ",
      text: "お店出すなら、トップがいい！天下とりたい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara",
      nextRoute: "new_nisa_step4"
    }

  ],



  new_nisa_step4: [

    {
      name: "ヒーロー",
      text: "さいごに少しだけ人生の話をしておこうか",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      popupLink: "#popup-step-4_new-nisa",
      popupBtnText: "Lesson 4：人生のアドバイス"
    },

    {
      name: "うさこ",
      text: "やっほーい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "うさこ",
      text: "他にもたくさん勉強したい！！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "right-chara"
    },

    {
      name: "ヒーロー",
      text: "その調子さ！ さあ、一度メニュー画面に戻ろうか。",
      speaker: "hero",
      showImgId: "img-hero-happy",
      posClass: "left-chara",
      customAction: "returnToMenuScreen"
    }

  ]

}; 