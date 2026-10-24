window.ML_POPUPS = window.ML_POPUPS || {};

window.ML_POPUPS["popup-course-list"] = {
    title: "📚 コース一覧",
    blocks: [
        {
            type: "html",
            html: `
                <p>学びたいコースを選んでください。</p>
                <ul>
                    <li><a href="/game/tutorial/index.html">チュートリアル</a></li>
                    <li><a href="/game/the-moon/index.html">月までどのくらい</a></li>
                </ul>
            `
        }
    ]
};

window.ML_POPUPS["popup-ema-list"] = {
    title: "🎴 絵馬帳",
    blocks: [
        {
            type: "html",
            html: `
                <p>ゲームで発見した知識を集める場所です。</p>
                <p>これから、獲得した絵馬をここに表示していきます。</p>
            `
        }
    ]
};