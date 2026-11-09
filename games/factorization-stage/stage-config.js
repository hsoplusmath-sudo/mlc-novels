export default {
  id: "factorization-stage",
  title: "因数分解ってなんだ？！",
  label: "Factorization Stage",
  description:
    "因数分解ってなんだ？に決着をつけましょう！",
  heroImage: "../../site/top-hero.webp",
  layout: "card",

  games: [
    {
      id: "factorization",
      title: "因数分解ってなんだ？",
      description:
        "因数分解の基本を学びましょう。",
      image: "../../assets/bg/bg_manabiya.webp",
      url: "./factorization/index.html",
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