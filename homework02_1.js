"use strict";
let taskNum;
do {
    taskNum = parseInt(prompt('enter taskNum',''));
    if (taskNum < 0 || taskNum > 12 || isNaN(taskNum)){
        alert('incorrect number');
    }
}while (taskNum < 0 || taskNum > 12 || isNaN(taskNum));
alert(taskNum);
switch (taskNum){
// task01
case 1:
    {
    const a = parseFloat(prompt('enter a',''));
    const b = parseFloat(prompt('enter b',''));
    let x=400;
    if ( a > b ) {
        x = a + b / 2*4;
    } else if ( a < b ){
        x = a - b + 2 / b * 4;
    }
    console.log(x);
    break;
    }   
// task02
case 2:
    //task02_01
    {
    const x = parseFloat(prompt('enter x',''));
    const y = parseFloat(prompt('enter y',''));
    //y=0, x+y-4=0, -x+y-4 = 0
    if( y >= 0  && x+y-4<=0 && -x+y-4<=0 ){ //вписать уравнение прямой, а не условия
        alert('Точка попадает в область');
    }else{
        alert('Точка НЕ попадает в область');
    }
    // task02_02
    //y<=1 , x-y<=0, -x+y<=0// задать вопрос почему модуль не подходит, и что значит через уравнение линии?
    if (Math.abs(y) <= 1 && Math.abs(x)-Math.abs(y) <=0 && Math.abs(y)-Math.abs(x)>=0 ){
        alert('Точка попадает в область');
    }else{
        alert('Точка НЕ попадает в область');
    }
    //task02_03
    if (( x**2 +y**2 - 1 <= 0) || (x + y + 2 >= 0 && x<=0 && y<=0)){
        alert('Точка попадает в область');
    }else{
        alert('Точка НЕ попадает в область');
    };
    break;
    }
// task03
case 3:
    {
    const day = parseInt (prompt('Number of day',''));
    let isWork = 'workday';
    switch (day){
    case 1:
        alert(`Monday ${isWork}`);
        break;
    case 2:
        alert(`Tuesday ${isWork}`);
        break;
    case 3:
        alert(`Wednesday ${isWork}`);
        break;
    case 4:
        alert(`Thursday ${isWork}`);
        break;
    case 5:
        alert(`Friday ${isWork}`);
        break;
    case 6:
        isWork = 'weekend';
        alert(`Saturday ${isWork}`);
        break;
    case 7:
        isWork = 'weekend';
        alert(`Sunday ${isWork}`);  
        break;  
    default:
        alert('Такого дня недели не существует!') ; 
    };
    break;
    }
// task04
case 4:
    {
    const a = parseFloat(prompt('enter a',''));
    const b = parseFloat(prompt('enter b',''));
    if (a > b){
        alert ('a is greater');
    }else{
        alert ('b is greater');
    };
    break;
    }
// task05
case 5:
    {
    const a = parseFloat(prompt('enter a',''));
    const b = parseFloat(prompt('enter b',''));
    if (a > b){
        alert ('a is greater');
    }else if (a < b){
        alert ('b is greater');
    } else {
        alert ('a = b');
    };
    break;
    }
// task06
case 6:
    {
    const appartment = parseInt(prompt('enter appartment',''));
    if (appartment >= 1 && appartment <= 20 ) {
        alert('first door');
    }else if (appartment >= 21 && appartment <= 48 ){
        alert('second door');
    }else if (appartment >= 49 && appartment <= 90 ){
        alert('third door');
    }else {
        alert("wrong appartment number");
    };
    break;
    }
// task07
case 7:
    {
        const name = prompt('name','');
        const pass = prompt('password','');
        if ((name ==='ivan' && pass === '334455') || (name==='alex'&& pass === '777')||
            (name ==='petr' && pass === 'b5678')){
                alert('Добро пожаловать');
            }else {
                alert('Ошибка входа');
            };
        break;
    }
// task08
case 8:
    {
        const age = parseInt(prompt('enter your age',''));
        let message = '';
        if (age>=16){
            message = `Вам ${age}, добро пожаловать`;
        }else{
            message = `Вам ${age}, вход воспрещен`;
        }
        alert(message);
        break;
    }
// task09
case 9:
    {
        const experience = parseInt(prompt('enter you experience',''))
        if (experience >= 20){
            alert('Надбавка 25%');
        }else if (experience >= 10){
            alert('Надбавка 20%');
        }else if (experience >= 3){
            alert('Надбавка 10%');
        }else {
            alert('Надбавка 0%');
        };
        break;
    }
// task10
case 10:
    {
        let text = 'товар';
        let suffix = '';
        const quantity = parseInt(prompt('enter quantity',''));
        if (quantity >=2 && quantity<=4){
            suffix = 'а';
        }else if (quantity >=5){
            suffix = 'ов';
        }
        alert(`${quantity} ${text}${suffix}`);
        break;
    } 
}
