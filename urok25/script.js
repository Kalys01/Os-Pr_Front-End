// 25 урок.
function Input(){
    i = 1;
    c = 0;
    while (i < 6) {
        login_ok = false;
        user_name = "";
        password = "";
        user_name = prompt("Логин","");
        user_name = user_name.toLowerCase();
        password = prompt("Пароль","");
        
        if (user_name == "admin" && password == "123") {
            login_ok = true;
            console.clear();
            console.log("Welcome, admin");
            break;
        }
        if (login_ok == false) {
            c = c + 1;
            console.clear();
            console.log("You are login or password is wrong " + c);
            if (c == 3) {
                console.clear();
                console.log("You are login or password is wrong! Please reload the page.");
                break;
            }
        }
        i++;
    }
}
Input();


var arr = [];
// 4ое задание
arr = [1, 2, 3];
console.log(arr.reverse());

// 5ое задание
arr = ['a', 'b', 'c'];
arr.push(1,2,3);
console.log(arr);


// 6ое задание
arr = [1, 2, 3, 4, 5];
console.log(arr[0], arr[arr.length - 2], arr[arr.length - 1]);

// 7ое задание
arr = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



let car = {
    human: {
        man: 'Акыл',
        woman: 'Асыл'
    },
    open: 'Закрыть',
    go:  'езжать'
}

console.log(car.human.man); // это выводит Акыл

console.log(car?.human?.woman); // это выводит Асыл.
// "?" знак это как бы, не даст ошибку даже если вызвать "woman" не правильным путем. НАПРИМЕР:
console.log(car?.errorsdfdf?.dkfj?.woman); // это выводит undefined а не ошибку.


let out = document.getElementById('out');
let tmp = 0;
let n = 10;
console.log(`${tmp = n%2 == 0 ? (n / 2) * n + (n/2) : Math.ceil(n / 2) * n} вывод суммы чисел от нуля до n`); // Выводит сумму от нуля до n чисел  // Моя формула =).

// Второй вариан выводит суммы чисел от нуля до n. Через цикл.
tmp = 0; // tmp обнуляем. Иначе выводит удвоенную сумму.
for (let i = 0; i <= n; i++)
    tmp = tmp + i;
out.innerHTML = tmp;
