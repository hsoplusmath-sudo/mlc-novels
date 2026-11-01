(function () {
    "use strict";

    const loaderScript = document.currentScript;
    if (!loaderScript || !loaderScript.src) {
        console.error("common-loader.js の場所を取得できません。");
        return;
    }

    const coreUrl = new URL("./", loaderScript.src);
    const siteRoot = new URL("../", coreUrl); // サイトのルートディレクトリ

    // 表示領域が縦長ならモバイル版(3:4)、横長ならPC版(16:9)
    const portraitQuery = window.matchMedia("(orientation: portrait)");

    function checkIsMobile() {
        return portraitQuery.matches;
    }

    const isMobile = checkIsMobile();

    // 共通の基本スタイル(各ゲームのHTMLに書かなくてよい)
    const baseStyle = document.createElement("style");
    baseStyle.textContent = `
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
        }
        .masulesson-proportion-box {
            margin: 0 !important;
            top: 0 !important;
            left: 0 !important;
        }
    `;
    document.head.appendChild(baseStyle);


    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("JS読み込み失敗: " + src));
            document.head.appendChild(script);
        });
    }

    function loadCSS(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            link.onload = () => resolve();
            link.onerror = () => reject(new Error("CSS読み込み失敗: " + href));
            document.head.appendChild(link);
        });
    }

    async function init() {
        if (!document.getElementById("novel-bgm")) {
            const audio = document.createElement("audio");
            audio.id = "novel-bgm";
            audio.loop = true;
            audio.preload = "auto";
            document.body.appendChild(audio);
        }

        // CSS読み込み
        const cssFile = isMobile ? "novel-style-mobile.css" : "novel-style.css";
        await loadCSS(new URL(cssFile, coreUrl).href );

        // ① 設定ファイル (config/novel-config.js)
        await loadScript(new URL("config/novel-config.js", siteRoot).href);

        // ② ポップアップデータ群 (popup-data/ 配下のファイル)
        await loadScript(new URL("popup-data/jinsei.js", siteRoot).href);
        //  await loadScript(new URL("popup-data/others.js", siteRoot).href);

        // assets/ へのパスを、ルート基準に補正する
        // 例: "../../assets/chara/a.webp" → "https://.../assets/chara/a.webp"
        function fixAssetPath(p) {
            if (typeof p !== "string") return p;
            const m = p.match(/^(?:\.\.?\/)+(assets\/.*)$/);
            return m ? new URL(m[1], siteRoot).href : p;
        }

        [
            window.CHARACTER_MASTER,
            window.BG_MASTER,
            window.BGM_MASTER,
            window.POPUP_MASTER
        ].forEach(list => {
            (list || []).forEach(item => {
                if (item && item.src) item.src = fixAssetPath(item.src);
            });
        });

        // ③ ゲームエンジン
        const engineFile = isMobile ? "novel-engine-mobile.js" : "novel-engine.js";
        await loadScript(new URL(engineFile, coreUrl).href);

        // 背景・立ち絵・ポップアップ画像を先に読み込んでデコードしておく
        function preloadImages(list) {
            return Promise.all((list || []).map(item => new Promise(resolve => {
                const img = new Image();
                img.onload = () => {
                    // デコード完了まで待つ（対応ブラウザのみ）
                    if (img.decode) {
                        img.decode().then(resolve, resolve);
                    } else {
                        resolve();
                    }
                };
                img.onerror = () => resolve();
                img.src = item.src;
            })));
        }

        await Promise.all([
            preloadImages(window.BG_MASTER),
            preloadImages(window.CHARACTER_MASTER),
            preloadImages(window.POPUP_MASTER)
        ]);


        document.dispatchEvent(new Event("novel-engine-ready"));
    }

    init().catch(error => {
        console.error(error);
        alert("ゲームの共通ファイルを読み込めませんでした。");
    });

    // 向きが変わったとき、ステージ選択画面ならレイアウトを切り替える
    function isSelectorVisible() {
        const el = document.getElementById("stage-selector");
        return !el || getComputedStyle(el).display !== "none";
    }

    function onOrientationChange() {
        if (checkIsMobile() === isMobile) return;
        if (isSelectorVisible()) {
            location.reload();
        }
        // プレイ中はリロードしない（進行を守る）
    }

    if (portraitQuery.addEventListener) {
        portraitQuery.addEventListener("change", onOrientationChange);
    } else {
        portraitQuery.addListener(onOrientationChange); // 古いSafari用
    }

})();



/* ===== 追加: システムボタン(共通) ===== */
(function () {
  "use strict";

  // ボタンを増やすときは、この一覧に1つ追加して、下に setup 関数を書くだけ
  var SYSTEM_BUTTONS = [
    { id: "bgm-toggle-btn",        icon: "🔊", title: "BGM オン/オフ", setup: setupBgm },
    { id: "fullscreen-toggle-btn", icon: "⛶",  title: "全画面表示",   setup: setupFullscreen }
  ];

  // ---------- BGM ----------
  function setupBgm(btn) {
    var bgm = document.getElementById("novel-bgm");
    var STORAGE_KEY = "masulesson-bgm-muted";

    if (!bgm) {
      btn.style.display = "none";
      return;
    }

    function loadMuted() {
      try { return localStorage.getItem(STORAGE_KEY) === "1"; } catch (e) { return false; }
    }
    function saveMuted(v) {
      try { localStorage.setItem(STORAGE_KEY, v ? "1" : "0"); } catch (e) {}
    }
    function render() {
      btn.textContent = bgm.muted ? "🔇" : "🔊";
      btn.setAttribute("aria-pressed", bgm.muted ? "true" : "false");
    }

    bgm.muted = loadMuted();
    render();

    btn.addEventListener("click", function () {
      bgm.muted = !bgm.muted;
      saveMuted(bgm.muted);
      render();
    });
    // 曲が切り替わっても、ミュート設定を維持する
    bgm.addEventListener("loadstart", function () {
      bgm.muted = loadMuted();
      render();
    });
  }

  // ---------- 全画面 ----------
  function setupFullscreen(btn) {
    var root = document.documentElement;

    // iPhoneのSafariなど、非対応の環境ではボタンを隠す
    if (!(root.requestFullscreen || root.webkitRequestFullscreen)) {
      btn.style.display = "none";
      return;
    }

    function isFullscreen() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement);
    }
    function render() {
      btn.textContent = isFullscreen() ? "✕" : "⛶";
      btn.title = isFullscreen() ? "全画面を終了" : "全画面表示";
    }

    btn.addEventListener("click", function () {
      if (isFullscreen()) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else {
        var req = root.requestFullscreen || root.webkitRequestFullscreen;
        var p = req.call(root);
        if (p && p.catch) p.catch(function () {});
      }
    });
    document.addEventListener("fullscreenchange", render);
    document.addEventListener("webkitfullscreenchange", render);
    render();
  }

  // ---------- ボタンの作成 ----------
  function init() {
    if (document.getElementById("sys-btn-bar")) return; // 二重に作らない

    var style = document.createElement("style");
    style.textContent =
      ".sys-btn-bar{position:fixed;top:8px;right:60px;z-index:99999;display:flex;gap:6px;}" +
      ".sys-btn{width:36px;height:36px;border:none;border-radius:50%;background:rgba(0,0,0,0.45);" +
      "color:#fff;font-size:18px;line-height:36px;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;}" +
      ".sys-btn:hover{background:rgba(0,0,0,0.65);}" +
      ".sys-btn:active{transform:scale(0.94);}";
    document.head.appendChild(style);

    var bar = document.createElement("div");
    bar.id = "sys-btn-bar";
    bar.className = "sys-btn-bar";

    SYSTEM_BUTTONS.forEach(function (def) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.id = def.id;
      btn.className = "sys-btn";
      btn.title = def.title;
      btn.setAttribute("aria-label", def.title);
      btn.textContent = def.icon;
      bar.appendChild(btn);
      def.setup(btn);
    });

    document.body.appendChild(bar);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    window.addEventListener("DOMContentLoaded", init);
  }
})();