const img = document.querySelector("img");
const main = document.querySelector("main");
const box = document.getElementById("overlay");
let mg = box.querySelector("img");
console.log(mg);
console.log(box);
// console.log(main);
// console.log(img);

// ↓要素がない状態
// img.addEventListener('click' ,()=>{
//     let back = document.createElement("div");
//     let pic = document.createElement("picture");
//     let mg = document.createElement("img");
//     console.log(back);
//     back.classList.add("overlay");
//     back.appendChild(pic);
//     pic.appendChild(mg);
//     main.appendChild(back);
// })

// ↓要素がある状態
img.addEventListener('click',()=>{
    box.classList.remove("hiddon");
})
box.addEventListener('click', ()=>{
    box.classList.add("hiddon");
})
