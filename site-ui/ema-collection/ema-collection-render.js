(function () {
  "use strict";

  // 獲得済みか(localStorage に "completed" で保存されている前提)
  function isDone(id) {
    return localStorage.getItem(id) === "completed";
  }

  window.mlcRenderEma = function () {
    const root = document.querySelector('[data-collection-id="ema-collection"]');
    const items = window.SEMINAR_COLLECTIONS && window.SEMINAR_COLLECTIONS["ema-collection"];
    if (!root || !items) {
      console.warn("絵馬の描画に必要な要素またはデータがありません", { root: !!root, items: !!items });
      return;
    }

    const grid = root.querySelector(".grid-display-area");
    grid.innerHTML = "";

    items.forEach(function (item) {
      // unlockIds がすべて完了済みなら解放(空なら最初から解放)
      const unlocked = (item.unlockIds || []).every(isDone);
      if (!unlocked) return; // 非表示にするなら return、伏せて表示したいなら下のコメントを参照

      const card = document.createElement("div");
      card.className = "collection-card";

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.title;
      card.appendChild(img);

      const title = document.createElement("div");
      title.className = "collection-card-title";
      title.textContent = item.title;
      card.appendChild(title);

      // エンディングごとの状況
      const badges = document.createElement("div");
      badges.className = "collection-card-badges";
      (item.endings || []).forEach(function (end) {
        const b = document.createElement("span");
        b.className = "collection-badge collection-badge-" + end.type + (isDone(end.id) ? " is-done" : "");
        b.textContent = end.label;
        badges.appendChild(b);
      });
      card.appendChild(badges);

      if (item.link) {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "collection-card-link";
        a.appendChild(card);
        grid.appendChild(a);
      } else {
        grid.appendChild(card);
      }
    });
  };
})();