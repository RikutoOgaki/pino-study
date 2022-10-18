// let num = 20;
let numArray = new Array();
numArray[0] = 20;
numArray[1] = 30;
numArray[2] = 50;
numArray[3] = 100;
numArray[4] = 120;
console.log(numArray.length);
console.log(numArray);
let numArray2 = [40,10];
// numArray2[0] = 10;
// numArray2[1] = 40;
console.log(numArray2[0]);

// []配列の記号

// 繰り返す for文
// for(カウンター変数；条件； カウント；){
// 繰り返す
// }

for(let i=0; i<numArray.length; i++){
    // console.log("hello",i);
    console.log(numArray[i]);
}

// 月〜金のお昼のメニューを配列で作る
// arrLaunch
// for文を使ってconsole.logにメニュー表示

// let num = i;
let arrLaunch = [];
arrLaunch[0] = "カレーメニュー";
arrLaunch[1] = "とんかつメニュー";
arrLaunch[2] = "親子丼メニュー";
arrLaunch[3] = "カツカレーメニュー";
arrLaunch[4] = "パスタメニュー";
arrLaunch[5] = "からあげメニュー";
console.log(arrLaunch.length);
const menu = document.querySelector("#menu");
console.dir(menu);
for(let i=0; i<arrLaunch.length; i++){
    // menu.innerHTML += "<li>"+arrLaunch[i]+"</li>";
    menu.innerHTML += `<li>${arrLaunch[i]}</li>`;

    // console.log(arrLaunch[i]);
    
}

let numArray3 = [];
numArray3[0] = [];
numArray3[0][0] = 1;
numArray3[1] = [];
numArray3[1][1] = 2;
console.log(numArray3);
const tab = document.querySelector("#tab");
console.dir(tab);
tab.innerHTML += `<tr>`;
for(let i=0; i<9; i++){
    // tab.innerHTML+="<tbody></tbody>"
    // tab.innerHTML+=`<tr><td>${i+1}</td></tr>`;
    // tab.innerHTML += `<tr>${i+1}</tr>`;
    for(let j=0; j<9; j++){
        tab.querySelector("tr").innerHTML+=`<td>${(i+1)*(j+1)}</td>`
        // .innerHTML += `j:${j}番目のスタート<br>`;
        // tab.innerHTML += `<td>${(i+1)*(j+1)}</td>`;
        // numArray3[0][i] = i+1;
        // numArray3[i+1][j+1] = (i+1)*(j+1);
        console.log((i+1)*(j+1));
        // tab.innerHTML += `j:${j}番目の終了<br>`;
    }
    tab.innerHTML += `</tr>`;

}




// i++
// i = i + 1
// console.log(numArray3);
