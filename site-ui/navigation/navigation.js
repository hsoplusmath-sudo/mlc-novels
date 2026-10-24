(function () {
    "use strict";

    // このファイル(site-ui/navigation/)から2つ上がサイトのルート
    const root = new URL("../../", document.currentScript.src);

    window.ML_POPUPS = window.ML_POPUPS || {};

    // コース一覧:まずは今までどおり直接書く(動作確認用)
    window.ML_POPUPS["popup-course-list"] = {
        title: "📚 コース一覧",
        blocks: [
            {
                type: "html",
                html: `
                    <p>学びたいコースを選んでください。</p>
                    <ul>
                        <li><a href="${new URL("games/tutorial/tutorial.html", root).href}">チュートリアル</a></li>
                    </ul>
                `
            }
        ]
    };

    // 絵馬帳:site-ui/ema-collection/ の外部HTMLを読み込む
    window.ML_POPUPS["popup-ema-list"] = {
        title: "🎴 絵馬帳",
        src: new URL("site-ui/ema-collection/ema-course.html", root).href
    };
})();