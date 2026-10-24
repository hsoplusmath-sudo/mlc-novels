/**
 * ゲームごとの記録・次への扉の設定
 */

window.GAME_RECORD_CONFIG = {
    gameId: "tutorial",
    gameTitle: "Excelで家計簿を作ろう！",

    // ① 進捗状況
    progress: [
        {  id: "tutorial_1",  label: "ポップアップの見方" },
        {  id: "tutorial_2",  label: "学習できること" },
        {  id: "tutorial_3",  label: "電卓の使い方" },
        {  id: "tutorial_4",  label: "友達の紹介" }
    ],

    // ② エンディング
    endings: [
        {  id: "tutorial_end", label: "チュートリアル完了" }
    ],

    // ③ 明日の出来事（次への扉）
    doors: [
        {  id: "tutorial_end", label: "近所の神社",
            description: "ここは近所の神社です", 
            url: "/game/1_jinja/index.html",
            requiredAny: [ "tutorial_end" ] // or
        }
    ]
};