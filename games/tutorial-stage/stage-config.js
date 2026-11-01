export default {
  id: "tutorial-stage",
  title: "チュートリアルステージ",
  label: "Tutorial",
  description:
    "このステージでは、ゲームのやり方を学ぶことができます。",
  heroImage: "../../site/top-hero.webp",
  layout: "card",

  games: [

    {
      id: "starter",
      title: "チュートリアル",
      description:
        "ゲームのやり方を学びます。",
      image: "../../assets/bg/bg_manabiya.webp",
      url: "./starter/index.html",
      open: "popup" // "popup" or "page"
    },
    {
      id: "concept",
      title: "コンセプト",
      description:
        "このゲームのコンセプトを感じてみよう。",
      image: "../../assets/bg/bg_nohara.webp",
      url: "./starter/index.html",
      open: "popup"
    },
    {
      id: "inaba-rabbit",
      title: "うさことカズザメ",
      description:
        "うさこが かずを数えながらカズザメたちの背中を渡って海の向こう岸へ。",
      image: "../../assets/bg/bg_the-ocean.webp",
      url: "./inaba-rabbit/index.html",
      open: "popup"
    }
  ]

};