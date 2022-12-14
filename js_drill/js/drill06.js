/*
drill06 - スクロール処理
3つのトピックからなるページがある
それぞれ、スクロールし該当箇所まで来ると
該当のトピック箇所（文字部分と画像部分）が連動して
アニメーションしながら表示されるように作成すること。
尚、アニメーションは任意のもので構わない。
*/

const conte = document.querySelectorAll("section");
console.log(conte);
window.addEventListener("scroll", (evt)=> {
    console.log(window.scrollY);
})
