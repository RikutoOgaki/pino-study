const btn = document.getElementById("btn");
const clear = document.getElementById("clear");
const tet = document.querySelector(".anime")
const eria = document.getElementById("eria");
const tXet = document.getElementById("tet");
console.log(tXet);
console.log(btn);
console.log(clear);
btn.addEventListener('click',()=>{
    let ele = document.createElement("div");
    let txet = document.createTextNode(tXet.value);
    ele.classList.add("anime");
    ele.appendChild(txet);
    console.log(ele);
    eria.appendChild(ele);
    // eria.innerHTML += `<div class="anime">${tXet.value}</div>`;
    // max.push += `<div class="anime">${tXet.value}</div>`;
    // console.log(max);
    // tet.classList.add("anime");
    // tet.classList.remove("animetop");
    // tBox = `<div class=anime>${tXet.value}</div>`
})
clear.addEventListener('click', ()=>{
    // console.log(document.getElementById("anime"));
    console.log(document.querySelectorAll(".anime"));
    let chatanime = document.querySelectorAll(".anime");
    for(let i=0; i<chatanime.length; i++){
        // document.querySelectorAll(".anime").remove();
        chatanime[i].classList.add("animetop");
        chatanime[i].classList.remove("anime");
        console.log(chatanime[i]);
    }
    // tet.classList.add("animetop");
    // tBox.classList.add("animetop");
    // tet.classList.remove("anime");
})