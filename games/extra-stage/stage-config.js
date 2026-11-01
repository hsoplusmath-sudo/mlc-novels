export default {
  id: "extra-stage",
  title: "エクストラステージ",
  label: "Tutorial & Extra",
  description:
    "ここから旅を広げよう",
  heroImage: "./starter/img/tutorial_cake.webp",
  layout: "card",

  games: [

    {
      id: "starter",
      title: "チュートリアル",
      description:
        "ゲームのやり方を学びます。",
      image: "../../assets/bg/bg_nohara.webp",
      url: "./starter/index.html",
      open: "popup"
    },

    {
      id: "circle-sine",
      title: "サインってなに？",
      description:
        "波の動きから、サインの意味を考えてみよう。",
      image: "./circle-sine/circle-sine.jpg",
      url: "./circle-sine/",
      open: "page"
    }

  ]

};