if (!window.storyFlow) {
  window.storyFlow = {};
}

window.storyFlow["host-kurui"] = {

  // ==========================================
  // Daily Story 特別ステージ
  // 優しさの値段
  //
  // refuse : 途中の援助を断った回数
  // help   : 途中の援助を受け入れた回数
  //
  // refuse === 0 : 途中の援助をすべて受け入れた
  // refuse >= 1  : 途中で一度でも断った
  // ==========================================


  // ------------------------------------------
  // オープニング
  // ------------------------------------------

  msg_welcome: [
    {
      name: "",
      text: "ハロウィンの夜。街には仮装した人たちが行き交い、いつもより少しだけ賑やかな雰囲気が漂っている。",
      speaker: "none",
      bg: "living-room",
      showImgId: "none",
      nextRoute: "street_01"
    }
  ],


  // ------------------------------------------
  // 第1章：ハロウィンの夜
  // ------------------------------------------

  street_01: [
    {
      name: "うさこ",
      text: "ふう。今日はいっぱい歩いたなあ。そろそろ帰ろう。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "street_02"
    },
    {
      name: "",
      text: "そのとき、道の向こうに誰かが倒れているのが見えた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "street_03"
    },
    {
      name: "うさこ",
      text: "えっ……大丈夫ですか！？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "street_04"
    },
    {
      name: "",
      text: "近づいてみると、若い男性が地面に横たわっていた。顔色が悪く、呼びかけてもすぐには反応しない。",
      speaker: "none",
      showImgId: "img-usagi-kaeru",
      posClass: "gorogoro-chara",
      nextRoute: "street_choice_01"
    }
  ],

  street_choice_01: [
    {
      name: "うさこ",
      text: "どうしよう……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      choices: [
        {
          text: "すぐに声をかける",
          nextRoute: "street_voice"
        },
        {
          text: "近くのお店の人に助けを求める",
          nextRoute: "street_shop"
        },
        {
          text: "救急車を呼ぶ",
          nextRoute: "street_ambulance"
        }
      ]
    }
  ],

  street_voice: [
    {
      name: "うさこ",
      text: "もしもし！聞こえますか？大丈夫ですか？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "street_voice_02"
    },
    {
      name: "うさぎ",
      text: "……う……。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "street_voice_03"
    },
    {
      name: "うさこ",
      text: "よかった！意識はあるみたい。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "street_water"
    }
  ],

  street_shop: [
    {
      name: "うさこ",
      text: "すみません！あそこに人が倒れているんです。ちょっと来てもらえませんか？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "street_shop_02"
    },
    {
      name: "",
      text: "近くのお店の人が一緒に様子を見に来てくれた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "street_shop_03"
    },
    {
      name: "店員",
      text: "大丈夫ですか？意識はありますか？",
      speaker: "none",
      showImgId: "none",
      nextRoute: "street_water"
    }
  ],

  street_ambulance: [
    {
      name: "うさこ",
      text: "もしもし、救急ですか？人が倒れています。意識は少しあるみたいですが、顔色が悪いです。",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "street_ambulance_02"
    },
    {
      name: "",
      text: "電話で場所と様子を伝え、救急車が来るまでそばで見守ることにした。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "street_ambulance_03"
    },
    {
      name: "うさぎ",
      text: "……すみません……。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "street_water"
    }
  ],

  street_water: [
    {
      name: "うさこ",
      text: "お水、飲めますか？無理しないでくださいね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "street_water_02"
    },
    {
      name: "うさぎ",
      text: "……ありがとう。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "street_water_03"
    },
    {
      name: "",
      text: "男性は少しだけ水を口にした。けれど、まだ立ち上がれる様子ではない。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "street_05"
    }
  ],

  street_05: [
    {
      name: "うさこ",
      text: "こんなところに一人で置いていけないよね……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "street_06"
    },
    {
      name: "うさぎ",
      text: "すみません……ちょっと、気分が悪くて……。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "street_07"
    },
    {
      name: "うさこ",
      text: "救急車を呼んだ方がいいかな？それとも、近くで休めるところを探そうか？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "street_choice_02"
    }
  ],

  street_choice_02: [
    {
      name: "うさこ",
      text: "どうするのがいいかな……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "救急車を呼んで、到着まで付き添う",
          nextRoute: "street_safe"
        },
        {
          text: "本人の意識や状態を確認しながら、家で休ませる",
          nextRoute: "street_home"
        }
      ]
    }
  ],

  street_safe: [
    {
      name: "うさこ",
      text: "無理に動かさない方がいいよね。救急車が来るまで、ここで一緒にいます。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "street_safe_02"
    },
    {
      name: "",
      text: "救急隊に引き継ぎ、必要な処置を受けてもらった。しばらくして、男性は落ち着きを取り戻した。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "wake_01"
    }
  ],

  street_home: [
    {
      name: "うさこ",
      text: "近くに私の家があるの。少し休める場所があるから、そこまで行けそう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "street_home_02"
    },
    {
      name: "うさぎ",
      text: "……少しなら、歩けると思います。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "street_home_03"
    },
    {
      name: "うさこ",
      text: "無理しないでね。歩けなくなったら、すぐ救急車を呼ぶから。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "wake_01"
    }
  ],


  // ------------------------------------------
  // 第2章：目を覚ました男性
  // ------------------------------------------

  wake_01: [
    {
      name: "",
      text: "しばらくして、男性は目を覚ました。",
      speaker: "none",
      bg: "living-room",
      showImgId: "img-usagi-epiphany",
      nextRoute: "wake_02"
    },
    {
      name: "うさぎ",
      text: "……あれ？ここは……？",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      nextRoute: "wake_03"
    },
    {
      name: "うさこ",
      text: "気がついた？ここは私の家だよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "wake_04"
    },
    {
      name: "うさぎ",
      text: "そうだったんですね……。助けてくれたんですか？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "wake_05"
    },
    {
      name: "うさこ",
      text: "うん。道で倒れていたから。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "wake_06"
    },
    {
      name: "うさぎ",
      text: "本当にありがとうございます。俺、昨日からほとんど何も食べてなくて……。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "wake_07"
    },
    {
      name: "うさこ",
      text: "そうだったんだ……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "wake_08"
    },
    {
      name: "うさぎ",
      text: "俺、ホストをやってるんです。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "wake_09"
    },
    {
      name: "うさこ",
      text: "ホスト……？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "wake_10"
    },
    {
      name: "うさぎ",
      text: "お客さんとお酒を飲んだり、話をしたりする仕事です。昨日、ちょっと色々あって……。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "wake_11"
    },
    {
      name: "うさこ",
      text: "そうなんだ。大変だったんだね。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "wake_12"
    },
    {
      name: "うさぎ",
      text: "こんなこと言うのも変ですけど、俺、誰かに優しくしてもらったの久しぶりです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "wake_13"
    },
    {
      name: "うさこ",
      text: "そんなことないよ。困っている人がいたら助けるのは普通だよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "wake_14"
    },
    {
      name: "うさぎ",
      text: "……うさこさんって、優しいんですね。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "wake_15"
    },
    {
      name: "",
      text: "そのとき、部屋のドアが開いた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "brother_01"
    }
  ],

  brother_01: [
    {
      name: "ぶきようくん",
      text: "ただいまー！……って、えっ！？誰！？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "brother_02"
    },
    {
      name: "うさこ",
      text: "あ、おかえり。道で倒れていた人がいてね。具合が悪そうだったから、少し休んでもらっているの。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "brother_03"
    },
    {
      name: "ぶきようくん",
      text: "ええっ！？知らない人を家に入れたの！？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "brother_04"
    },
    {
      name: "うさこ",
      text: "だって、放っておけなかったんだもん。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "brother_05"
    },
    {
      name: "ぶきようくん",
      text: "助けるのはいいけど、知らない人を家に入れるのは危ないよ。お店の人や救急の人に相談する方法だってあったでしょ？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "brother_06"
    },
    {
      name: "うさぎ",
      text: "すみません。俺のせいで心配かけてしまって……。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "brother_07"
    },
    {
      name: "ぶきようくん",
      text: "いや、あなたを責めているわけじゃないけど……。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "brother_08"
    },
    {
      name: "うさこ",
      text: "もう少し休んだら帰ってもらうから。ね？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "home_01"
    }
  ],


  // ------------------------------------------
  // 第3章：お腹がすいた
  // ------------------------------------------

  home_01: [
    {
      name: "",
      text: "しばらく静かな時間が流れた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "home_02"
    },
    {
      name: "うさぎ",
      text: "……ぐうう。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "home_03"
    },
    {
      name: "うさこ",
      text: "あ、お腹が鳴ったね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "home_04"
    },
    {
      name: "うさぎ",
      text: "すみません……。昨日から何も食べてなくて。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "home_05"
    },
    {
      name: "ぶきようくん",
      text: "食べてないって……。それなら、まず病院で診てもらった方がいいんじゃない？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "home_06"
    },
    {
      name: "うさこ",
      text: "でも、お腹がすいているなら何か食べさせてあげたいな。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "food_choice"
    }
  ],

  food_choice: [
    {
      name: "うさこ",
      text: "何か食べるものを用意してあげようかな？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "おにぎりを作ってあげる",
          count: { help: 1 },
          nextRoute: "food_yes"
        },
        {
          text: "ごめんね。食べ物は出せないよ",
          count: { refuse: 1 },
          nextRoute: "food_no"
        }
      ]
    }
  ],

  food_yes: [
    {
      name: "うさこ",
      text: "ちょっと待っててね。おにぎりを作るよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "food_yes_02"
    },
    {
      name: "うさぎ",
      text: "ありがとうございます……。本当に助かります。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "food_yes_03"
    },
    {
      name: "ぶきようくん",
      text: "うーん……。でも、これからもずっと面倒を見るわけにはいかないからね。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "food_next"
    }
  ],

  food_no: [
    {
      name: "うさこ",
      text: "ごめんね。うちにも食べ物の余裕があるわけじゃないから。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "food_no_02"
    },
    {
      name: "うさぎ",
      text: "……そうですよね。急に来た俺が悪いです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "food_no_03"
    },
    {
      name: "",
      text: "男性はうつむいた。しばらくすると、顔をしかめてお腹を押さえ始めた。",
      speaker: "none",
      showImgId: "img-usagi-kaeru",
      nextRoute: "food_no_04"
    },
    {
      name: "うさぎ",
      text: "うっ……気持ち悪い……。",
      speaker: "usagi",
      showImgId: "img-usagi-kaeru",
      nextRoute: "food_no_05"
    },
    {
      name: "うさこ",
      text: "えっ、大丈夫！？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "food_no_06"
    },
    {
      name: "ぶきようくん",
      text: "やっぱり病院に連絡しよう。食べ物を出すかどうかとは別の話だよ。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "food_no_07"
    },
    {
      name: "うさこ",
      text: "そうだね……。まずは体調を確認しよう。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "food_next"
    }
  ],

  food_next: [
    {
      name: "うさぎ",
      text: "少し落ち着いてきました。ありがとうございます。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "home_bath_01"
    }
  ],


  // ------------------------------------------
  // 第4章：もう少しだけ
  // ------------------------------------------

  home_bath_01: [
    {
      name: "うさぎ",
      text: "あの……。もしよければ、シャワーを借りてもいいですか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "bath_choice"
    }
  ],

  bath_choice: [
    {
      name: "うさこ",
      text: "シャワーか……。どうしよう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "いいよ。タオルも貸してあげる",
          count: { help: 1 },
          nextRoute: "bath_yes"
        },
        {
          text: "ごめんね。それはちょっと無理かな",
          count: { refuse: 1 },
          nextRoute: "bath_no"
        }
      ]
    }
  ],

  bath_yes: [
    {
      name: "うさこ",
      text: "いいよ。でも、無理しないでね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "bath_yes_02"
    },
    {
      name: "うさぎ",
      text: "ありがとうございます。すぐに済ませます。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "bath_next"
    }
  ],

  bath_no: [
    {
      name: "うさこ",
      text: "ごめんね。家族以外の人にお風呂を貸すのは、ちょっと抵抗があるんだ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "bath_no_02"
    },
    {
      name: "うさぎ",
      text: "そうですよね……。俺、迷惑ばかりかけていますね。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "bath_no_03"
    },
    {
      name: "ぶきようくん",
      text: "それは普通のことだよ。うちのお風呂は家族で使っているんだから。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "bath_next"
    }
  ],

  bath_next: [
    {
      name: "",
      text: "男性は少し休んでから、帰る準備を始めた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "clothes_01"
    }
  ],

  clothes_01: [
    {
      name: "うさぎ",
      text: "あの……実は、服が汚れてしまっていて。着替えを借りることはできますか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "clothes_choice"
    }
  ],

  clothes_choice: [
    {
      name: "うさこ",
      text: "着替えかあ……。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "使っていない服を貸してあげる",
          count: { help: 1 },
          nextRoute: "clothes_yes"
        },
        {
          text: "ごめんね。服は貸せないよ",
          count: { refuse: 1 },
          nextRoute: "clothes_no"
        }
      ]
    }
  ],

  clothes_yes: [
    {
      name: "うさこ",
      text: "サイズが合うか分からないけど、これなら貸せるよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "clothes_yes_02"
    },
    {
      name: "うさぎ",
      text: "ありがとうございます。大切に使います。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "clothes_next"
    }
  ],

  clothes_no: [
    {
      name: "うさこ",
      text: "ごめんね。服を貸すのは難しいかな。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "clothes_no_02"
    },
    {
      name: "うさぎ",
      text: "分かりました。なんとかします。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "clothes_next"
    }
  ],

  clothes_next: [
    {
      name: "ぶきようくん",
      text: "もう遅いし、そろそろ帰ってもらった方がいいと思う。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "phone_01"
    }
  ],


  // ------------------------------------------
  // 第5章：スマートフォン
  // ------------------------------------------

  phone_01: [
    {
      name: "うさぎ",
      text: "あっ……スマホの充電が切れそうだ。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "phone_02"
    },
    {
      name: "うさぎ",
      text: "すみません。充電器を借りてもいいですか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "phone_choice"
    }
  ],

  phone_choice: [
    {
      name: "うさこ",
      text: "充電器くらいなら貸してあげてもいいかな？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "いいよ。充電しておきなよ",
          count: { help: 1 },
          nextRoute: "phone_yes"
        },
        {
          text: "ごめんね。貸せないよ",
          count: { refuse: 1 },
          nextRoute: "phone_no"
        }
      ]
    }
  ],

  phone_yes: [
    {
      name: "うさこ",
      text: "いいよ。ここに置いておいて。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "phone_yes_02"
    },
    {
      name: "うさぎ",
      text: "ありがとうございます。これで連絡できます。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "phone_next"
    }
  ],

  phone_no: [
    {
      name: "うさこ",
      text: "ごめんね。充電器は貸せないかな。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "phone_no_02"
    },
    {
      name: "うさぎ",
      text: "分かりました。大丈夫です。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "phone_next"
    }
  ],

  phone_next: [
    {
      name: "うさこ",
      text: "スマホも使えるようになったし、もう帰れるかな？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "phone_next_02"
    },
    {
      name: "うさぎ",
      text: "あの……実は、今夜帰るところがないんです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "stay_01"
    }
  ],


  // ------------------------------------------
  // 第6章：今夜だけ
  // ------------------------------------------

  stay_01: [
    {
      name: "うさこ",
      text: "帰るところがないの？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "stay_02"
    },
    {
      name: "うさぎ",
      text: "はい。お店の寮を出てしまって……。友達にも連絡したんですけど、返事がなくて。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "stay_03"
    },
    {
      name: "ぶきようくん",
      text: "それなら、ホテルや相談できる場所を探したらいいんじゃない？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "stay_04"
    },
    {
      name: "うさぎ",
      text: "でも、今はお金がなくて……。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "stay_05"
    },
    {
      name: "うさこ",
      text: "うーん……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "stay_choice"
    }
  ],

  stay_choice: [
    {
      name: "うさこ",
      text: "今夜だけなら、どうしよう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      choices: [
        {
          text: "今夜だけ泊めてあげる",
          count: { help: 1 },
          nextRoute: "stay_yes"
        },
        {
          text: "ごめんね。泊めることはできないよ",
          count: { refuse: 1 },
          nextRoute: "stay_no"
        }
      ]
    }
  ],

  stay_yes: [
    {
      name: "うさこ",
      text: "今夜だけなら、ここで休んでいっていいよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "stay_yes_02"
    },
    {
      name: "ぶきようくん",
      text: "ええっ！？本当に泊めるの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "stay_yes_03"
    },
    {
      name: "うさこ",
      text: "一晩だけだよ。明日には帰ってもらうから。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "stay_yes_04"
    },
    {
      name: "うさぎ",
      text: "ありがとうございます。絶対に迷惑はかけません。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "stay_next"
    }
  ],

  stay_no: [
    {
      name: "うさこ",
      text: "ごめんね。家には弟もいるし、泊めることはできないよ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "stay_no_02"
    },
    {
      name: "うさぎ",
      text: "そうですよね……。突然来た俺が悪いです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "stay_no_03"
    },
    {
      name: "ぶきようくん",
      text: "泊まる場所を探すのは、僕たちだけで抱え込まなくてもいいと思う。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "stay_next"
    }
  ],

  stay_next: [
    {
      name: "",
      text: "その夜、うさこたちはそれぞれの時間を過ごした。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "next_morning"
    }
  ],


  // ------------------------------------------
  // 第7章：翌朝
  // ------------------------------------------

  next_morning: [
    {
      name: "",
      text: "翌朝。窓から差し込む光で、うさこは目を覚ました。",
      speaker: "none",
      bg: "living-room",
      showImgId: "none",
      nextRoute: "next_morning_02"
    },
    {
      name: "うさぎ",
      text: "おはようございます。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "next_morning_03"
    },
    {
      name: "うさこ",
      text: "おはよう。体調はどう？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "next_morning_04"
    },
    {
      name: "うさぎ",
      text: "だいぶよくなりました。本当にありがとうございました。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "next_morning_05"
    },
    {
      name: "ぶきようくん",
      text: "体調がよくなったなら、これからどうするか決めようよ。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "next_morning_06"
    },
    {
      name: "うさぎ",
      text: "そうですね。俺、ちゃんと考えないといけないですよね。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "next_morning_07"
    },
    {
      name: "うさぎ",
      text: "でも……実は、もう一つだけお願いがあるんです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "request_01"
    }
  ],


  // ------------------------------------------
  // 第8章：ここに住ませてよ
  // ------------------------------------------

  request_01: [
    {
      name: "うさぎ",
      text: "ここに住ませてよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "request_02"
    },
    {
      name: "うさこ",
      text: "えっ……？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "request_03"
    },
    {
      name: "うさぎ",
      text: "ここなら安心できるし、うさこさんも優しいし。俺、ここにいたいんです。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "request_04"
    },
    {
      name: "ぶきようくん",
      text: "ちょっと待ってよ！今夜だけって話だったでしょ？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "request_05"
    },
    {
      name: "うさぎ",
      text: "分かってます。でも、今の俺には本当に行くところがないんです。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "request_06"
    },
    {
      name: "ぶきようくん",
      text: "それと、ここに住むことは別の話だよ。家賃や生活費はどうするの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "request_07"
    },
    {
      name: "うさぎ",
      text: "それは……これから考えます。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "request_08"
    },
    {
      name: "うさこ",
      text: "……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "request_09"
    },
    {
      name: "うさぎ",
      text: "それから、もう一つだけお願いしてもいいですか？",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "request_10"
    }
  ],


  // ------------------------------------------
  // 第9章：お金を貸して
  // ------------------------------------------

  request_10: [
    {
      name: "うさぎ",
      text: "お金を貸して。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "request_11"
    },
    {
      name: "うさこ",
      text: "お金……？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "request_12"
    },
    {
      name: "うさぎ",
      text: "少しだけでいいんです。仕事を探すまでの間、生活費が必要で……。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "request_13"
    },
    {
      name: "ぶきようくん",
      text: "だめだよ。お金を貸すのは、もっと慎重に考えないと。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "request_14"
    },
    {
      name: "うさぎ",
      text: "もちろん返します。うさこさんには本当に感謝しているんです。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "request_15"
    },
    {
      name: "ぶきようくん",
      text: "返すって言うだけなら簡単だよ。いつ、どうやって返すの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "request_16"
    },
    {
      name: "うさぎ",
      text: "……それは、まだ決められていません。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "request_17"
    },
    {
      name: "うさこ",
      text: "……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "final_choice"
    }
  ],


  // ------------------------------------------
  // 第10章：最後の選択
  // ------------------------------------------

  final_choice: [
    {
      name: "うさこ",
      text: "ここに住ませてほしい。それから、お金も貸してほしい……。どうしよう。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      choices: [
        {
          text: "いいよ",
          nextRoute: "final_yes"
        },
        {
          text: "いやだ",
          nextRoute: "final_no"
        }
      ]
    }
  ],

  final_yes: [
    {
      name: "うさこ",
      text: "……分かった。ここにいてもいいよ。お金も貸してあげる。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "final_yes_02"
    },
    {
      name: "うさぎ",
      text: "本当ですか！？ありがとう！うさこさん、大好きです！",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "final_yes_03"
    },
    {
      name: "ぶきようくん",
      text: "うさこ……本当にそれでいいの？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "final_yes_04"
    },
    {
      name: "うさこ",
      text: "だって、困っているんだもん。見捨てられないよ。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "final_yes_05"
    },
    {
      name: "ぶきようくん",
      text: "でも、これからの生活はどうするの？僕たちのお金だって限られているんだよ。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "final_yes_06"
    },
    {
      name: "うさぎ",
      text: "大丈夫です。俺、絶対にうさこさんを幸せにしますから。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "final_yes_branch"
    }
  ],

  final_yes_branch: [
    {
      branch: [
        {
          if: { refuse: { eq: 0 } },
          nextRoute: "ending_reform"
        }
      ],
      elseRoute: "ending_host"
    }
  ],

  final_no: [
    {
      branch: [
        {
          if: { refuse: { eq: 0 } },
          nextRoute: "ending_boundary"
        }
      ],
      elseRoute: "final_pressure"
    }
  ],

  final_pressure: [
    {
      name: "うさぎ",
      text: "……なんで？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "final_pressure_02"
    },
    {
      name: "うさこ",
      text: "えっ……？",
      speaker: "usako",
      showImgId: "img-usako-shocked",
      nextRoute: "final_pressure_03"
    },
    {
      name: "うさぎ",
      text: "今まであんなに優しくしてくれたのに。ご飯も、服も、泊まる場所も用意してくれたじゃないですか。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "final_pressure_04"
    },
    {
      name: "うさぎ",
      text: "俺のこと、助けてくれるんじゃなかったんですか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "final_pressure_05"
    },
    {
      name: "ぶきようくん",
      text: "それとこれとは違うよ！助けたからって、何でも引き受けなきゃいけないわけじゃない！",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "final_pressure_06"
    },
    {
      name: "うさぎ",
      text: "……うさこさんは、どう思いますか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "final_choice"
    }
  ],


  // ------------------------------------------
  // エンディング1：優しさの値段
  // 途中ですべて受け入れ、最後も受け入れる
  // ------------------------------------------

  ending_host: [
    {
      name: "",
      text: "それから、うさぎはうさこの家に住み始めた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_02"
    },
    {
      name: "",
      text: "最初のうちは、うさぎも「ありがとう」と何度も言っていた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_03"
    },
    {
      name: "うさぎ",
      text: "ねえ、うさこ。今日ちょっとお金が足りないんだけど。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "ending_host_04"
    },
    {
      name: "うさこ",
      text: "また？この前も貸したよね……。",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "ending_host_05"
    },
    {
      name: "うさぎ",
      text: "ごめんね。今月だけだから。来月にはちゃんと返すよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "ending_host_06"
    },
    {
      name: "",
      text: "けれど、来月になってもお金は返ってこなかった。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_07"
    },
    {
      name: "うさこ",
      text: "ねえ、仕事はどうするの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "ending_host_08"
    },
    {
      name: "うさぎ",
      text: "今はちょっと忙しいんだ。また今度考えるよ。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "ending_host_09"
    },
    {
      name: "",
      text: "うさこの貯金は少しずつ減っていった。うさぎの生活費も、食事代も、遊ぶお金も、いつの間にかうさこが負担するようになっていた。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_10"
    },
    {
      name: "ぶきようくん",
      text: "うさこ、もうやめようよ。これ以上は無理だよ。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_host_11"
    },
    {
      name: "うさこ",
      text: "でも……ここで私が見放したら、うさぎさんはどうなっちゃうの？",
      speaker: "usako",
      showImgId: "img-usako-sad",
      nextRoute: "ending_host_12"
    },
    {
      name: "ぶきようくん",
      text: "うさこが助け続けることだけが、うさぎさんのためになるのかな？",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_host_13"
    },
    {
      name: "",
      text: "うさこは答えられなかった。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_14"
    },
    {
      name: "",
      text: "誰かを助けたいという気持ちは、悪いことではない。でも、相手の問題をすべて背負ってしまうと、自分の生活も、自分の大切な人との関係も壊れてしまうことがある。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_15"
    },
    {
      name: "",
      text: "優しさには、境界線が必要だったのかもしれない。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_host_end"
    },
    {
      name: "",
      text: "ENDING：優しさの値段",
      speaker: "none",
      showImgId: "none",
      completeStepId: "daily-story-host",
      customAction: "returnToMenuScreen"
    }
  ],


  // ------------------------------------------
  // エンディング2：自分で決めた境界線
  // 途中ですべて受け入れ、最後に断る
  // ------------------------------------------

  ending_boundary: [
    {
      name: "うさこ",
      text: "ごめんね。ここに住ませることも、お金を貸すこともできないよ。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "ending_boundary_02"
    },
    {
      name: "うさぎ",
      text: "……そうですか。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "ending_boundary_03"
    },
    {
      name: "うさこ",
      text: "あなたが困っていることは分かるよ。でも、家族の生活もあるし、お金にも限りがあるの。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "ending_boundary_04"
    },
    {
      name: "ぶきようくん",
      text: "うさこ……。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_boundary_05"
    },
    {
      name: "うさこ",
      text: "今までできることはしたつもり。でも、これ以上は引き受けられない。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      nextRoute: "ending_boundary_06"
    },
    {
      name: "うさぎ",
      text: "……分かりました。今までありがとうございました。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "ending_boundary_07"
    },
    {
      name: "",
      text: "うさぎは、これからのことを自分で考えるために、家を出ていった。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_boundary_08"
    },
    {
      name: "ぶきようくん",
      text: "うさこ、助けてあげたことは間違いじゃないと思う。でも、何でも引き受けなくてよかったんだよ。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_boundary_09"
    },
    {
      name: "うさこ",
      text: "うん。私、優しくすることと、何でも言うことを聞くことを、同じに考えていたのかもしれない。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      nextRoute: "ending_boundary_10"
    },
    {
      name: "",
      text: "誰かを大切にすることと、自分を大切にすること。どちらか一方を選ぶ必要はない。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_boundary_end"
    },
    {
      name: "",
      text: "ENDING：自分で決めた境界線",
      speaker: "none",
      showImgId: "none",
      completeStepId: "daily-story-host",
      customAction: "returnToMenuScreen"
    }
  ],


  // ------------------------------------------
  // エンディング3：もう一度、自分の足で
  // 途中で一度でも断り、最後は受け入れる
  // ------------------------------------------

  ending_reform: [
    {
      name: "",
      text: "それから数日後。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_reform_02"
    },
    {
      name: "うさぎ",
      text: "うさこさん、少し話してもいいですか？",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "ending_reform_03"
    },
    {
      name: "うさこ",
      text: "どうしたの？",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "ending_reform_04"
    },
    {
      name: "うさぎ",
      text: "俺、ずっと甘えていたんだと思います。",
      speaker: "usagi",
      showImgId: "img-usagi-sad",
      nextRoute: "ending_reform_05"
    },
    {
      name: "うさぎ",
      text: "助けてもらえることが当たり前になって、自分で何とかしようとしていませんでした。",
      speaker: "usagi",
      showImgId: "img-usagi-epiphany",
      nextRoute: "ending_reform_06"
    },
    {
      name: "ぶきようくん",
      text: "それに気づいたなら、これからどうするか考えないとね。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_reform_07"
    },
    {
      name: "うさぎ",
      text: "はい。まずは仕事を探します。借りたお金も、少しずつ返します。",
      speaker: "usagi",
      showImgId: "img-usagi-happy",
      nextRoute: "ending_reform_08"
    },
    {
      name: "うさこ",
      text: "うん。自分の力で生活できるようになってね。",
      speaker: "usako",
      showImgId: "img-usako-normal",
      nextRoute: "ending_reform_09"
    },
    {
      name: "",
      text: "うさぎは家を出て、自分の生活を立て直すことにした。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_reform_10"
    },
    {
      name: "",
      text: "人に助けてもらうことは、悪いことではない。でも、助けてもらったことを理由に、相手に依存し続けてはいけない。",
      speaker: "none",
      showImgId: "none",
      nextRoute: "ending_reform_11"
    },
    {
      name: "ぶきようくん",
      text: "うさこも、ちゃんと考えて決めたんだね。",
      speaker: "bukiyou",
      showImgId: "img-bukiyokun-hard",
      nextRoute: "ending_reform_12"
    },
    {
      name: "うさこ",
      text: "うん。これからは、助けることと、何でも引き受けることを分けて考えるよ。",
      speaker: "usako",
      showImgId: "img-usako-epiphany",
      nextRoute: "ending_reform_end"
    },
    {
      name: "",
      text: "ENDING：もう一度、自分の足で",
      speaker: "none",
      showImgId: "none",
      completeStepId: "daily-story-host",
      customAction: "returnToMenuScreen"
    }
  ]

};