/*
drill05 - 複数要素の設定
外部リンクと内部リンクが混在しているリンクがある。
外部リンクは、新しくwinodwを開き表示をしたい。
HTMLの情報は変更せず、JavaScriptで実現すること。
*/
const link = document.querySelectorAll("a");
console.log(link);
link.forEach((e) => {
    console.log(e.href);
    if(e.href == "http:"){
        // window.open("https//","外部リンク")
        e.style.color = "black";
    }
    else if(e.href == "https:"){
        e.style.color = "red";
    }
})




