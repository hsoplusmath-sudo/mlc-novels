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
      image: "./starter/top_tutorial.webp",
      url: "./starter/index.html",
      open: "popup" // "popup" or "page"
    },
    {
      id: "concept",
      title: "コンセプト",
      description:
        "このゲームのコンセプトを感じてみよう。",
      image: "./starter//top_concept.webp",
      url: "./starter/index.html",
      open: "popup"
    },
    {
      id: "inaba-rabbit",
      title: "うさことカズザメ",
      description:
        "うさこが かずを数えながらカズザメたちの背中を渡って海の向こう岸へ。",
      image: "./inaba-rabbit/top_inaba-rabbit.webp",
      url: "./inaba-rabbit/index.html",
      open: "popup"
    }
  ]

};