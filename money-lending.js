if (!window.storyFlow) { window.storyFlow = {}; }

window.storyFlow["money-lending"] = {

/* =========================================
INTRO
========================================= */
msg_welcome: [
{
	name: "",
	text: "もし、大切な友達から「お金を貸して」と言われたら、あなたはどうしますか？",
	speaker: "none",
	bg: "https://masulessonclass.sakura.ne.jp/mlc/novels/assets/images/bg_gorogoro.webp",
	showImgId: "none",
	nextRoute: "first_request"
} 
],

/* =========================================
1回目：5万円
========================================= */
first_request: [
	{
	name: "うさこ",
	text: "ぶきようくん、ちょっとお願いしていい？",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara",
	bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_france_italia.opus"
},
{
	name: "ぶきようくん",
	text: "どうしたの？",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "5万円、貸してほしいの……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "えっ",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "おねがい！",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara",
	choices: [
		{ text: "いいよ", count: { lend: 1 }, nextRoute: "first_yes" },
		{ text: "ごめん、貸せない", count: { refuse: 1 }, nextRoute: "first_no"}
				]
}
],

first_yes: [
{
	name: "ぶきようくん",
	text: "うん。困ってるなら、貸すよ",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "ほんと！？ありがとう！",
	speaker: "usako",
	showImgId: "img-usako-normal",
	posClass: "right-chara"
},
{
	name: "",
	text: "——数日後",
	speaker: "none",
	showImgId: "none",
	nextRoute: "second_request"
}
],

first_no: [
{
	name: "ぶきようくん",
	text: "ごめん。5万円は貸せないや",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "そっか……分かった",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "ごめんね。",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "",
	text: "——数日後",
	speaker: "none",
	showImgId: "none",
	nextRoute: "second_request"
}
],

/* =========================================
2回目：3万円
========================================= */
second_request: [
{
	name: "うさこ",
	text: "ぶきようくん……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "どうしたの？",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "今月ちょっと足りなくて……生活費に使いたいの",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "…… …… ……",
	speaker: "bukiyou",
	showImgId: "none"
},
{
	name: "うさこ",
	text: "ぶきようくん……またお願いしてもいい？",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "えっ？",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "今度は3万円、貸してほしいの……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara",
	choices: [
		{ text: "分かった、貸すよ",  count: { lend: 1 }, nextRoute: "second_yes" },
		{ text: "貸せない", count: { refuse: 1 }, nextRoute: "second_no" }
			]
}
],

second_yes: [
{
	name: "ぶきようくん",
	text: "分かった。3万円ね",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "ありがとう……助かった",
	speaker: "usako",
	showImgId: "img-usako-epiphany",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "うん。",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "",
	text: "——しばらくして",
	speaker: "none",
	showImgId: "none",
	nextRoute: "third_request"
}
],

second_no: [
{
	name: "ぶきようくん",
	text: "ごめん。貸せない",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "……分かった",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "",
	text: "——しばらくして",
	speaker: "none",
	showImgId: "none",
	nextRoute: "third_request"
}
],

/* =========================================
3回目：10万円
========================================= */
third_request: [
{
	name: "うさこ",
	text: "家賃を払ったら、ほとんど残らなくなっちゃって……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "そっか……",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "ぶきようくん",
	text: "で？",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "今回も、お金貸してほしいの",
	speaker: "usako",
	showImgId: "img-usako-sad"
},
{
	name: "うさこ",
	text: "今度は10万円、貸してほしいの……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "……また？",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara",
	choices: [
		{ text: "貸す", count: { lend: 1 },	 nextRoute: "third_yes" },
		{ text: "貸さない", count: { refuse: 1 }, nextRoute: "third_no" }
			]
}
],

/* =========================================
3回目：答え
========================================= */
third_yes: [
{
	name: "ぶきようくん",
	text: "……分かった。10万円ね",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "やったー……！",
	speaker: "usako",
	showImgId: "img-usako-normal",
	posClass: "right-chara"
},
{
	name: "うさこ",
	text: "カードの支払いが思ってたより多くて……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara",
	nextRoute: "next_night"
}
],

third_no: [
{
	name: "ぶきようくん",
	text: "ごめん。もう貸さない",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara"
},
{
	name: "うさこ",
	text: "……そっか",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "うさこ",
	text: "カードの支払いが思ってたより多くて……",
	speaker: "usako",
	showImgId: "img-usako-sad",
	posClass: "right-chara"
},
{
	name: "ぶきようくん",
	text: "でも、無理だよ",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "left-chara",
    nextRoute: "next_night"
},
],

next_night: [
{
	name: "",
	text: "その日の夜——",
	speaker: "none",
	showImgId: "none"
},
{
name: "",
	text: "ぶきようくんは、ふと考えました。",
	speaker: "none",
	showImgId: "none"
},
{
	name: "ぶきようくん",
	text: "「どうなってるんだろう？」",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara"
},
{
	name: "ぶきようくん",
	text: "これだと、また貸してってきそう",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara"
},
{
	name: "ぶきようくん",
	text: "どうしたらいいんだろう？！",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara"
},
{
	name: "ぶきようくん",
	text: "困ってたら助けてあげたいけど、そんなにお金貸せないよ。。。",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara"
},
{
	name: "",
	text: "。。。",
	speaker: "none",
	showImgId: "none"
},
{
	name: "ぶきようくん",
	text: "いちど、ちゃんと言ってみよう。",
	speaker: "bukiyou",
	showImgId: "img-bukiyokun-hard",
	posClass: "center-chara",
	choices: [
	{ text: "いつ返してくれるか約束しよう", nextRoute: "ask_finances" },
	{ text: "普段のお金の使い途を聞こう", nextRoute: "ask_spending" },
	{ text: "貸す代わりに働いてもらおう", nextRoute: "ask_work" }
		]
}
],


/* =========================================
① 収支を聞く
========================================= */
ask_finances: [
	{
		name: "ぶきようくん",
		text: "ねぇ、ねぇ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "center-chara",
		bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus",

		branch: [
			{ if: { lend: { eq: 3 } }, nextRoute: "ending_all_lend" },
			{ if: { lend: { eq: 0 } }, nextRoute: "ending_all_refuse" }
		],
		elseRoute: "ask_finances_talk"
	}
],

ask_finances_talk: [
	{
		name: "ぶきようくん",
		text: "今月もお金、足りないの？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "center-chara"
	},
	{
		name: "うさこ",
		text: "うん……。家賃が払えなくて……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "毎月、家賃のときに足りなくなるの？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "そうなんだ。だから、また貸してほしくて……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "そっか……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、いつ返してくれるか約束しよう。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。ちゃんと返すよ。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara",
		nextRoute: "ending_promise_broken"
	}
],

/* =========================================
①END
返す約束はしたが、根本が変わっていない
========================================= */
ending_promise_broken: [
	{
		name: "ぶきようくん",
		text: "この前、ちゃんと返すって約束したよね？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。ちゃんと返すつもりだよ。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "ほんとに？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "ほんとだって。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "約束したんだから、ちゃんと返すよ。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "そっか……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "",
		text: "うさこは、本当にお金を返すつもりでした。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "そして、約束どおりお金を返しました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "ぶきようくん",
		text: "ちゃんと返してくれたんだね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。約束したからね。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "ところが、次の月になると……。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "うさこ",
		text: "ねぇ……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "ん？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "また、お金が足りなくなっちゃった……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "あれ……？　また足りないの？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "ご、ごめん……。",
		speaker: "usako",
		showImgId: "img-usako-shocked",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "でも、この前はちゃんと返してくれたよね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、なんでまた足りなくなったんだろう？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "わからない……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "ちゃんと返すって言ったのに……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "本当にごめんなさい……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "うさこは、嘘をついていたわけではありませんでした。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "本当に返すつもりだったし、本当に約束を守ろうとしていました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "でも、お金が足りなくなる原因そのものは、何も変わっていませんでした。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "《NORMAL END》",
		speaker: "none",
		showImgId: "none"
	},
		{
		name: "うさこ",
		text: "わたし、どうすればよかったの？？",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "せんせい",
		text: "約束をすることは、大切です。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "せんせい",
		text: "でも、表面的な約束だけでは、何も変わらないことがあります。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "せんせい",
		text: "大切なのは、なぜ同じことが起きているのか、その原因を見つけることです。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "",
		text: "《BAD END 😢》約束だけでは、何も変わらないことがある",
		speaker: "none",
		showImgId: "none",
		completeStepId: "money-lending_promise-broken",
		customAction: "returnToMenuScreen"
	}
],


/* =========================================
② 普段の支出を聞く
========================================= */
ask_spending: [
	{
		name: "ぶきようくん",
		text: "ねぇ、ねぇ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "center-chara",
		bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus",

		branch: [
			{ if: { lend: { eq: 3 } }, nextRoute: "ending_all_lend" },
			{ if: { lend: { eq: 0 } }, nextRoute: "ending_all_refuse" }
		],
		elseRoute: "ending_spending_reveal"
	}
],

/* =========================================
②END
普段の支出を見破る
========================================= */
ending_spending_reveal: [
	{
		name: "うさこ",
		text: "なぁに？？",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "毎月、家賃を払うときにお金が足りなくなるんだよね？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。家賃が高くて……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、家賃を払うまでに、いくらお金を使ってる？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "えっと……。そんなに使ってないと思うけど……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "節約すればいいってこと？",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "それもそうだけど、一回、普段のお金の使い方を全部見てみようよ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "全部？",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "うん。家賃だけじゃなくて、食費とか買い物とか。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "わかった……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "そういえば、昨日カフェでケーキセット食べたよ。８００円。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "あと、この前ネットで服を買った。６０００円。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "コンビニにもよく行くし……。お昼ごはんとか、ウーバーする。お菓子とかも。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "コンビニでは、だいたいいくら使ってるの？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "１回５００円くらいかな。週に３回くらい行ってる。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "他には？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "この前、セールだったから、靴も買ったよ。５０００円。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "けっこう使ってるね……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "……本当だ。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "家賃が高いからだと思ってたけど……。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "家賃を払う前に、けっこうお金を使ってたんだ……。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、どうしたらよさそう？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うーん……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "家賃を払えるように、先に使うお金を決めておけばいいのかな。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "家計簿つけてもいいかもしれない",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "それなら、来月は大丈夫かもしれないね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。やってみる！",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "次の月。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "うさこ",
		text: "ぶきようくん！　今月はちゃんと家賃払えたよ！",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "ほんと？　よかったね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん！　もう、お金が足りないって言わなくていいかも。",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "《GOOD END 😊》単に節約を頑張ると考えるだけではなく、現状を丁寧に分析して、不足（問題）が生じている根本の原因を見つける。",
		speaker: "none",
		showImgId: "none",
		popupLink: "#popup-step-release-kakeibo",
        popupBtnText: "新ステージ解放"
	},
	{
		name: "",
		text: "《GOOD END 😊》単に節約を頑張ると考えるだけではなく、現状を丁寧に分析して、不足（問題）が生じている根本の原因を見つける。",
		speaker: "none",
		showImgId: "none",
		completeStepId: "money-lending_spending-reveal",
		customAction: "returnToMenuScreen"
	}
],



/* =========================================
③ 貸す代わりに働いてもらう
========================================= */
ask_work: [
	{
		name: "ぶきようくん",
		text: "ねぇ、ねぇ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "center-chara",
		bgm: "https://masulessonclass.sakura.ne.jp/mlc/novels/excel_map/v1.0_initial/game/audio/bgm_escort.opus",

		branch: [
			{ if: { lend: { eq: 3 } }, nextRoute: "ending_all_lend" },
			{ if: { lend: { eq: 0 } }, nextRoute: "ending_all_refuse" }
		],
		elseRoute: "ask_work_talk"
	}
],

ask_work_talk: [
	{
		name: "ぶきようくん",
		text: "お金が足りないなら、貸す代わりに何か僕の手伝いで仕事をしてもらうのはどう？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "でも、今すごく仕事が忙しくて……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "そっか。でも、アルバイトをしてお金をもらうのはどう？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "今の仕事だけで精一杯なんだよ。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "でも、僕が貸したお金って、僕が働いて得たお金なんだよ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "仕事って、働いたことに対してお金をもらうものだよね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、僕が働いて得たお金を、何も返してもらわずに貸すことって、当たり前なのかな？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "……当たり前じゃ、ないのかも。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara",
		nextRoute: "ending_work_value"
	}
],

/* =========================================
③END
働くことと、お金の価値に気づく
========================================= */
ending_work_value: [
	{
		name: "うさこ",
		text: "……当たり前じゃ、ないのかも。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "うん。僕も、働いてお金をもらってるからね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "そうだよね……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "例えば、時給が１２００円だったら、１時間働いて１２００円だよね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "じゃあ、３万円のお金を作るには、何時間働けばいいかな？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "えっと……３０,０００÷１,２００だから……２５時間。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "そう。丸１日以上働いた時間とつながってるんだよ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "そっか……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "お金って、ただの数字じゃないんだね。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "うん。誰かが働いた時間や、その人の力とつながってる。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "じゃあ、ただ「困ってるから貸して」って言えばいいわけじゃないんだ……。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "うん。うさこは、僕のために何かしたかな？対価なにかあるかな？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
		{
		name: "うさこ",
		text: "なにもない……。仲が良いから貸してくれるかなってだけ思ってた。",
		speaker: "usako",
		showImgId: "img-usako-shocked",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "ごめんなさい……。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
		{
		name: "ぶきようくん",
		text: "うん、分かった。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "これから、どうするか考えよ",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "ぶきようくんにお金貸してもらえるように仕事するか、アルバイト増やすか、節約するか、",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "お金が足りないとき、「誰かに貸してもらう」という方法だけを見るのではなく、節約や自分でお金を生み出す方法を考えることもできます。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "働く時間と、それによって得られるお金を考えてみると、お金の向こう側にある「時間」や「労力」にも気づくことができます。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "うさこは「収入の金額」をよく考えて行動するようになりました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "《GOOD END 🤔》お金は対価、お金の向こう側にある、時間と労力が大切",
		speaker: "none",
		showImgId: "none",
		completeStepId: "money-lending_work-value",
		customAction: "returnToMenuScreen"
	}
],

/* =========================================
END
3回とも貸した
========================================= */
ending_all_lend: [
	{
		name: "うさこ",
		text: "なぁに？？",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "たくさんお金貸してって、ちょっと直していかないといけないよね",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "なに、その返事！？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "",
		text: "ぶきようくんは、少しずつイライラしてきました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "うさこ",
		text: "それより、聞いてよー",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
	{
		name: "うさこ",
		text: "今日ねぇ、スーパーに買い物行ったら、にんじん🥕が１本３０円でめちゃくちゃ安かったんだよ。２０本も買っちゃった",
		speaker: "usako",
		showImgId: "img-usako-epiphany",
		posClass: "right-chara"
	},
		{
		name: "ぶきようくん",
		text: "……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "そういえばさ。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "最後に貸したとき、「ありがとう」って言わなかったよね。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "言ったよ。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "……は？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "言ったって。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "もういい……",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "",
		text: "ぶきようくんは、うさこに「もう、なめられているのかもしれない」と感じました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "《BAD END》",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "せんせい",
		text: "助けてもらうことが当たり前になってしまうと、相手への感謝さえもすれ違ってしまう。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "せんせい",
		text: "自分と同じだけの「毎日を堅実に生活する力（強さ）」があると思っていても、相手になかった場合、「やさしさ（感情）」だけでは、破綻を導くことがあります。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "",
		text: "《BAD END 😛》あなたの優しさにつけこむ人がいる",
		speaker: "none",
		showImgId: "none",
		completeStepId: "money-lending_all-lend",
		customAction: "returnToMenuScreen"
	},
],

/* =========================================
END
3回とも貸さなかった
========================================= */
ending_all_refuse: [
	{
		name: "うさこ",
		text: "なぁに？？",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "困ってるなら、何かできること考えてみようよ",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "うん",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "ぶきようくん",
		text: "……え、それだけ？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "",
		text: "ぶきようくんは、少しずつ困ってきました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "うさこ",
		text: "もういいよ。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "え……？",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "だって、今まで一回も助けてくれなかったじゃん。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "いや、でも……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "うさこ",
		text: "もう、ぶきようくんには相談しない。",
		speaker: "usako",
		showImgId: "img-usako-normal",
		posClass: "right-chara"
	},
	{
		name: "ぶきようくん",
		text: "……。",
		speaker: "bukiyou",
		showImgId: "img-bukiyokun-hard",
		posClass: "left-chara"
	},
	{
		name: "",
		text: "ぶきようくんは、何も言えなくなりました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "「お金を貸さなかっただけなのに、どうして僕が悪いみたいになってるんだろう……」",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "うさこ",
		text: "もういいから。",
		speaker: "usako",
		showImgId: "img-usako-sad",
		posClass: "right-chara"
	},
	{
		name: "",
		text: "ぶきようくんは、言葉を失いました。",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "",
		text: "《BAD END》",
		speaker: "none",
		showImgId: "none"
	},
	{
		name: "せんせい",
		text: "相手を助けなかったことで、自分が悪い人のように扱われてしまうことがあります。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "せんせい",
		text: "「助けること」と「相手の要求を受け入れること」は、同じではありません。",
		speaker: "usagi",
		showImgId: "img-usagi-happy",
		posClass: "center-chara"
	},
	{
		name: "",
		text: "《BAD END 😦》あなたが悪いようにされて言葉を失うことがある",
		speaker: "none",
		showImgId: "none",
		completeStepId: "money-lending_all-refuse",
		customAction: "returnToMenuScreen"
	},
],

};