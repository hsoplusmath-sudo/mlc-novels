(function () {
    "use strict";

    window.ML_POPUPS = window.ML_POPUPS || {};

    const overlay = () => document.getElementById("custom-modal-overlay");
    const titleEl = () => document.getElementById("custom-modal-title");
    const bodyEl  = () => document.getElementById("custom-modal-body");

    window.openCustomModal = async function (key) {
        const data = window.ML_POPUPS[key];
        const o = overlay(), t = titleEl(), b = bodyEl();

        if (!data || !o || !t || !b) {
            console.warn("ポップアップを表示できません:", key, { data: !!data, overlay: !!o });
            return;
        }

        t.textContent = data.title || "";
        o.style.display = "flex";
        o.setAttribute("aria-hidden", "false");

        // 外部HTML方式
        if (data.src) {
            b.textContent = "読み込み中…";
            try {
                const res = await fetch(data.src);
                if (!res.ok) throw new Error("HTTP " + res.status);
                b.innerHTML = await res.text();
            } catch (e) {
                console.error("ポップアップの読み込みに失敗:", e);
                b.textContent = "内容を読み込めませんでした。";
            }
            return;
        }

        // 旧 blocks 方式
        b.innerHTML = (data.blocks || [])
            .filter(x => x.type === "html" && x.html)
            .map(x => x.html)
            .join("");
    };

    window.closeCustomModal = function () {
        const o = overlay();
        if (!o) return;
        o.style.display = "none";
        o.setAttribute("aria-hidden", "true");
    };

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") window.closeCustomModal();
    });
})();