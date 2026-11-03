export default {
  id: "money-stage",
  title: "お金ってだいじ！",
  label: "MONEY",
  description:
    "お金の仕組みや未来について考えよう。",
  heroImage: "../../site/top-hero.webp",
  layout: "card",

  games: [

    {
      id: "money-lending",
      title: "お金貸して！",
      description:
        "うさこがぶきようくんにお金を借りることになりました。貸す？貸さない？",
      image: "./money-lending/top_money-lending.webp",
      url: "./money-lending/index.html",
      open: "popup"
    },
      {
      id: "kakeibo",
      title: "家計簿つくるぞ！",
      description:
        "うさこと一緒にExcelで家計簿を作り、収支の自動計算や支出の見える化を学びます。",
      image: "../../assets/bg/bg_gorogoro.webp",
      url: "./kakeibo/index.html",
      open: "popup"
    },
    {
      id: "new-nisa",
      title: "NISAってなんだ？",
      description:
        "新NISAの仕組みやメリットについて学んでみましょう。",
      image: "../../assets/bg/bg_gorogoro.webp",
      url: "./new-nisa/index.html",
      open: "popup"
    }
  ]

};