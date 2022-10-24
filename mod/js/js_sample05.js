// let testArry = [0,1,2,3];
// console.log(testArry);
// 配列testArryの要素数
// console.log(testArry.length);

// for(let i=0; i<testArry.length; i++){
//     console.log(`testArryの中身は`,testArry[i]);
// }

const tbl = document.querySelector('#tbl tbody');
console.log(tbl);

let multArray = [];
for(let i=0; i<9; i++){
    let ele = `<tr>`;
    multArray[i+1] = i+1;
    for(let j=0; j<9; j++){
        // console.log(`${i+1}×${j+1}は`,(i+1)*(j+1));
        ele += `<td>${(i+1)*(j+1)}</td>`;
    }
    ele += `</tr>`;
    // trのi行目の中身を入れる
    tbl.innerHTML += ele;
}
console.log(multArray);