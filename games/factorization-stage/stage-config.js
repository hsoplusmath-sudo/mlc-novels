export default {
  id: "sine-stage",
  title: "サインってなんだ？！",
  label: "Sine Stage",
  description:
    "サイン・コサイン・タンジェントってなんだ？に決着をつけましょう！",
  heroImage: "../../site/top-hero.webp",
  layout: "card",

  games: [
    {
      id: "circle-pi",
      title: "πってなんだ？",
      description:
        "正方形と円を比べながら、円周率 π が表すものを探ります。",
      image: "../../assets/bg/bg_manabiya.webp",
      url: "./circle/index.html",
      open: "popup" // "popup" or "page"
    },
    {
      id: "circle-sine",
      title: "サインってなんだ？",
      description:
        "三角関数の基本であるサインを学びましょう。",
      image: "./circle/top_circle-sine.webp",
      url: "./circle/index.html",
      open: "popup"
    },
    {
      id: "moon-distance",
      title: "月まではどれくらい？",
      description:
        "月までどれくらい？？と、うさこはふと考えてみました。",
      image: "./moon-distance/top_moon-distance.webp",
      url: "./moon-distance/index.html",
      open: "popup"
    }
  ]

};