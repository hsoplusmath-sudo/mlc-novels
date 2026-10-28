
/**
 * ホームページ：ゲーム一覧データ
 *
 * 表示内容はここで管理します。
 * 公開状態は実際の動作確認後に設定してください。
 */
window.MLC_GAMES = [
  {
    id: "world-trip",
    number: "01",
    title: "World Trip",
    tag: "STORY ADVENTURE",
    description: "世界を旅しながら、数学のひみつを見つける冒険へ。",
    href: "./games/world-trip/index.html",
    icon: "✈️",
    iconClass: "shrine",
    image: "./assets/bg/bg_nohara.webp",
    featured: true,
    published: true
  },
  {
    id: "jinja",
    number: "02",
    title: "近所の神社",
    tag: "STORY ADVENTURE",
    description: "近所の神社で出会う出来事から、自分の生き方や進み方について考える物語です。",
    href: "./games/jinja/index.html",
    icon: "⛩",
    iconClass: "compass",
    image: "./assets/images/img_jinja-left.webp",
    featured: false,
    published: true
  },
  {
    id: "tutorial",
    number: "00",
    title: "チュートリアル",
    tag: "FIRST STEP",
    description: "うさこと一緒に、ゲームの進め方やポップアップの使い方を体験できます。",
    href: "./games/tutorial/index.html",
    icon: "✧",
    iconClass: "compass",
    image: "./assets/bg/bg_manabiya.webp",
    featured: false,
    published: true
  },
  {
    id: "inaba-rabbit",
    number: "03",
    title: "うさことカズザメ",
    tag: "STORY ADVENTURE",
    description: "うさこが かずを数えながらカズザメたちの背中を渡って海の向こう岸へ。",
    href: "./games/inaba-rabbit/index.html",
    icon: "🐇",
    iconClass: "compass",
    image: "./assets/bg/bg_the-ocean.webp",
    featured: false,
    published: true
  }
];
