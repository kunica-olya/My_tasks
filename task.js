let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

   while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?"); // мы будем показывать это сообщение "ваш бюджет на месяц"  
                                             //пока будут выполняться условия в цикле
                                            // пользователь введет не число - aaa , отправит пустую строку, и кликнет отмена
    console.log(money);
   }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
   optionalexpenses : {},
   income:[],
   savings:true,
   chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
            if ( (typeof (a)) === 'string' && (a != '' && b != '' && a.length < 50)) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
              i--
            }
        }
    },
     detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget/30).toFixed();  // toFixed - метод,преобразовывает значение
    // следует запомнить что , toFixed меняет нашу переменную, возвращает строковое значение!!!
    
    alert ("Бюджет на 1 день составляет: " + appData.moneyPerDay + " руб.");
   },
   detectLevel: function() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log("Это средний уровень достатка");
    } else if (appData.moneyPerDay > 2000){
        console.log("Это высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
   },
   checkSavings: function() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.mothIncome = save/100/12*percent; // рассчитываем прибыль за месяц
        alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
    }
   },
   chooseOptExpenses: function() {
    for (let i = 1; i < 3; i++){
        let questionOptExpenses = prompt("Cтатья необязательных расходов?");
        appData.optionalexpenses[i] = questionOptExpenses;
        console.log(appData.optionalexpenses);
    }
   },
   chooseIncome: function() {
       let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
       appData.income = items.split(', ');
       appData.income.push(prompt('Может что-то еще?'));
       appData.income.sort(); // отсортируем по алфавиту
   }
};






/*
// Используем цикл DO...WHILE
let i = 0;
do{
     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        i++;

         if ( (typeof (a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null 
        &&  a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
          console.log("bad result");
          i--
        }
        while(i < 2);
}
*/

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }










// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

