// let out;
// for(let i=1; i<=40; i++){
//     out = String(i);
//     if(out.indexOf("3") != -1){
//         console.log("3がいた");
//     }
//     console.log(out);
// }


let numArray = [20,40,60,80];
console.log(numArray);
numArray.pop();
numArray.push(100);
console.log(numArray);
numArray.splice(0,2);
console.log(numArray);

// ランダムな数字を作る

let rcm = [];

let menber = [
    "中井　侑吾",
    "森田　翔太郎",
    "福村　晃弘",
    "池田　博人",
    "薄井　岳志",
    "ジェイソン",
    "神崎　未希",
    "須崎　魁人",
    "細田　海斗",
    "大澤　心春",
    "奥　綾太",
    "薛　思穏",
    "大垣　陸斗",
    "ダレン",
    "山野　錬磨",
    "阪本　陸",
    "山地　咲愛",
    "和田　卓斗",
    "基　恵都",
    "本村　永遠",
    "中木屋　十夢"
    ];
    
    // console.log(menber.length);
    // console.log(Math.floor(Math.random()*21));
    console.log(menber);
    for(let i=0; i<3; i++){
        const rdm = Math.floor(Math.random()*menber.length);
        rcm.push(menber[rdm]);
        menber.splice(rdm,1); 
    }
    
    console.log(menber);
    console.log(rcm);

    // for(i=0; i<3; i++){
    //     console.log(menber.random);
    //     console.log(rcm);
    // }

    // console.log("今日のおすすめ",menber[ran])
    // let ran = Math.floor(Math.random()*21);
    // console.log(ran);