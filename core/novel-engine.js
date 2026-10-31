/**
 * ==========================================================================
 * ノベルゲームコアエンジン PC版
 * ver4.0
 *
 * 旧PC版の動作を維持したまま、
 * 汎用 count / branch 条件分岐のみ追加
 
   ver4.1
  必要な絵馬のリストのcompleteStepIdからemaCountを発生
 * ==========================================================================
 */


/**
 * ==========================================================================
 * 0. 状態管理
 * ==========================================================================
 */

let currentChapter = "";
let currentRoute = "start";
let novelIndex = 0;
let currentBgmSrc = "";


/**
 * ==========================================================================
 * 0.5 汎用ストーリーカウンター
 * ==========================================================================
 *
 * story側で自由な名前のラベルを使える。
 *
 * 例：
 *
 * count: {
 *     lend: 1,
 *     ask: 1
 * }
 */

const storyCounters = {};

window.storyCounters = storyCounters;


/**
 * カウンター初期化
 */
function resetStoryCounters() {

    Object.keys(storyCounters).forEach(key => {
        delete storyCounters[key];
    });

    console.log(
        "🔄 [Story Counters] reset"
    );
}


/**
 * カウンター加算
 */
function addStoryCounts(countData) {

    if (
        !countData ||
        typeof countData !== "object"
    ) {
        return;
    }


    Object.entries(countData).forEach(
        ([key, value]) => {

            if (
                typeof value !== "number"
            ) {

                console.warn(
                    `⚠️ count "${key}" は数値で指定してください:`,
                    value
                );

                return;
            }


            if (
                typeof storyCounters[key] !==
                "number"
            ) {

                storyCounters[key] = 0;
            }


            storyCounters[key] += value;
        }
    );


    console.log(
        "📊 [Story Counters]",
        JSON.parse(
            JSON.stringify(
                storyCounters
            )
        )
    );
}


/**
 * カウンター取得
 *
 * 未定義ラベルは0
 */
function getStoryCount(key) {

    if (
        typeof storyCounters[key] ===
        "number"
    ) {

        return storyCounters[key];
    }


    return 0;
}


/**
 * ==========================================================================
 * 0.6 条件判定
 * ==========================================================================
 *
 * 使用可能：
 *
 * eq
 * neq
 * gt
 * gte
 * lt
 * lte
 *
 *
 * 通常オブジェクト
 * → AND
 *
 * any
 * → OR
 *
 * all
 * → AND
 *
 * not
 * → NOT
 */


/**
 * 1個の値を判定
 */
function evaluateStoryRule(
    value,
    rule
) {

    /*
     * score: 3
     *
     * と数字だけ書けば
     *
     * score === 3
     */

    if (
        typeof rule === "number"
    ) {

        return value === rule;
    }


    if (
        !rule ||
        typeof rule !== "object"
    ) {

        return false;
    }


    if (
        "eq" in rule &&
        value !== rule.eq
    ) {

        return false;
    }


    if (
        "neq" in rule &&
        value === rule.neq
    ) {

        return false;
    }


    if (
        "gt" in rule &&
        value <= rule.gt
    ) {

        return false;
    }


    if (
        "gte" in rule &&
        value < rule.gte
    ) {

        return false;
    }


    if (
        "lt" in rule &&
        value >= rule.lt
    ) {

        return false;
    }


    if (
        "lte" in rule &&
        value > rule.lte
    ) {

        return false;
    }


    return true;
}


/**
 * 条件全体を判定
 */
function checkStoryCondition(
    condition
) {

    if (
        !condition ||
        typeof condition !== "object"
    ) {

        return false;
    }


    /*
     * -----------------------------------------
     * any = OR
     * -----------------------------------------
     */

    if (
        Array.isArray(
            condition.any
        )
    ) {

        const result =
            condition.any.some(
                subCondition =>
                    checkStoryCondition(
                        subCondition
                    )
            );


        if (!result) {

            return false;
        }
    }


    /*
     * -----------------------------------------
     * all = AND
     * -----------------------------------------
     */

    if (
        Array.isArray(
            condition.all
        )
    ) {

        const result =
            condition.all.every(
                subCondition =>
                    checkStoryCondition(
                        subCondition
                    )
            );


        if (!result) {

            return false;
        }
    }


    /*
     * -----------------------------------------
     * not
     * -----------------------------------------
     */

    if (
        condition.not &&
        checkStoryCondition(
            condition.not
        )
    ) {

        return false;
    }


    /*
     * -----------------------------------------
     * 通常条件
     *
     * 複数書いたらAND
     * -----------------------------------------
     */

    const normalConditions =
        Object.entries(
            condition
        ).filter(
            ([key]) =>
                ![
                    "any",
                    "all",
                    "not"
                ].includes(key)
        );


    return normalConditions.every(
        ([key, rule]) => {

            const value =
                getStoryCount(
                    key
                );


            return evaluateStoryRule(
                value,
                rule
            );
        }
    );
}


/**
 * branchを上から順番に判定
 *
 * 最初に一致したrouteへ進む
 */
function resolveStoryBranch(
    branchData,
    elseRoute = ""
) {

    if (
        !Array.isArray(
            branchData
        )
    ) {

        return elseRoute;
    }


    for (
        const item of branchData
    ) {

        if (
            !item ||
            !item.if
        ) {

            continue;
        }


        if (
            checkStoryCondition(
                item.if
            )
        ) {

            console.log(
                "🔀 [Story Branch]",
                item.if,
                "→",
                item.nextRoute
            );


            return (
                item.nextRoute ||
                elseRoute
            );
        }
    }


    console.log(
        "🔀 [Story Branch] 条件一致なし →",
        elseRoute
    );


    return elseRoute;
}


/**
 * ==========================================================================
 * 1. キャラクター立ち絵の事前生成ロジック
 *
 * ★旧PC版を維持
 * ==========================================================================
 */

function initCharacterImages() {

    const stageArea =
        document.getElementById(
            'game-stage-area'
        );


    /*
     * configファイルで定義された
     * CHARACTER_MASTER
     */

    const master =
        window.CHARACTER_MASTER;


    if (
        !stageArea ||
        !master
    ) {

        console.warn(
            "⚠️ キャラクター設定データが見つかりません。configファイルが読み込まれているか確認してください。"
        );

        return;
    }


    const oldCharas =
        stageArea.querySelectorAll(
            '.chara-img'
        );


    oldCharas.forEach(
        el => el.remove()
    );


    master.forEach(chara => {

        const img =
            document.createElement(
                'img'
            );


        img.id =
            chara.id;


        img.src =
            chara.src;


        img.alt =
            chara.alt;


        /*
         * ★旧PC版そのまま
         */

        img.className =
            "chara-img left-chara hidden-chara";


        stageArea.insertBefore(
            img,
            stageArea.firstChild
        );
    });
}



if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initCharacterImages,
        { once: true }
    );
} else {
    initCharacterImages();
};


/**
 * ==========================================================================
 * 2. ゲーム進行・画面制御
 * ==========================================================================
 */


/**
 * 初期画面のボタン分岐
 * パスワード認証
 */
function startSelectedStage(
    targetRoute,
    isLocked,
    password = "",
    chapterName = ""
) {

    if (isLocked) {

        const userInput =
            prompt(
                "このステージを解放するには、パスワードを入力してください："
            );


        if (
            userInput ===
            password
        ) {

            alert(
                "🔑 パスワード認証成功！ストーリーを開始します。"
            );


            currentRoute =
                targetRoute;

        } else if (
            userInput !== null
        ) {

            alert(
                "❌ パスワードが違います。正しいパスワードを入力してください。"
            );


            return;

        } else {

            return;
        }

    } else {

        currentRoute =
            targetRoute;
    }


    currentChapter =
        chapterName;


    novelIndex =
        0;


    /*
     * ★追加
     *
     * 新しくゲームを始めるたび
     * カウンター初期化
     */

    resetStoryCounters();


    /*
     * =====================================
     * 絵馬所持数の計算
     * =====================================
     */

    const chapterData =
        window.storyFlow &&
        window.storyFlow[currentChapter];

    updateEmaCount(
        chapterData &&
        Array.isArray(chapterData.requiredEma)
            ? chapterData.requiredEma
            : []
    );


    /*
     * ★ここから旧版
     */

    if (
        !document.querySelector(
            '.chara-img'
        )
    ) {

        initCharacterImages();
    }


    /*
     * 画面表示切替
     */

    document
        .getElementById(
            'stage-selector'
        )
        .style.display =
        'none';


    document
        .getElementById(
            'game-stage-area'
        )
        .style.display =
        'block';


    document
        .getElementById(
            'game-message-window'
        )
        .style.display =
        'block';


    document
        .getElementById(
            'game-control-bar'
        )
        .style.display =
        'block';


    /*
     * 立ち絵リセット
     */

    const allImages =
        document.querySelectorAll(
            '.chara-img'
        );


    allImages.forEach(img => {

        img.classList.add(
            'hidden-chara'
        );


        img.classList.remove(
            'speaking'
        );
    });


    renderScene();
}


/**
 * 次へボタン
 */
function advanceStory() {

    if (
        !window.storyFlow ||
        !window.storyFlow[
            currentChapter
        ] ||
        !window.storyFlow[
            currentChapter
        ][currentRoute]
    ) {

        console.error(
            "対象のシナリオデータが見つかりません:",
            currentChapter,
            currentRoute
        );


        return;
    }


    const routeData =
        window.storyFlow[
            currentChapter
        ][currentRoute];


    const currentData =
        routeData[
            novelIndex
        ];


    /*
     * 選択肢表示中は
     * 次へで進まない
     */

    if (
        currentData &&
        currentData.choices
    ) {

        return;
    }


    /*
     * -----------------------------------------
     * completeStepId
     *
     * ★旧版維持
     * -----------------------------------------
     */

    if (
        currentData &&
        currentData.completeStepId
    ) {

        if (
            typeof saveUserProgressToServer ===
            "function"
        ) {

            saveUserProgressToServer(
                currentData.completeStepId
            );


            console.log(
                "🏁 [Story Progress] 完了:",
                currentData.completeStepId
            );

        } else {

            console.error(
                "⚠️ progress-sync.js の saveUserProgressToServer() が見つかりません。"
            );
        }
    }


    /*
     * -----------------------------------------
     * ★追加
     *
     * シーンそのものにcountがある場合
     * -----------------------------------------
     */

    if (
        currentData &&
        currentData.count
    ) {

        addStoryCounts(
            currentData.count
        );
    }


    novelIndex++;


    /*
     * route末尾
     */

    if (
        novelIndex >=
        routeData.length
    ) {

        /*
         * =====================================
         * ★追加
         * branch
         * =====================================
         */

        if (
            currentData &&
            currentData.branch
        ) {

            const nextRoute =
                resolveStoryBranch(
                    currentData.branch,
                    currentData.elseRoute ||
                    currentData.nextRoute ||
                    ""
                );


            if (
                nextRoute
            ) {

                currentRoute =
                    nextRoute;


                novelIndex =
                    0;

            } else {

                const nextBtn =
                    document.getElementById(
                        'next-scene-btn'
                    );


                nextBtn.innerHTML =
                    "終了する 🔄";


                nextBtn.onclick =
                    () => {

                        location.reload();
                    };


                return;
            }
        }


        /*
         * =====================================
         * 旧nextRoute
         * =====================================
         */

        else if (
            currentData &&
            currentData.nextRoute
        ) {

            currentRoute =
                currentData.nextRoute;


            novelIndex =
                0;

        } else {

            /*
             * 行き先がない場合
             */

            const nextBtn =
                document.getElementById(
                    'next-scene-btn'
                );


            nextBtn.innerHTML =
                "終了する 🔄";


            nextBtn.onclick =
                () => {

                    location.reload();
                };


            return;
        }
    }


    renderScene();
}


/**
 * ==========================================================================
 * シーン描画
 * ==========================================================================
 */

function renderScene() {

    if (
        !window.storyFlow ||
        !window.storyFlow[
            currentChapter
        ] ||
        !window.storyFlow[
            currentChapter
        ][currentRoute]
    ) {

        console.error(
            "描画対象のデータが存在しません:",
            currentChapter,
            currentRoute
        );


        return;
    }


    const routeData =
        window.storyFlow[
            currentChapter
        ][currentRoute];


    if (
        novelIndex < 0 ||
        novelIndex >=
        routeData.length
    ) {

        return;
    }


    const currentData =
        routeData[
            novelIndex
        ];


    /*
     * --------------------------------------------------
     * 1. テキスト
     *
     * ★旧PC版そのまま
     * --------------------------------------------------
     */

    document
        .getElementById(
            'chara-name-box'
        )
        .innerText =
        currentData.name ||
        "";


    document
        .getElementById(
            'dialogue-text'
        )
        .innerHTML =
        currentData.text ||
        "";


    /*
     * --------------------------------------------------
     * 2. 背景画像
     * --------------------------------------------------
     */

    /*
     * --------------------------------------------------
     * 2. 背景画像
     * --------------------------------------------------
     */

    if (currentData.bg) {
        let bgSrc = currentData.bg;
        const bgMaster = window.BG_MASTER;

        if (bgMaster && Array.isArray(bgMaster)) {
            const targetBg = bgMaster.find(item => item.id === currentData.bg);
            if (targetBg) {
                bgSrc = targetBg.src;
            } else {
                console.warn(`⚠️ 背景ID "${currentData.bg}" が BG_MASTER に見つかりません。そのままパスとして扱います。`);
            }
        }

        document
            .getElementById(
                'game-stage-area'
            )
            .style.backgroundImage =
            `url('${bgSrc}')`;
    }

    /*
     * --------------------------------------------------
     * 3. BGM
     * --------------------------------------------------
     */
    const bgmPlayer =
        document.getElementById('novel-bgm');

    if (currentData.bgm) {

        if (currentData.bgm === "fadeout") {

            let vol = bgmPlayer.volume;

            const fadeInterval = setInterval(() => {

                if (vol > 0.1) {
                    vol -= 0.1;
                    bgmPlayer.volume = Math.max(0, vol);

                } else {
                    clearInterval(fadeInterval);

                    bgmPlayer.pause();
                    bgmPlayer.currentTime = 0;
                    currentBgmSrc = "";
                }

            }, 100);

        } else {

            let bgmSrc = currentData.bgm;
            const bgmMaster = window.BGM_MASTER;

            if (bgmMaster && Array.isArray(bgmMaster)) {
                const targetBgm = bgmMaster.find(item => item.id === currentData.bgm);
                if (targetBgm) {
                    bgmSrc = targetBgm.src;
                } else {
                    console.warn(`⚠️ BGM ID "${currentData.bgm}" が BGM_MASTER に見つかりません。`);
                }
            }

            if (currentBgmSrc !== bgmSrc) {

                bgmPlayer.volume = 1.0;
                bgmPlayer.src = bgmSrc;

                bgmPlayer.play().catch(e =>
                    console.error("BGMの再生に失敗しました:", e)
                );

                currentBgmSrc = bgmSrc;
            }
        }
    }


    /*
     * --------------------------------------------------
     * 4. キャラクター立ち絵
     *
     * ★★★ 動いていた旧PC版をそのまま維持 ★★★
     * --------------------------------------------------
     */

    const allImages =
        document.querySelectorAll(
            '.chara-img'
        );


    const targetImgId =
        currentData.showImgId ||
        "";


    allImages.forEach(img => {

        img.classList.remove(
            'speaking'
        );


        if (
            currentData.speaker &&
            img.id.includes(
                currentData.speaker
            )
        ) {

            if (
                img.id !==
                targetImgId
            ) {

                img.classList.add(
                    'hidden-chara'
                );
            }
        }
    });


    if (
        targetImgId
    ) {

        const targetImg =
            document.getElementById(
                targetImgId
            );


        if (
            targetImg
        ) {

            targetImg.classList.remove(
                'hidden-chara'
            );


            targetImg.classList.add(
                'speaking'
            );


            if (
                currentData.posClass
            ) {

                /*
                 * ★旧PC版そのまま
                 */

                targetImg.classList.remove(
                    'left-chara',
                    'right-chara',
                    'center-chara'
                );


                targetImg.classList.add(
                    currentData.posClass
                );
            }
        }
    }


    /*
     * --------------------------------------------------
     * partnerAction
     *
     * ★旧PC版そのまま
     * --------------------------------------------------
     */

    if (
        currentData.partnerAction
    ) {

        const partner =
            document.getElementById(
                currentData.partnerAction.id
            );


        if (
            partner
        ) {

            if (
                currentData.partnerAction.class ===
                "hidden-chara"
            ) {

                partner.classList.add(
                    'hidden-chara'
                );

            } else {

                partner.className =
                    `chara-img ${currentData.partnerAction.class}`;
            }
        }
    }


    /*
     * --------------------------------------------------
     * 5. 中央ポップアップ
     * --------------------------------------------------
     */
    const popupWrap = document.getElementById('center-popup-wrap');
    const popupImg = document.getElementById('center-popup-img');

    if (currentData.popupImg) {
        let popupSrc = currentData.popupImg;
        const popupMaster = window.POPUP_MASTER;

        // POPUP_MASTERがあればIDから検索、なければ直接パスとして扱う
        if (popupMaster && Array.isArray(popupMaster)) {
            const targetPopup = popupMaster.find(item => item.id === currentData.popupImg);
            if (targetPopup) {
                popupSrc = targetPopup.src;
            }
        }

        popupImg.src = popupSrc;
        popupWrap.classList.remove('hidden-popup');
    } else {
        popupWrap.classList.add('hidden-popup');
    }

    /*
     * --------------------------------------------------
     * 5.5 HTMLポップアップボタンの描画処理
     * --------------------------------------------------
     */

    const triggerContainer =
        document.getElementById(
            'game-popup-trigger-container'
        );

    if (
        triggerContainer
    ) {

        if (
            currentData.popupLink &&
            currentData.popupBtnText
        ) {
            // # から始まる場合は自前モーダルを開くボタンにする
            if (currentData.popupLink.startsWith("#")) {
                const popupKey = currentData.popupLink.replace("#", "");
                
                triggerContainer.innerHTML =
                    `
                    <button type="button" class="popup-open game-popup-btn" onclick="openCustomModal('${popupKey}')">
                        ${currentData.popupBtnText}
                    </button>
                    `;
            } else {
                // 従来の外部URLリンク
                triggerContainer.innerHTML =
                    `
                    <a href="${currentData.popupLink}" class="popup-open game-popup-btn" target="_blank" rel="noopener">
                        ${currentData.popupBtnText}
                    </a>
                    `;
            }

            triggerContainer.style.display =
                'block';

        } else {

            triggerContainer.style.display =
                'none';

            triggerContainer.innerHTML =
                '';
        }
    }



    /*
     * --------------------------------------------------
     * 6. 選択肢
     *
     * ★旧PC版にcount / branchのみ追加
     * --------------------------------------------------
     */

    const choiceContainer =
        document.getElementById(
            'choice-container'
        );


    // ★ボタンではなく親のコントロールバーを取得する
    const controlBar =
        document.getElementById(
            'game-control-bar'
        );


    if (
        currentData.choices
    ) {

        // ★選択肢があるときはコントロールバーごと非表示にする
        if (controlBar) {
            controlBar.style.display =
                'none';
        }


        choiceContainer.innerHTML =
            '';


        choiceContainer.style.display =
            'flex';


        currentData.choices.forEach(
            ch => {

                const btn =
                    document.createElement(
                        'button'
                    );


                btn.className =
                    'story-choice-btn';


                btn.innerHTML =
                    ch.text;


                btn.onclick =
                    () => {

                        if (
                            ch.count
                        ) {

                            addStoryCounts(
                                ch.count
                            );
                        }


                        if (
                            ch.branch
                        ) {

                            const nextRoute =
                                resolveStoryBranch(
                                    ch.branch,
                                    ch.elseRoute ||
                                    ch.nextRoute ||
                                    ""
                                );


                            if (
                                !nextRoute
                            ) {

                                console.error(
                                    "⚠️ 選択肢の分岐先がありません:",
                                    ch
                                );


                                return;
                            }


                            currentRoute =
                                nextRoute;

                        } else {

                            currentRoute =
                                ch.nextRoute;
                        }


                        novelIndex =
                            0;


                        renderScene();
                    };


                choiceContainer.appendChild(
                    btn
                );
            }
        );

    } else {

        choiceContainer.style.display =
            'none';


        // ★選択肢がない通常時はコントロールバーを表示する
        if (controlBar) {
            controlBar.style.display =
                'block';
        }
    }

}


/**
 * ==========================================================================
 * 3. PC用レスポンシブスケーリング
 * ==========================================================================
 */
(function () {
    const virtualWidth = 1280;   // モバイル版は 720

    function resizeVirtualScreen() {
        const screenEl = document.querySelector('.masulesson-novel-container');
        if (!screenEl || !screenEl.parentElement) return;

        const scale = screenEl.parentElement.clientWidth / virtualWidth;

        screenEl.style.transformOrigin = 'top left';
        screenEl.style.transform = `scale(${scale})`;
        screenEl.style.top = '0px';
        screenEl.style.left = '0px';
    }

    window.addEventListener('resize', resizeVirtualScreen);
    window.addEventListener('load', resizeVirtualScreen);
    document.addEventListener('DOMContentLoaded', resizeVirtualScreen);
    resizeVirtualScreen();   // ローダーは読み込み後に実行されるので即時実行も入れる
})();


/**
 * ==========================================================================
 * キーボード
 *
 * ★旧PC版そのまま
 * ==========================================================================
 */

document.addEventListener(
    'keydown',
    function(event) {

        if (
            event.key ===
            'Enter'
        ) {

            const stageArea =
                document.getElementById(
                    'game-stage-area'
                );


            if (
                stageArea &&
                stageArea.style.display !==
                'none'
            ) {

                advanceStory();
            }
        }
    }
);







/**
 * ==========================================================================
 * デバッグ
 * ==========================================================================
 *
 * consoleで
 *
 * getStoryCounters()
 *
 * と入力すれば、
 * 現在のカウンターを確認できる。
 */

window.getStoryCounters =
    function() {

        const data =
            JSON.parse(
                JSON.stringify(
                    storyCounters
                )
            );


        console.table(
            data
        );


        return data;
    };



/**
 * ==========================================================================
 * 7 絵馬所持数の計算
 * ==========================================================================
 *
 * requiredEmaIds に指定されたIDのうち、
 * localStorage に "completed" として保存されているIDを数える。
 *
 * 結果は storyCounters.emaCount に設定する。
 * ==========================================================================
 */

function updateEmaCount(requiredEmaIds) {

    if (!Array.isArray(requiredEmaIds)) {
        console.warn(
            "⚠️ requiredEmaIds は配列で指定してください。"
        );

        storyCounters.emaCount = 0;
        storyCounters.emaRequired = 0;

        return 0;
    }

    // 重複IDは1つとして扱う
    const uniqueIds = [...new Set(requiredEmaIds)];

    // 必要な絵馬のうち、獲得済みのIDを抽出
    const ownedIds = uniqueIds.filter(
        id => localStorage.getItem(id) === "completed"
    );

    // カウンタに反映
    storyCounters.emaCount = ownedIds.length;
    storyCounters.emaRequired = uniqueIds.length;

    console.log("⛩️ [Ema Count]", {
        emaCount: storyCounters.emaCount,
        emaRequired: storyCounters.emaRequired,
        ownedIds: ownedIds,
        missingIds: uniqueIds.filter(
            id => !ownedIds.includes(id)
        )
    });

    return ownedIds.length;
}

// 外部から呼び出せるようにする
window.updateEmaCount = updateEmaCount;



window.resetStoryCounters =
    resetStoryCounters;


window.checkNovelCondition =
    checkStoryCondition;
    
    
    /**
 * ==========================================================================
 * カスタムHTMLポップアップモーダル制御
 * ==========================================================================
 */
function openCustomModal(popupKey) {
    window.ML_POPUPS = window.ML_POPUPS || {};
    const data = window.ML_POPUPS[popupKey];

    if (!data) {
        console.warn(`⚠️ ポップアップデータ "${popupKey}" が見つかりません。`);
        return;
    }

    const overlay = document.getElementById('custom-modal-overlay');
    const titleEl = document.getElementById('custom-modal-title');
    const bodyEl = document.getElementById('custom-modal-body');

    if (!overlay || !titleEl || !bodyEl) return;

    // タイトル反映
    titleEl.innerText = data.title || "";

    // blocks 内の HTML を結合して流し込む
    let bodyHtml = "";
    if (Array.isArray(data.blocks)) {
        data.blocks.forEach(block => {
            if (block.type === "html" && block.html) {
                bodyHtml += block.html;
            }
        });
    }
    bodyEl.innerHTML = bodyHtml;

    // モーダルを表示
    overlay.style.display = "flex";
}

function closeCustomModal() {
    const overlay = document.getElementById('custom-modal-overlay');
    if (overlay) {
        overlay.style.display = "none";
    }
}

// 外部から呼べるようにグローバル登録
window.openCustomModal = openCustomModal;
window.closeCustomModal = closeCustomModal;


/**
 * ==========================================================================
 * カスタムHTMLポップアップ内のボタン制御（進捗ID発行 ＆ 自動クローズ）
 * ==========================================================================
 */
document.addEventListener('click', function(e) {
    // クリックされた要素、またはその親にある .complete-step-btn を探す
    const btn = e.target.closest('.complete-step-btn');
    if (!btn) return;

    // 1. data-step-id (または data-complete-id) を取得して進捗を発行（保存）
    const stepId = btn.getAttribute('data-step-id') || btn.getAttribute('data-complete-id');
    
    if (stepId) {
        localStorage.setItem(stepId, "completed");
        console.log("🏁 [Popup Progress] 完了ID発行:", stepId);

        // サーバー同期関数があれば実行
        if (typeof saveUserProgressToServer === "function") {
            saveUserProgressToServer(stepId);
        }

        // 現在のチャプターに紐づく絵馬リストがあれば、カウンターを即時再計算する
        if (typeof updateEmaCount === "function" && window.storyFlow && window.storyFlow[currentChapter]) {
            const chapterData = window.storyFlow[currentChapter];
            if (chapterData && Array.isArray(chapterData.requiredEma)) {
                updateEmaCount(chapterData.requiredEma);
            }
        }
    }

    // 2. 自動的にモーダルを閉じる
    closeCustomModal();
});
