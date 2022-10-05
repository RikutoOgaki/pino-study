// const showMs = () => {
//     const textbox = document.getElementById("inputms");
//     const inputValue = textbox.value;

//     //テキストボックスの値を使って、出力するメッセージを生成する
//     const output = "<a href='#'> 入力された内容は「" + inputValue + "」です。</a>";
//     //出力用のp要素にメッセージを表示
//     document.getElementById("outputms").innerHTML = output;
//   }
// const addest = () => {
//   const textbox = document.getElementById("text");
//   const output = textbox.value;

//   // const output = "<tbody><tr><td> '+moderu+' </td></tr></tbody>"
//   document.getElementsByTagName('td').innerHTML = output;
//   console.log(output);

// }
// console.log(document.querySelectorAll("td"));

// したいことのメモ
// ・クリックされたときの動作をできるようにする
// ・textboxに入力された内容がtdの中に入るようにする
// ・入力された内容を間違って入力されたら、clearできるようにする
// ・入力された内容を指定の場所に出力し、ランダムで並べる



const btn = document.getElementById("btn");
const textbox = document.getElementById("text");
btn.addEventListener('click', () => {
  const textbun = textbox.value;
  document.getElementsByTagName('td'[0]).innerHTML = textbun;
  console.log(textbun);
});
console.log(document.getElementsByTagName('<tbody>'));