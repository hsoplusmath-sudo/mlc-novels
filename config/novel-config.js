/**
 * ノベルゲーム設定ファイル (novel-config.js)
 * 役割: キャラクター設定やシステム全体の初期値など, 変動するデータを一元管理する
 */

window.CHARACTER_MASTER = [
    { id: "img-usagi-happy",   src: "../../assets/chara/usagi_happy.webp",   alt: "うさぎ" },
    { id: "img-usagi-epiphany",   src: "../../assets/chara/usagi_epiphany.webp",   alt: "うさぎ（ひらめき）" },
    { id: "img-usagi-kaeru",   src: "../../assets/chara/usagi_kaeru.webp",   alt: "うさぎ（かえる）" },

    { id: "img-usako-normal", src: "../../assets/chara/usako_happy.webp", alt: "うさこ" },
    { id: "img-usako-sad",    src: "../../assets/chara/usako_sad.webp",    alt: "うさこ（悲）" },
    { id: "img-usako-shocked",   src: "../../assets/chara/usako_shocked.webp",   alt: "うさこ（衝撃）" },
    { id: "img-usako-epiphany",   src: "../../assets/chara/usako_epiphany.webp",   alt: "うさこ（ひらめき）" },

    { id: "img-hero-happy",   src: "../../assets/chara/hero_happy.webp",   alt: "ヒーロー" },
    { id: "img-bukiyokun-hard",   src: "../../assets/chara/bukiyokun_hard.webp",   alt: "ぶきようくん" },
    { id: "img-sikun-happy",   src: "../../assets/chara/komainu-un_happy.webp",   alt: "シーくん" },
    { id: "img-satyan-happy",   src: "../../assets/chara/komainu-a_happy.webp",   alt: "サーちゃん" },
    { id: "img-siri-normal",   src: "../../assets/chara/siri_normal.webp",   alt: "シリー" },
    { id: "img-ryujin-normal",   src: "../../assets/chara/ryujin_normal.webp",   alt: "龍神さん" },
    { id: "img-houou-normal",   src: "../../assets/chara/houou_normal.webp",   alt: "鳳凰" }

];

//  🎵 BGMのConfig Master

window.BGM_MASTER = [
    { id: "fraita",  src: "../../assets/bgm/bgm_france_italia.opus" },
    { id: "kaeru", src: "../../assets/bgm/bgm_kaeru-piano.opus" },
    { id: "namida", src: "../../assets/bgm/bgm_namidanokessyo.opus"},
    { id: "escort",  src: "../../assets/bgm/bgm_escort.opus" }
];


//  🏟️ Back ground のConfig Master
window.BG_MASTER = [
    // 職場
    { id: "pc-office",  src: "../../assets/bg/bg_pc-office.webp" },
    { id: "cafe-restaurant", src: "../../assets/bg/bg_arbeit.webp"},
    { id: "designer-room", src: "../../assets/bg/bg_designer-room.webp"},
    { id: "stocksnap", src: "../../assets/bg/bg_stocksnap-people.webp"},


    // 自宅
    { id: "living-room", src: "../../assets/bg/bg_gorogoro.webp" },
    { id: "kitchen", src: "../../assets/bg/bg_kitchen.webp" },

    // 娯楽
    { id: "hanabi", src: "../../assets/bg/bg_hanabi.webp" },
    { id: "omatsuri", src: "../../assets/bg/bg_omatsuri.webp" },
    { id: "beach", src: "../../assets/bg/bg_romaneau-beach.webp" },

    // 学校
    { id: "school-sakura", src: "../../assets/bg/bg_school-sakura.webp" },


    // 自然・神社
    { id: "kinjo-jinja", src: "../../assets/bg/bg_image-jinja.webp" },
    { id: "ryuchin-jinja", src: "../../assets/bg/ryuchin-jinja.webp" },
    { id: "manabiya", src: "../../assets/bg/bg_manabiya.webp" },
    { id: "sunny-sky", src: "../../assets/bg/bg_sunny-sky.webp" }

];
