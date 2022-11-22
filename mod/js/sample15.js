function test (num,text){
    console.log(num,text);
}
test(50,'test');

function text2 (num = 50){
    console.log(num);
}
text2(100);



const total = 1000;
function testTax(num){
    console.log(num);
    const result = num * 0.1;
    return result;
};
const tax = testTax(total);
console.log(total + "消費税は" + tax);