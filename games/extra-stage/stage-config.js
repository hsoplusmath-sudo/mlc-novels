export default {
  id: "extra-stage",
  title: "エクストラステージ",
  label: "Extra",
  description:
    "ここから旅を広げよう",
  heroImage: "../../site/top-hero.webp",
  layout: "card",

  games: [

    {
      id: "jinja",
      title: "近くの神社",
      description:
        "家の近くにありました。",
      image: "../../assets/bg/bg_image-jinja.webp",
      url: "./jinja/index.html",
      open: "popup"
    },
      {
      id: "world-trip",
      title: "世界へ、世界を知りたい！",
      description:
        "世界を周って、うさこたちは様々な体験をします。",
      image: "../../assets/bg/bg_romaneau-beach.jpg",
      url: "./world-trip/index.html",
      open: "popup"
    }
  ]

};