// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// // console.log(btn);
// btnA.addEventListener("click",()=>{
//     // console.log("発火");
//     changeBg("tomato");
// });
// btnB.addEventListener("click",()=>{
//     // console.log("発火");
//     // document.body.style.backgroundColor = "skyblue";
//     changeBg("skyblue");
// });

function changeBg(value){
    console.log("aaa");
    document.body.style.backgroundColor = value;
};
const btn = document.querySelectorAll(".btn");
console.log(btn);
for(let i=0; i<btn.length; i++){
    // btn[i].onclick = changeBg;
    btn[i].onclick = function(evt){
        // console.log(evt.target.innerText);
        // const clo = evt.target.innerText;
        // changeBg(clo);
        const color = evt.target.dataset.color;
        changeBg(color);
    };
};
