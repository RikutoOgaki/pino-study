/*
drill04 - 消費税の出力
#priceに金額を入力し、消費税込みの値段を#resultに出力すること
以下の条件の場合は、該当する出力を表示すること。

[出力時の表示] ※1000と入力した場合
1000円の税込み価格は1100円です。

[出力時の表示] ※文字を入力した場合
数値を入力してください -> errクラスを追加し赤字表示にする

[出力時の表示] ※マイナスの値を入力した場合
有効な数値を入力してください -> errクラスを追加し赤字表示にする

複数回テストを行い、エラーでない場合は文字が黒色になるように設定すること。

*/

const result = document.getElementById("result");
const price = document.getElementById("price");
const btn = document.getElementsByTagName("input");
console.log(result);

btn[1].addEventListener('click', ()=>{
    let flg = Math.sign(price.value);
    console.log(Math.sign(price.value));
    console.log(price.value);

    if(flg == 1){
        result.innerText = price.value + "の税込価格は"+ (Number(price.value) + Number(price.value*0.1)) + "です";
    }
    else if(isNaN(price.value)){
        result.classList.add("err");
        result.innerText = "数値を入力してください";
    }
    else{
        result.classList.add("err");
        result.innerText = "有効な数値を代入してください"
    }
});

