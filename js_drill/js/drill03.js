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

const tab = document.getElementById("reversi");
console.dir(tab);
const arr = tab.querySelector


const num = document.getElementsByTagName("tbody");
console.log(num);
// console.log(i);
tab.innerHTML += 
`<tbody>
<tr>

</tr>
</tbody>`

for(let i=0; i<7; i++){
    tab.innerHTML+=`<tr>`
    for(let i=0; i<6; i++){
        // for(let j=0; j<7; j++){
            // tab.querySelector("tr").innerHTML+=`<td></td>`
            // tab.querySelector("tr").innerHTML+=`<td></td>`
            // }
        }
        tab.innerHTML+=`</tr>`
        };








