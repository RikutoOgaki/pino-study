const btn = document.querySelector("#btn");
const clear = document.getElementById("clear");
const tet = document.querySelector(".text")
const eria = document.getElementById("eria");
const tXet = document.getElementById("tet");
console.log(tXet);
console.log(btn);
// const box = `<div class=text>${tXet.value}</div>`;
btn.addEventListener('click',()=>{
    eria.innerHTML = `<div class=text>${tXet.value}</div>`;
    tet.classList.add("anime");
    tet.classList.remove("animetop");
})
clear.addEventListener('click', ()=>{
    tet.classList.add("animetop");
    tet.classList.remove("anime");
})