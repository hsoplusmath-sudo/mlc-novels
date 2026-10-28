
/**
 * ホームページ：ゲーム一覧・更新情報の描画
 */
(() => {
  "use strict";

  function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function safeLocalHref(href) {
    if (typeof href !== "string") return "";
    if (/^(https?:|javascript:|data:)/i.test(href)) return "";
    return href;
  }

  function renderGames() {
    const list = document.querySelector("#game-list");
    if (!list) return;

    const games = (window.MLC_GAMES || [])
      .filter(game => game.published === true)
      .filter(game => safeLocalHref(game.href))
      .sort((a, b) => String(a.number).localeCompare(String(b.number)));

    list.replaceChildren();

    games.forEach(game => {
      const card = createElement(
        "a",
        `game-card${game.featured ? " featured" : ""}`
      );

      card.href = safeLocalHref(game.href);

      card.append(
        createElement("span", "game-number", game.number)
      );

      if (game.image) {
        const img = document.createElement("img");
        img.className = "game-thumbnail";
        img.src = safeLocalHref(game.image);
        img.alt = `${game.title}のアイキャッチ`;
        img.loading = "lazy";
        img.onerror = () => {
          img.remove();
          const icon = createElement(
            "span",
            `game-icon ${game.iconClass || ""}`,
            game.icon || "✧"
          );
          icon.setAttribute("aria-hidden", "true");
          card.insertBefore(icon, card.querySelector(".game-info"));
        };
        card.append(img);
      } else {
        const icon = createElement(
          "span",
          `game-icon ${game.iconClass || ""}`,
          game.icon || "✧"
        );
        icon.setAttribute("aria-hidden", "true");
        card.append(icon);
      }

      const info = createElement("span", "game-info");
      info.append(
        createElement("span", "game-tag", game.tag || ""),
        createElement("strong", "", game.title),
        createElement("span", "", game.description || "")
      );

      card.append(
        info,
        createElement("span", "game-arrow", "↗")
      );

      card.querySelector(".game-arrow")
        .setAttribute("aria-hidden", "true");

      list.append(card);
    });
  }

  function renderNews() {
    const section = document.querySelector("#news");
    const list = document.querySelector("#news-list");
    if (!section || !list) return;

    const news = (window.MLC_NEWS || [])
      .filter(item => item.published === true)
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

    list.replaceChildren();

    if (news.length === 0) {
      section.hidden = true;
      return;
    }

    section.hidden = false;

    news.slice(0, 3).forEach(item => {
      const article = createElement("article", "news-item");

      if (item.date) {
        const date = createElement("time", "news-date", item.date);
        date.dateTime = item.date;
        article.append(date);
      }

      article.append(
        createElement("h3", "news-title", item.title),
        createElement("p", "news-description", item.description || "")
      );

      const href = safeLocalHref(item.href);
      if (href) {
        const link = createElement("a", "news-link", "詳しく見る →");
        link.href = href;
        article.append(link);
      }

      list.append(article);
    });
  }

  function init() {
    renderGames();
    renderNews();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
