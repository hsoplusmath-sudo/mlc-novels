// =====================================
// ステージ設定読み込み
// =====================================

const configUrl = new URL("../../games/stage-config.js", import.meta.url);
const { default: config } = await import(configUrl.href);

const featuredArea = document.getElementById("featured-area");
const grid = document.getElementById("stage-grid");


// =====================================
// カード生成
// =====================================

function createCard(stage, featured = false) {

  const card = document.createElement("a");

  card.className = featured
    ? "stage-card stage-card-featured"
    : "stage-card";

  card.href = new URL(stage.url, configUrl).href;

  const imageArea = document.createElement("div");
  imageArea.className = "stage-card-image";

  const img = document.createElement("img");
  img.src = new URL(stage.image, configUrl).href;
  img.alt = stage.title;
  img.loading = "lazy";

  const label = document.createElement("span");
  label.className = "stage-card-label";
  label.textContent = stage.label || "";

  imageArea.append(img, label);

  const content = document.createElement("div");
  content.className = "stage-card-content";

  const title = document.createElement("h3");
  title.textContent = stage.title;

  const subtitle = document.createElement("p");
  subtitle.className = "stage-subtitle";
  subtitle.textContent = stage.subtitle || "";

  const description = document.createElement("p");
  description.textContent = stage.description || "";

  const link = document.createElement("span");
  link.className = "stage-card-link";
  link.textContent = "ステージに入る →";

  content.append(title, subtitle, description, link);
  card.append(imageArea, content);

  return card;
}


// =====================================
// 注目ステージ
// =====================================

const featured = config.stages.find(stage => stage.featured);

if (featured) {
  featuredArea.appendChild(createCard(featured, true));
} else {
  featuredArea.remove();
}


// =====================================
// その他のステージ
// =====================================

config.stages
  .filter(stage => !stage.featured)
  .forEach(stage => {
    grid.appendChild(createCard(stage));
  });