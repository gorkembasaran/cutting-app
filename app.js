let input1 = document.getElementById('input1').value;
let input2 = document.getElementById('input2').value;
let input3 = document.getElementById('input3').value;
let input4 = document.getElementById('input4').value;
let input5 = document.getElementById('input5').value;
let input6 = document.getElementById('input6').value;
let output1 = input1;
let output2 = input5/input1;
let output3 = input2;
let output4 = input6/input2;
let output5 =  75/input1
let output6 = input3;
let output7 = input4-(input4%10);
let output9 = (60*input4)/(2*Math.PI);
let output10 = (input3*output9*8)-((input3*output9*8)%100)
let output11 = (output2*output4*output10)/1000
function inputReload() {
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;
    input3 = document.getElementById('input3').value;
    input4 = document.getElementById('input4').value;
    input5 = document.getElementById('input5').value;
    input6 = document.getElementById('input6').value;
    output1 = input1;
    output2 = input5/input1;
    output3 = input2;
    output4 = input6/input2;
    output5 =  75/input1
    output6 = input3;
    output7 = input4-(input4%10);
    output9 = (60*input4)/(2*Math.PI);
    output10 = (input3*output9*8)-((input3*output9*8)%100);
    output11 = (output2*output4*output10)/1000;
}
outputReload();

function outputReload () {
    document.querySelector('.result-1').innerHTML = output1;
    document.querySelector('.result-2').innerHTML = output2.toFixed(2) + ' ' + 'mm';
    document.querySelector('.result-3').innerHTML = output3;
    document.querySelector('.result-4').innerHTML = output4.toFixed(2) + ' ' + 'mm';
    document.querySelector('.result-5').innerHTML = output5.toFixed(2)+ ' ' + '%';
    document.querySelector('.result-6').innerHTML = output6 + ' ' + 'mm/tooth';
    document.querySelector('.result-7').innerHTML = output7 + ' ' + 'm/min';
    document.querySelector('.result-9').innerHTML = output9.toFixed(0)+ ' ' + 'rev/min';
    document.querySelector('.result-10').innerHTML = output10+ ' ' + 'mm/min';
    document.querySelector('.result-11').innerHTML = output11 + ' ' + 'cm3/min';
}
document.querySelector(".button-calculate").addEventListener("click",function(){
    alertControl()
})
document.querySelector(".button-reset").addEventListener("click",function(){
    window.location.reload()
})
function alertControl() {
    if(((document.getElementById('input1').value%1)===0)&&((document.getElementById('input2').value%1)===0)){
        inputReload()
        outputReload()
    }else{
        alert("Koşullara uymayan değer girdiniz!")
    }
}