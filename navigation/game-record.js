/**

* ==========================================================
* ゲーム記録 共通UI
*
* 進捗状況 / エンディング / 明日の出来事
*
* ・進捗状況：達成状態を表示
* ・エンディング：達成数と未発見のエンディングを表示
* ・明日の出来事：解放条件を満たしたステージを表示
*
* completeStepId と同じIDで達成状態を確認
* ==========================================================
  */

(function () {
"use strict";


// ========================================
// 1. 達成状態を取得
// ========================================

function isCompleted(id) {
    return localStorage.getItem(id) === "completed";
}


// ========================================
// 2. HTML表示用エスケープ
// ========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[c];
    });
}


// ========================================
// 3. 進捗状況の表示
// ========================================

function renderRecordRows(items) {
    return items.map(function (item) {
        const done = isCompleted(item.id);

        return `
            <div class="record-row ${done ? "is-completed" : ""}">
                <span class="record-label">
                    ${escapeHTML(item.label)}
                </span>

                <span class="record-status ${done ? "completed" : ""}">
                    ${done ? "✓ 達成" : "未達成"}
                </span>
            </div>
        `;
    }).join("");
}


// ========================================
// 4. エンディングの表示
// ========================================

function renderEndings(items) {
    const total = items.length;

    const completedCount = items.filter(function (item) {
        return isCompleted(item.id);
    }).length;

    const rows = items.map(function (item) {
        const done = isCompleted(item.id);

        return `
            <div class="record-row ${done ? "is-completed" : ""}">
                <span class="record-label ${done ? "ending-found" : "ending-hidden"}">
                    ${done
                        ? "✧ " + escapeHTML(item.label)
                        : "？？？"}
                </span>

                <span class="record-status ${done ? "completed" : ""}">
                    ${done ? "✓ 達成" : "未達成"}
                </span>
            </div>
        `;
    }).join("");

    return `
        <div class="ending-heading">
            <span>エンディング</span>
            <span class="ending-count">${completedCount} / ${total}</span>
        </div>

        ${rows}
    `;
}


// ========================================
// 5. 次への扉の解放条件を判定
// ========================================

function isDoorUnlocked(door) {
    const all = door.requiredAll || [];
    const any = door.requiredAny || [];

    // requiredAll：すべて達成
    const allOK = all.every(isCompleted);

    // requiredAny：いずれか達成
    const anyOK =
        any.length === 0 || any.some(isCompleted);

    return allOK && anyOK;
}


// ========================================
// 6. 次への扉を表示
// ========================================

function renderDoors(doors) {
    const available = doors.filter(isDoorUnlocked);

    if (available.length === 0) {
        return `
            <div class="record-row">
                <span class="record-label">
                    このゲームをクリアすると開放されるステージです。
                </span>
            </div>
        `;
    }

    return available.map(function (door) {
        return `
            <a class="record-door"
               href="${escapeHTML(door.url)}">

                <span class="record-door-icon" aria-hidden="true">
                    ⛩️
                </span>

                <span class="record-label">
                    <span class="record-door-title">
                        ${escapeHTML(door.label)}
                    </span>

                    <span class="record-door-description">
                        ${escapeHTML(door.description || "")}
                    </span>
                </span>

                <span class="record-door-arrow"
                      aria-hidden="true">›</span>
            </a>
        `;
    }).join("");
}


// ========================================
// 7. 画面を更新
// ========================================

function renderGameRecord() {
    const config = window.GAME_RECORD_CONFIG;

    if (!config) {
        console.warn(
            "[Game Record] GAME_RECORD_CONFIG がありません。"
        );
        return;
    }

    const progress = document.getElementById("record-progress");
    const endings = document.getElementById("record-endings");
    const doors = document.getElementById("record-doors");

    if (!progress || !endings || !doors) {
        console.warn(
            "[Game Record] 表示先のHTMLが見つかりません。"
        );
        return;
    }

    // 進捗状況
    progress.innerHTML =
        renderRecordRows(config.progress || []);

    // エンディング
    endings.innerHTML =
        renderEndings(config.endings || []);

    // 次への扉
    doors.innerHTML =
        renderDoors(config.doors || []);
}


// ========================================
// 8. 外部から更新できるようにする
// ========================================

window.renderGameRecord = renderGameRecord;


// ========================================
// 9. 初回表示
// ========================================

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        renderGameRecord,
        { once: true }
    );
} else {
    renderGameRecord();
}


// ========================================
// 10. ゲーム内で達成したときに更新
// ========================================

window.addEventListener(
    "mlc:step-completed",
    renderGameRecord
);


// ========================================
// 11. 別タブで保存状況が変わったときに更新
// ========================================

window.addEventListener("storage", function (event) {
    if (
        event.key === null ||
        event.newValue !== event.oldValue
    ) {
        renderGameRecord();
    }
});


})();
