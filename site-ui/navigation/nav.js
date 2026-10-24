
/**
 * ますレッスン｜静的サイト用ナビゲーション
 * popup-open / href="#popup-id" で開く
 * 外部HTMLは初回のみ読み込む
 */

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(
        ".mlc-navigation .popup-open"
    );

    const popups = document.querySelectorAll(".popup");

    let lastFocusedElement = null;

    function closePopup(popup) {
        if (!popup) return;

        popup.classList.remove("is-open");
        popup.setAttribute("aria-hidden", "true");

        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }

    async function loadPopupContent(popup) {
        const inner = popup.querySelector("[data-popup-src]");

        if (!inner || inner.dataset.loaded === "true") {
            return;
        }

        const src = inner.dataset.popupSrc;

        try {
            const response = await fetch(src);

            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }

            inner.innerHTML = await response.text();
            inner.dataset.loaded = "true";

        } catch (error) {
            console.error("ポップアップの読み込みに失敗:", error);

            inner.textContent =
                "内容を読み込めませんでした。ページを再読み込みしてください。";
        }
    }

    async function openPopup(popup, trigger) {
        if (!popup) return;

        document.querySelectorAll(".popup.is-open").forEach(function (item) {
            item.classList.remove("is-open");
            item.setAttribute("aria-hidden", "true");
        });

        lastFocusedElement = trigger;

        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");

        await loadPopupContent(popup);

        const closeButton = popup.querySelector(".popup-close");
        if (closeButton) closeButton.focus();
    }

    cards.forEach(function (card) {
        card.addEventListener("click", function (event) {
            const targetId = card.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) return;

            const popup = document.querySelector(targetId);

            if (!popup || !popup.classList.contains("popup")) return;

            event.preventDefault();
            openPopup(popup, card);
        });
    });

    popups.forEach(function (popup) {
        popup.addEventListener("click", function (event) {
            if (
                event.target.closest(".popup-close") ||
                event.target.closest(".complete-step-btn")
            ) {
                closePopup(popup);
                return;
            }

            if (event.target === popup) {
                closePopup(popup);
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            document.querySelectorAll(".popup.is-open").forEach(closePopup);
        }
    });
});

(function () {
    "use strict";

    window.ML_POPUPS = window.ML_POPUPS || {};

    window.openCustomModal = function (popupKey) {
        const data = window.ML_POPUPS[popupKey];

        const overlay = document.getElementById("custom-modal-overlay");
        const title = document.getElementById("custom-modal-title");
        const body = document.getElementById("custom-modal-body");

        if (!data || !overlay || !title || !body) {
            console.warn("ポップアップを表示できません:", popupKey);
            return;
        }

        title.textContent = data.title || "";

        body.innerHTML = (data.blocks || [])
            .filter(block => block.type === "html" && block.html)
            .map(block => block.html)
            .join("");

        overlay.style.display = "flex";
    };

    window.closeCustomModal = function () {
        const overlay = document.getElementById("custom-modal-overlay");
        if (overlay) overlay.style.display = "none";
    };

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            window.closeCustomModal();
        }
    });
})();