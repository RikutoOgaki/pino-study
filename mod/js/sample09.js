const img = document.querySelectorAll("img");
const main = document.querySelector("main");
// const box = document.getElementById("overlay");
// const mg = box.querySelector("img");
// console.log(mg);
// console.log(box);
// console.log(main);
console.log(img);

// ↓要素がない状態
img.forEach((e)=>{
    e.addEventListener('click' ,(evt)=>{
        console.log(evt.target.src);
        let back = document.createElement("div");
        let pic = document.createElement("picture");
        let mg = document.createElement("img");
        // console.log(back);
        back.classList.add("overlay");
        back.appendChild(pic);
        mg.src = "./images/img_modal_kyouto01_l.jpg"
        pic.appendChild(mg);
        main.appendChild(back);
        console.log(back);
    })
})


// ↓要素がある状態
// img.addEventListener('click',()=>{
//     box.classList.remove("hiddon");
// })
// box.addEventListener('click', ()=>{
//     box.classList.add("hiddon");
// })
