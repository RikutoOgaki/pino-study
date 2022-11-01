const btn = document.querySelector("#btn");
const clear = document.getElementById("clear");
const tet = document.querySelector(".text")
console.log(tet);
console.log(btn);
btn.addEventListener('click',()=>{
    tet.classList.add("anime");
    // tet.classList.remove("anime");
})
clear.addEventListener('click', ()=>{
    tet.classList.add("animetop");
    tet.classList.remove("anime");
    // tet.classList.remove("anime");
})