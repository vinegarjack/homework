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
    case 11:    
    {
        const date = new Date();
        const time = date.getHours();
        let message = 'Good';
        if (time >= 5 && time < 12) {
            message += ' morning';
        } else if (time >= 12 && time < 18) {
            message += ' afternoon';
        } else if (time >= 18 && time < 23) {
            message += ' evening';
        } else {
            message += ' night';
        }
        console.log(`${message}. What do you want? Chips, cigarettes, beer or vodka?`);
        const choise = prompt('Choise', '');
        if (choise === 'vodka') {
            const age = parseInt(prompt('What is your age?',''));
            if (age>=21) {
                console.log('Ok. price is $8');
            }else{
                console.log('You cant buy this');
            };
        }else if (choise ==='cigarettes' || choise ==='beer'){
            const age = parseInt(prompt('What is your age?',''));
            if (age>=18) {
                console.log('Ok. price is $2');
            }else{
                console.log('You cant buy this');
            }
        }else {
            console.log('Chips price is $1');
        };
        break;
    }  
// task12
    case 12:
    {
        const coffeeAll = ['americano','cappuccino','latte','cocoa'];
        const coffeePrice = [1.5, 2, 3, 4.75];
        let [change, money] = [0, 0];
        let buy = false;
        for (let i in coffeeAll) {
            console.log(`${coffeeAll[i]} price $${coffeePrice[i]}`);
        }
        const coffee = prompt('what kind of coffee will you? americano, cappuccino, latte, cocoa','');
        do {
            buy = false;
            money += parseFloat(prompt('input cash',''));
            if (coffee === coffeeAll[0] && money >coffeePrice[0] ){
                change = money - coffeePrice[0];
                console.log(`Take your ${coffee} and ${change}`);
            }else if (coffee === coffeeAll[0] && money === coffeePrice[0] ){
                console.log(`Take your ${coffee}`);
            }else if (coffee === coffeeAll[1] && money >coffeePrice[1] ){
                change = money - coffeePrice[1];
                console.log(`Take your ${coffee} and ${change}`);
            }else if (coffee === coffeeAll[1] && money === coffeePrice[1] ){
                console.log(`Take your ${coffee}`);
            }else if (coffee === coffeeAll[2] && money >coffeePrice[2] ){
                change = money - coffeePrice[2];
                console.log(`Take your ${coffee} and ${change}`);
            }else if (coffee === coffeeAll[2] && money === coffeePrice[2] ){
                console.log(`Take your ${coffee}`);
            }else if (coffee === coffeeAll[3] && money >coffeePrice[3] ){
                change = money - coffeePrice[3];
                console.log(`Take your ${coffee} and ${change}`);
            }else if (coffee === coffeeAll[3] && money === coffeePrice[3] ){
                console.log(`Take your ${coffee}`);
            }else {
                console.log('Not enought money to buy',` cash $${money}`);
                buy=true;
            }
        }while(buy);
    }
}
