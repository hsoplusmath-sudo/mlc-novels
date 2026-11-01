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