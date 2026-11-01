export default {
  stages: [
    {
      id: "extra-stage",
      title: "エクストラステージ",
      subtitle: "エクストラ",
      description: "ここから旅を広げよう",
      image: "../site/top-hero.webp",
      url: "./extra-stage/index.html",
      label: "Trip",
      featured: true
    },
    {
      id: "tutorial-stage",
      title: "チュートリアルステージ",
      subtitle: "チュートリアル & エクストラ",
      description: "ここから旅を広げよう",
      image: "../assets/bg/bg_manabiya.webp",
      url: "./tutorial-stage/index.html",
      label: "Tutorial",
      featured: false
    },
    {
      id: "sine-stage",
      title: "サインってなんだ？！",
      subtitle: "三角関数の基本",
      description: "サイン・コサイン・タンジェントってなんだ？に決着をつけましょう！",
      image: "../assets/bg/bg_manabiya.webp",
      url: "./sine-stage/index.html",
      label: "Sine",
      featured: false
    }

    {
      id: "money",
      title: "お金の世界",
      subtitle: "数学でお金を考える",
      description: "お金の仕組みや未来について考えよう。",
      image: "./money/money-stage.jpg",
      url: "./money/",
      label: "MONEY",
      featured: false
    }
  ]
};