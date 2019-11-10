"use strict";
let taskNum;
do {
    taskNum = parseInt(prompt('enter taskNum',''));
    if (taskNum < 11 || taskNum > 19 || isNaN(taskNum)){
        alert('incorrect number');
    }
}while (taskNum < 11 || taskNum > 19 || isNaN(taskNum));
alert(taskNum);
switch (taskNum){
    // task11
    case 11:{
        const arrX=[];
        const lenArrX = parseInt(prompt('input array length',''));
        for (let i = 0; i < lenArrX; i++) {
            arrX[i]=`${i+1}`;
            for (let x=0; x<i;x++){
                arrX[i] +=`${i+1}`;
            }            
        }
        console.log(arrX);
        break;
    }
    // task12
    case 12:{
        const array=[1,3,5,9,12,13,35];
        const len = 10;
        let summ = 0, counter = 0;
        /* while (summ <= len){
            summ +=array[counter];
            counter++;} */
        for (let i = 0; i < array.length; i++) {
            summ += array[i];
            if(summ >= len){
                console.log(`Sum of ${i+1} element more or equally to 10`);
                break;
            }
        }   
        break;
    }
    // task13
    case 13:{
        const arr=[1,3,4,6,7,8];
        console.log(arr);
        for (let i = 0; i < arr.length/2; i++) {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }
        console.log(arr);
        break;
    }
    // task14
    case 14:{
        const numArray = [1, 3, 5, 13, -3, 7, 19], newArray=[];
        console.log(numArray);
        for (const index in numArray) {
            if (numArray[index]>0 && numArray[index]<10){
                newArray.push(numArray[index]);
            }
        }
        console.log(newArray);
        break;
    }
    // task15
    case 15:{
        const numArray = [1, 2, 3, 4, 5, 6, 10], evenArray=[];
        console.log(numArray);
        for (const i in numArray) {
            if (numArray[i]%2===0){
                evenArray.push(numArray[i]);
            }
        }
        console.log(evenArray);
        break;
    }
    // task16
    case 16:{
        const array = [1, 2, 3, 4, 5, 6];
        console.log(array);
        for (let i = 0; i < array.length; i+=2) {
            [array[i], array[i+1]] = [array[i+1], array[i]];
            
        }
        console.log(array);
        break;
    }
    // task17
    case 17:{
        const array = [1, 2, 3, 4, 5, 6];
        console.log(array);
        for (let i = 0; i < array.length/2; i+=2) {
            [array[i], array[array.length-2-i]] = [array[array.length-2-i], array[i]];
            [array[i+1],array[array.length-1-i]] = [array[array.length-1-i], array[i+1]];
        }
        console.log(array);
        break;
    }
    // task18
    case 18:{
        const array = [
            [1, 2, 3], 
            [4], 
            [5],
            [6,7]
        ];
        console.log(array);
        let summ = 0;
        for (const i in array) {
            for (const j in array[i]) {
                summ+=array[i][j];
            }
        }
        console.log(summ);
        break;
    }
    // task19
    case 19:{
        const [matrix1, matrix2, matrix3]= [ [], [], [] ];
        for (let i = 0; i < 10; i++) {
            matrix1[i]=[];
            for (let j = 0; j<10; j++){
                matrix1[i][j] = (i+1)*(j+1);
            }
        }
        console.log(matrix1);
        for (let i = 0; i < 10; i++) {
            matrix2[i]=[];
            for (let j = 0; j < 10; j++){
                matrix2[i][j] = 0;
                if (i === j){
                    matrix2[i][j] = 1;
                }else if ( i === 9-j ){
                    matrix2[i][j] = 2;
                }else if( i < j && i < 9-j ){
                    matrix2[i][j] = 3;
                }else if( i < j && i > 9-j ){
                    matrix2[i][j] = 4;
                }else if( i > j && i > 9-j ){
                    matrix2[i][j] = 5;
                }else if( i > j && i < 9-j ){
                    matrix2[i][j] = 6;
                }
            }
        }
        console.log(matrix2); 
        for (let i = 0; i < 10; i++) {
            matrix3[i]=[];
            for (let j = 0; j <= i; j++){
                if (j === 0 || j === i ) {
                    matrix3[i][j] = 1;
                }else{
                    matrix3[i][j] = matrix3[i-1][j-1] + matrix3[i-1][j];
                }
            }
        }
        console.log(matrix3); 
        break;
    }
}