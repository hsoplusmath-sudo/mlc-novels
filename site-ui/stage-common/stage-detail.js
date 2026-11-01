
// =====================================
// ステージ設定の読み込み
// =====================================

const configPath = document.body.dataset.stageConfig;

if (!configPath) {
  throw new Error("stage-config.js が指定されていません。");
}

const configUrl = new URL(configPath, window.location.href);

const { default: config } = await import(configUrl.href);


// =====================================
// DOM取得
// =====================================

const grid = document.getElementById("game-grid");
const hero = document.getElementById("stage-hero");

const modal = document.getElementById("game-modal");
const modalBody = document.getElementById("modal-body");
const playButton = document.getElementById("modal-play");

if (!grid || !modal || !modalBody || !playButton) {
  throw new Error("ステージページのHTML要素が見つかりません。");
}

let selectedGame = null;


// =====================================
// URL解決
// stage-config.js を基準にする
// =====================================

function resolveAsset(path) {
  return new URL(path, configUrl).href;
}


// =====================================
// ステージ情報の表示
// =====================================

document.title = `${config.title} | ますレッスン`;

document.getElementById("stage-title").textContent =
  config.title;

document.getElementById("stage-label").textContent =
  config.label || "MASULESSON STAGE";

document.getElementById("stage-description").textContent =
  config.description || "";

if (config.heroImage && hero) {
  const imageUrl = resolveAsset(config.heroImage);

  hero.style.backgroundImage =
    `linear-gradient(#0005, #0007), url("${imageUrl}")`;
}


// =====================================
// ゲームカード生成
// =====================================

config.games.forEach(game => {

  const card = document.createElement("article");
  card.className = "game-card";

  const imageArea = document.createElement("div");
  imageArea.className = "game-card-image";

  const image = document.createElement("img");
  image.src = resolveAsset(game.image);
  image.alt = game.title;
  image.loading = "lazy";

  imageArea.appendChild(image);

  const content = document.createElement("div");
  content.className = "game-card-content";

  const title = document.createElement("h3");
  title.textContent = game.title;

  const description = document.createElement("p");
  description.textContent = game.description || "";

  const button = document.createElement("button");
  button.className = "game-card-button";
  button.textContent =
    game.open === "popup" ? "ゲームを見る" : "ゲームを始める";

  content.append(title, description, button);

  card.append(imageArea, content);

  // カード全体をクリック → すぐにゲームを起動
  card.addEventListener("click", () => {

    if (game.open === "popup") {
      launchGame(game);
    } else {
      location.href = resolveAsset(game.url);
    }

  });

  // ボタンをクリック → 説明画面を表示
  button.addEventListener("click", event => {

    // カード側のクリックが一緒に動かないようにする
    event.stopPropagation();

    if (game.open === "popup") {
      openGamePopup(game);
    } else {
      location.href = resolveAsset(game.url);
    }

  });

  grid.appendChild(card);

});


// =====================================
// Popup表示
// =====================================

function openGamePopup(game) {

  selectedGame = game;

  modalBody.replaceChildren();

  const image = document.createElement("img");
  image.src = resolveAsset(game.image);
  image.alt = game.title;

  const title = document.createElement("h2");
  title.textContent = game.title;

  const description = document.createElement("p");
  description.textContent = game.description || "";

  modalBody.append(image, title, description);

  playButton.hidden = false;

  modal.classList.add("active");
  document.body.classList.add("modal-open");

}

// =====================================
// ゲームをiframeで起動
// =====================================

function launchGame(game) {

  selectedGame = game;

  const iframe = document.createElement("iframe");

  iframe.src = resolveAsset(game.url);
  iframe.className = "game-iframe";
  iframe.title = game.title;

  iframe.allow = "autoplay; fullscreen";
  iframe.setAttribute("allowfullscreen", "");

  modalBody.replaceChildren(iframe);

  playButton.hidden = true;

  modal.classList.add("active");
  document.body.classList.add("modal-open");

}

// =====================================
// Popup内でゲームを起動
// =====================================

playButton.addEventListener("click", () => {

  if (!selectedGame || !selectedGame.url) return;

  launchGame(selectedGame);

});


// =====================================
// Popupを閉じる
// =====================================

function closeModal() {

  modal.classList.remove("active");

  // iframeを破棄してゲームを停止
  modalBody.replaceChildren();

  playButton.hidden = false;

  selectedGame = null;

  document.body.classList.remove("modal-open");

}

modal.querySelectorAll("[data-close]").forEach(element => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    modal.classList.contains("active")
  ) {
    closeModal();
  }

});
