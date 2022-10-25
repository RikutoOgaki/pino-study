// const box = document.getElementsByClassName("box");
const box = document.querySelectorAll(".box");
console.log(box);

// for(let i=0; i<box.length; i++){
//     console.dir(box[i]);
// }

// 配列.forEach((引数))=>(繰り返したい内容)
// box.forEach((e,i)=>{
//     e.addEventListener("mousedown",() => {
//         console.log("押した");
//         e.style.backgroundColor="skyblue"
//     });
//     e.addEventListener("mouseup",() => {
//         console.log("はなした");
//         e.style.backgroundColor=""
//     });
//     e.addEventListener('mousereve',()=>{
//         e.style.backgroundColor=""
//     })


box[0].addEventListener("mousedown",() => {
    // console.log("aaaaaa");
    flg = true;
});
box[0].addEventListener("mouseup",() => {
    // console.log("aaaaaa");
    flg = false;
});

//     window.addEventListener("mouseup",() => {
//         console.log("はなした");
//         e.style.backgroundColor=""
//     });
// });
// });
let flg = false;
window.addEventListener('mousemove',(evt)=> {
    // console.log(evt.clientX,evt.clientY);
    // box[0].style.left = evt.clientX-62.5 + "px";
    // box[0].style.top = evt.clientY-62.5 + "px";
    if(flg){
        box[0].style.left = evt.clientX-62.5 + "px";
        box[0].style.top = evt.clientY-62.5 + "px";
    }
});


