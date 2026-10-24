/**
 * ゲームごとの記録・次への扉の設定
 * completeStepId と同じIDで達成状態を管理する
 */

window.GAME_RECORD_CONFIG = {
    gameId: "tutorial",
    gameTitle: "Excelで家計簿を作ろう！",

    // ① 進捗状況
    progress: [
        {  id: "kakeibo_step1",  label: "家計簿の表を作る" },
        {  id: "kakeibo_step2",  label: "自動で計算する" },
        {  id: "kakeibo_step3",  label: "家計簿を完成させる" },
        {  id: "kakeibo_step4",  label: "家計簿を活用する" }
    ],

    // ② エンディング
    endings: [
        {  id: "kakeibo_step4", label: "家計簿マスター" }
    ],

    // ③ 明日の出来事（次への扉）
    doors: [
        {  id: "circle_door_sign", label: "サインってなに？",
            description: "円と波のつながりを発見する", 
            url: "/game/sine/index.html",
            requiredAny: [ "circle_end_normal", "circle_end_discovery" ] // or
        }
    ]
};