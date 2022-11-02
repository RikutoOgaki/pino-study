const btn = document.querySelector("#btn");
const clear = document.getElementById("clear");
const tet = document.querySelector(".text")
const eria = document.getElementById("eria");
const tXet = document.getElementById("tet");
console.log(tXet);
console.log(btn);
const box = '<div>' +tXet.value + '</div>';
btn.addEventListener('click',()=>{
    eria.innerHTML = "<div class='text'>" + tXet.value +"</div>";
    box.classList.add("anime");
    box.classList.remove("animetop");
})
clear.addEventListener('click', ()=>{
    box.classList.add("animetop");
    box.classList.remove("anime");
})