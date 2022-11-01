const btn = document.querySelector("#btn");
const clear = document.getElementById("clear");
const tet = document.querySelector(".text")
const eria = document.getElementById("eria");
const tXet = document.getElementById("tet");
console.log(tet);
console.log(btn);
let text = tXet.value;
btn.addEventListener('click',()=>{
    eria.innerHTML = '<div class="text">' + txet + '</div>';
    console.log(text);
    tet.classList.add("anime");
    tet.classList.remove("animetop");
})
clear.addEventListener('click', ()=>{
    tet.classList.add("animetop");
    tet.classList.remove("anime");
})