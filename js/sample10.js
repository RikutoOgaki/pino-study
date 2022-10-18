/*
誰が(要素・タグ)　　なにを(要素の持つプロパティ)　　する(実行・変更)
p要素のid名txtの文字情報を持つプロパティに「テキスト」を追加したい。
<p id="txt"></p>
document.getElementById("txt").innerText
*/


const kak = document.getElementById("tet");
const lal = document.getElementById("txt");
document.getElementById("btn").addEventListener('click' ,() => {
    console.log("クリックした");
    // document.getElementById("txt").innerText = kak;
    // Number(kak);
    if(kak.value>=0&&kak.value<=6){
        lal.innerText = "子供ですね";
    }
    else if(kak.value>=7&&kak.value<=12){
        lal.innerText = "小学生ですね";
    }
    else if(kak.value>=13&&kak.value<=18){
        lal.innerText = "中高生ですね";
    }
    else if(kak.value==20){
        lal.innerText = "成人してますね";
    }
    else if(kak.value ==100){
        lal.innerText = "長生きですね";
    }
    else if(kak.value<0){
        lal.innerText = "生まれてないですね"
    }
    else if(kak.value>=130){
        lal.innerText = "長生きしすぎです"
    }
    // else if(kak.value){
    //     lal.innerText = "何歳ですか？"
    // }

    // 7~12 小学生
    // 13~18 中高生ですね
    // ２０ 成人シてますね
    // ２１〜９９ 大人ですね
    // １００ 長生きですね
    // ０より小さい １３０以上 そんなもんない
});


