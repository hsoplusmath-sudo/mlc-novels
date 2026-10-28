if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["intro-wordpress"] = {

  // ==========================================
  // 前半：共通ストーリー
  // ==========================================

  // 導入（スタート）
  wp_start: [
    {
      name: "",
      text: "HPを作ろう！",
      speaker: "",
      bg: "../../assets/bg/bg_nohara.webp",
      nextRoute: "wp_scene1"
    }
  ],

  // シーン１：友達との実際のSNSでのやりとり
  // ※このシーンは変更しない
  wp_scene1: [
    {
      name: "うさぎ",
      text: "ねぇ、ねぇ、",
      speaker: "usagi",
      bg: "../../assets/bg/bg_gorogoro.webp",
      bgm: "../../assets/bgm/bgm_france_italia.opus",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "ねぇ、ねぇ、何かしたいことってある？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "いや、特にないかな。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "いや、特にないかな。SNS見てるだけで楽しいよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "なんか、こんなことできたらいいなぁっていう希望はないの？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "えー、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "えー、ホームページ作成の仕方とかかな",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "えー、ホームページ作成の仕方とかかな、強いて言うなら",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "あっ、そうんだ！めっちゃいいじゃん！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "あっ、そうんだ！めっちゃいいじゃん！今から説明するから楽しみにしといて！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "❤️",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      nextRoute: "wp_scene2"
    }
  ],

  // ==========================================
  // シーン２：HPを作る理由が、少しずつ見えてくる
  // ==========================================
  wp_scene2: [
    {
      name: "うさこ",
      text: "ホームページって、作れたら楽しそうだけど……何から始めたらいいんだろう？",
      speaker: "usako",
      bg: "../../assets/bg/bg_gorogoro.webp",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "いきなり作り方を覚えるより、まずは「何のために作りたいか」を考えてみない？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "何のため……？　うーん、まだはっきりしてないかも。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "大丈夫。作りながら見つかることもあるよ。ただ、目的が少し見えると、必要なことも選びやすくなるんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "そっか。じゃあ、まずはWordPressってどんなものなのか知りたいな。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      popupLink: "#popup-step-1_intro-wordpress",
      popupBtnText: "WordPressとは"
    },
    {
      name: "うさこ",
      text: "記事や写真をまとめて、自分のサイトとして公開できるんだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "そう。WordPress以外にも作成サービスはあるから、自分に合う方法を選べばいいよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "まずは、どの方法で作るか選んでみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      choices: [
        {
          text: "WordPressで作ってみる",
          nextRoute: "wp_choice_wp"
        },
        {
          text: "ホームページ作成サービスを使う",
          nextRoute: "wp_choice_service"
        }
      ]
    }
  ],

  // ==========================================
  // 選択肢２：外部サービスルート
  // ==========================================
  wp_choice_service: [
    {
      name: "うさぎ",
      text: "各ホームページ作成サービスのサイトをご確認ください。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      customAction: "returnToMenuScreen"
    }
  ],

  // ==========================================
  // WordPressルート：使う場面を想像する
  // ==========================================
  wp_choice_wp: [
    {
      name: "うさぎ",
      text: "いいね。最初から全部わかっていなくても大丈夫。ひとつずつ試していこう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "でも、WordPressって難しそう。私にちゃんと作れるかな……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "まずは画面を見てみよう。どこに何があるか、実際に見るとイメージしやすいよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "あ、記事を書いたり、写真を入れたりする場所があるんだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      popupLink: "#popup-step-2_intro-wordpress",
      popupBtnText: "WordPressの操作画面"
    },
    {
      name: "うさこ",
      text: "画面の使い方は少しわかったけど……実際に何を作ればいいんだろう？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "じゃあ、作りたいものを想像してみよう。たとえば、好きなことを発信したい、デザインを仕事にしたい、サイトの仕組みを知りたい……。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "どれも気になる！でも、目的によって学ぶことも変わりそうだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "うん。今の自分に近いものを選んでみて。あとから興味が変わっても大丈夫だよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      choices: [
        {
          text: "サイトで情報を発信して、収入にもつなげたい",
          nextRoute: "wp_goal_money"
        },
        {
          text: "自分でおしゃれなサイトを作ってみたい",
          nextRoute: "wp_goal_designer"
        },
        {
          text: "HTMLやCSSなど、仕組みを知りたい",
          nextRoute: "wp_goal_coding"
        }
      ]
    }
  ],

  // ==========================================
  // 後半：目的別の分岐ストーリー（通常ルート）
  // ==========================================

  // ［選択肢１］サイトで発信して、収入にもつなげたい
  wp_goal_money: [
    {
      name: "うさこ",
      text: "せっかく作るなら、好きなことを発信して、いつか少しでも収入につながったらうれしいな。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "いいね。まずは、誰に何を届けたいかを考えることが大切だよ。サイトを作っただけで、すぐ収入になるわけではないけどね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "そっか。記事を読んでもらったり、紹介したものに興味を持ってもらったりする必要があるんだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "そう。たとえば、商品を紹介して購入につながると報酬が得られる「アフィリエイト」や、広告を掲載する方法があるよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-money",
      popupBtnText: "サイトで収入を得る仕組み"
    },
    {
      name: "うさこ",
      text: "まずは、誰に何を伝えたいのか考えるところから始めてみようかな。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      nextRoute: "wp_common_goal"
    }
  ],

  // ［選択肢２］自分でおしゃれなサイトを作ってみたい
  wp_goal_designer: [
    {
      name: "うさこ",
      text: "自分でおしゃれなサイトを作れたら、かっこいいな。好きなものを、自分の好きな見た目で紹介してみたい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "それなら、まずは見る人にとって分かりやすいページを作るところから始めよう。見た目だけじゃなく、情報の順番や読みやすさもデザインなんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "かわいいだけじゃなくて、見た人が迷わないことも大事なんだね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "うん。WordPressでページを作る練習をして、慣れてきたら色や配置を調整してみよう。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-designer",
      popupBtnText: "Web制作・デザインの仕事とは？"
    },
    {
      name: "うさこ",
      text: "まずは、自分が好きなものを紹介する1ページを作ってみたいな。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      nextRoute: "wp_common_goal"
    }
  ],

  // ［選択肢３］HTMLやCSSなど、仕組みを知りたい
  wp_goal_coding: [
    {
      name: "うさこ",
      text: "サイトって、どうやって画面に表示されているんだろう？その仕組みも知りたいな。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "Webページでは、HTMLが文章や画像の骨組みを作って、CSSが色や配置を整えるんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "じゃあ、ボタンを押したときに動いたりするのは？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "そういう動きにはJavaScriptが使われることがあるよ。最初から全部覚えなくても、必要になったときに少しずつ学べば大丈夫。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-coding",
      popupBtnText: "HTML・CSS・JavaScriptの役割"
    },
    {
      name: "うさこ",
      text: "なるほど。見た目の裏側にも、ちゃんと仕組みがあるんだね。まずはHTMLを少し見てみたいな。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      nextRoute: "wp_common_goal"
    }
  ],

  // ==========================================
  // 共通ゴール：知識を「自分の一歩」に変える
  // ==========================================
  wp_common_goal: [
    {
      name: "うさこ",
      text: "最初は、WordPressっていう名前を聞くだけで難しそうって思ってた。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "でも、何を作りたいかを考えたら、次に知りたいことが少し見えてきたよ。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "それが大事なんだ。知識を全部覚えてから始めるんじゃなくて、作りたいものに合わせて、必要なことをひとつずつ試せばいい。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-step-4_intro-wordpress",
      popupBtnText: "自分の人生"
    },
    {
      name: "うさこ",
      text: "よし。まずは小さく作ってみる！途中で分からなくなったら、そのときに調べればいいんだよね。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "うん。今日の一歩が、これから作るものにつながっていくよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      customAction: "returnToMenuScreen"
    }
  ],

  // ==========================================
  // 後半：ボーナスステージのストーリー
  // ==========================================

  // ［選択肢１］HPで収入を得たい
  wp_bonus_money: [
    {
      name: "うさこ",
      text: "やっぱりブログやホームページを作るなら、広告とかで少しでもお小遣い稼ぎができたら嬉しいな！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "../../assets/bg/bg_pc-office.webp",
      bgm: "http://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/garden-party.mp3"
    },
    {
      name: "うさぎ",
      text: "そうだよね！Webサイトで収入を得る仕組みとして、主に「アフィリエイト」と「アドセンス」の2つがあるんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "ちょっと解説してあげるよ！！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-bonus-money",
      popupBtnText: "HPで収入を得る2つの仕組み"
    },
    {
      name: "うさこ",
      text: "へぇ～！紹介した商品を買ってもらったり、広告がクリックされたりするだけで報酬になるんだ。これなら私にもコツコツ続けられそう！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "自分の書いた記事が、24時間働いてくれるお店になるイメージだね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "わくわく❣",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      customAction: "returnToMenuScreen"
    }
  ],

  // ［選択肢２］Webデザイナーに興味がある
  wp_bonus_designer: [
    {
      name: "うさこ",
      text: "Webデザイナーってなんか響きがカッコいい！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "../../assets/bg/bg_pc-office.webp",
      bgm: "http://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/garden-party.mp3"
    },
    {
      name: "うさこ",
      text: "Webデザイナーってなんか響きがカッコいい！自分でオシャレなサイトを作って、副業とか仕事にできたら最高なんだけどな。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "めちゃくちゃ夢があるね！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "めちゃくちゃ夢があるね！WordPressが触れるようになると、お店の宣伝用ページ（LP）を作ったり、SEO（検索上位を狙う対策）まで巻き取って、副業や本業として稼ぐ道がグッと広がるよ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-bonus-designer",
      popupBtnText: "Web制作・デザインの仕事とは？"
    },
    {
      name: "うさこ",
      text: "なるほど、ただデザインするだけじゃなくて、",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさこ",
      text: "なるほど、ただデザインするだけじゃなくて、商品を買ってもらえるようにするんだね！だから稼いでいる人多いんだ！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "そうだよ！WordPressのスキルは一生モノの武器になるからね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさこ",
      text: "すごいね❣",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      posClass: "left-chara",
      customAction: "returnToMenuScreen"
    }
  ],

  // ［選択肢３］HTMLのことを詳しく知りたい
  wp_bonus_coding: [
    {
      name: "うさこ",
      text: "さっき表に出てきた「HTML」とか「CSS」とかの仕組みそのものにも興味が湧いてきちゃった！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara",
      bg: "../../assets/bg/bg_pc-office.webp",
      bgm: "http://masulessonclass.sakura.ne.jp/mlc/novels/assets/bgm/garden-party.mp3"
    },
    {
      name: "うさぎ",
      text: "おっ、素晴らしい！WordPressの裏側も、実はHTML、CSS、そしてJavaScriptという言語で動いているんだ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "WordPressって、実はHTML、CSS、そしてJavaScriptを管理しやすくしてるイメージなんだ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      popupLink: "#popup-wp-bonus-coding",
      popupBtnText: "骨組み・見た目・動きの3大言語"
    },
    {
      name: "うさこ",
      text: "HTMLが文章の骨組みで、CSSが色やデザイン、JavaScriptが動く仕組みを作っているんだね！パズルみたいでめちゃくちゃ面白い！",
      speaker: "usako",
      showImgId: "img-usako-normal",
      posClass: "left-chara"
    },
    {
      name: "うさぎ",
      text: "この基本を知っていると、実はWordPressもカスタマイズがさらに自由自在になるよ！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara"
    },
    {
      name: "うさぎ",
      text: "今度たっぷり教えるね！！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      posClass: "right-chara",
      customAction: "returnToMenuScreen"
    }
  ]

};