/*
drill03 - 配列2
オセロの盤を作成したい。
table(#reversi)内に8x8のマス（td要素）を作成すること
中央4x4マスには
黒（●）と白（○）を配置しておくこと
[表示内容]中央位置は下記の様にマスを設定しておく

横（a〜h）
縦（1〜8）と過程すると、
d/4 には ○
d/5 には ●
e/4 には ●
e/5 には ○
を配置し、中央の4マスには黒石と白石が置かれている状況を作成すること
○ ●
● ○
*/

// 表示
// for(var i=1; i<=9; i++){
//     var tr = document.createElement("tr");
//     target.appendChild(tr);
//     // 縦軸ラベル表示
//     var th = document.createElement("th");
//     tr.appendChild(th);
//     th.textContent = i;
//     for(var j=1; j<=9; j++){
//       var td = document.createElement("td");
//       tr.appendChild(td);
//       var cellValue = j+"×"+i+"="+(i*j);
//       td.textContent = cellValue;
//     }
//   }





const tab = document.getElementById("reversi");
console.log(tab);

for(let i=0; i<8; i++){
    const tbody = document.createElement("tbody");
    tab.appendChild(tbody);
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for(let j=0; j<8; j++){
        let td = document.createElement("td");
        tr.appendChild(td);
        if(i){
            td.textContent = "○";
        }
        else if(j){
            td.textContent = "●";
        }
        // else if(j===3){
        //     td.textContent = "○";
        // }
        // else{
        //     td.textContent = "";
        // }
    } 
}

