window.SEMINAR_COLLECTIONS = window.SEMINAR_COLLECTIONS || {};

window.SEMINAR_COLLECTIONS["ema-collection"] = [

{
     id: "new-nisa",
     title: "円周率",
     img: "https://m.media-amazon.com/images/I/71A1Vb520eL._SY342_.jpg",
     unlockIds: [],
     endings: [
                {id: "total-clear_new-nisa", label: "完了", type: "complete"}
     ]
},
{
    id: "ema-pi",
    title: "お金貸して",
    img: "https://www.masulesson.com/wp-content/uploads/2026/10/IMG_0906.png",
    link: "https://www.masulesson.com/el/money-lending/",
    unlockIds: [],
        endings: [
        {id: "money-lending_spending-reveal", label: "完了", type: "complete"},
        {id: "money-lending_all-refuse", label: "😦", type: "badge"}
        ]
},
{
     id: "new-nisa",
     title: "新NISAってなに？！",
     img: "https://www.masulesson.com/wp-content/uploads/2026/10/Untitled-design.png",
     link: "https://www.masulesson.com/el/new-nisa/",

     unlockIds: ["money-lending_all-refuse"],
     endings: [
                {id: "total-clear_new-nisa", label: "完了", type: "complete"}
     ]
}


];
