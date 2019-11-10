"use strict";
let taskNum;
do {
    taskNum = parseInt(prompt('enter taskNum',''));
    if (taskNum < 0 || taskNum > 11 || isNaN(taskNum)){
        alert('incorrect number');
    }
}while (taskNum < 0 || taskNum > 11 || isNaN(taskNum));
alert(taskNum);
switch (taskNum){
    // task01
    case 1:{
        for (let i = 4;i <=400; i++){
            console.log(i);
        };
        break;
    }
    // task02
    case 2:{
        for (let i = 4; i < 14; i += 3) {
            console.log (i);  
        }
        break;
    }
    // task03
    case 3:{
        for (let i = 654; i>=0; i--){
            console.log(i);
        }
        break;
    }
    // task04
    case 4:{
        for (let year = 1983; year <= 2017; year++) {
            console.log(year);
            
        }
        break;
    }
    // task05
    case 5:{
        for (let i = -4; i <=100; i+= 2) {
            console.log(i);
        }
        break;
    }
    // task06
    case 6:{
        for (let i = 1; i < 10; i++) {
            console.log(i*7);
        }
        break;
    }
    // task07
    case 7:{
        for (let numb = 1000; numb < 2001; numb++) {
            console.log(`&#${numb}`);
        }
        break;
    }
    // task08
    case 8:{
        let summ = 0;
        for (let n = 0; n <=100; n++) {
            summ += n;  
        }
        console.log(summ);
        break;
    }
    // task09
    case 9:{
        let multy = 1;
        for (let n = 2; n <=50; n++) {
            multy *= n;  
        }
        console.log(multy);
        break;
    }
    // task10
    case 10:{
        const arrX=[];
        const lenArrX = parseInt(prompt('input array length',''));
        for (let i = 0; i < lenArrX; i++) {
            arrX[i]='x';
            for (let x=0; x<i;x++){
                arrX[i] +='x';
            }            
        }
        console.log(arrX);
        break;
    }

}