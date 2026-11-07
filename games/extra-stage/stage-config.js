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
      title: "ここは近くの神社",
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
      image: "./world-trip/top_world-trip.webp",
      url: "./world-trip/index.html",
      open: "popup"
    }
  ]

};