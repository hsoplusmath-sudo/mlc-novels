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
    { id: "fraita",  src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus" },
    { id: "kaeru", src: "../assets/bgm/bgm_kaeru-piano.opus" },
    { id: "namida", src: "../../assets/bgm/bgm_namidanokessyo.opus"}
];


//  🏟️ Back ground のConfig Master
window.BG_MASTER = [
    { id: "pc-office",  src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20pc-office.webp" },
    { id: "living-room", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20gorogoro.webp" },
    { id: "cafe-restaurant", src: "http://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/images/bg%20arbeit.webp"}
];
