(function () {
    "use strict";

    const loaderScript = document.currentScript;
    if (!loaderScript || !loaderScript.src) {
        console.error("common-loader.js の場所を取得できません。");
        return;
    }

    const coreUrl = new URL("./", loaderScript.src);
    const siteRoot = new URL("../", coreUrl); // サイトのルートディレクトリ

    const isMobile = window.matchMedia("(max-width: 600px)").matches;

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
        await loadCSS(new URL(cssFile, coreUrl).href);

        // ① 設定ファイル (config/novel-config.js)
        await loadScript(new URL("config/novel-config.js", siteRoot).href);

        // ② ポップアップデータ群 (popup-data/ 配下のファイル)
        await loadScript(new URL("popup-data/jinsei.js", siteRoot).href);
        //  await loadScript(new URL("popup-data/others.js", siteRoot).href);


        // ③ ゲームエンジン
        const engineFile = isMobile ? "novel-engine-mobile.js" : "novel-engine.js";
        await loadScript(new URL(engineFile, coreUrl).href);

        document.dispatchEvent(new Event("novel-engine-ready"));
    }

    init().catch(error => {
        console.error(error);
        alert("ゲームの共通ファイルを読み込めませんでした。");
    });
})();
