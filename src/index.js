/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
         if(!arr.length == 0 || Array.isArray(arr)){
            console.log('good');
         } else{
            throw new Error();
         }
 - fn не является функцией (с текстом "fn is not a function")
         if( typeof(f) == 'function'){
            console.log("it's a function");
         } else{
            throw new Error();
         }
 Зарпещено использовать встроенные методы для работы с массивами
 */

/* - нужно выполнить переданную функцию для всех элементов массива
     и вернуть только если для всеъ элементов массивы фукнция вернула true;
   - если хотя бы для одного элемента вернулось false, значит надо вернуть false
*/

function isAllTrue(array, fn) {

    if (!Array.isArray(array) || array.length == 0) {
        throw new Error('empty array');
    }

    if (typeof(fn) !== 'function') {
        throw new Error('fn is not a function');
    }

    for (let i = 0; i < array.length; i++) {

        if (!fn(array[i])) {
            return false;
        }
    }

    return true;
}

/* Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array");
 - fn не является функцией (с текстом "fn is not a function");
 Зарпещено использовать встроенные методы для работы с массивами */
function isSomeTrue(array, fn) {

    if (!Array.isArray(array) || array.length == 0) {
        throw new Error('empty array');
    }

    if (typeof(fn) !== 'function') {
        throw new Error('fn is not a function');
    }

    for (let i = 0; i < array.length; i++) {

        if (fn(array[i])) {

            return true;
        }
    }

    return false;
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn, ...args) {

    if (typeof(fn) !== 'function') {
        throw new Error('fn is not a function');
    }

    let argsArr = [];

    for (let i = 0; i < args.length; i++) {

        try {
            fn(args[i]);
        } catch (e) {
            argsArr.push(args[i]);
        }
    }

    return argsArr;
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number=0, ...args) {
    if (typeof(number) !== 'number') {
        throw new Error('number is not a number');
    }

    let obj = {
        sum: function(...args) {
            let result = number;

            for (let i = 0; i < args.length; i++) {
                result += args[i];
            }

            return result;
        },
        dif: function (...args) {
            let result = number;

            for (let i = 0; i < args.length; i++) {
                result -= args[i];
            }

            return result;
        },
        div: function(...args) {
            let result = number;

            for (let i = 0; i < args.length; i++) {
                if (args[i] == 0) {
                    throw new Error('division by 0');
                }
                result = result/args[i];
            }

            return result;
        },
        mul: function (...args) {
            let result = number;

            for (let i = 0; i < args.length; i++) {
                result *= args[i];
            }

            return result;
        }
    };

    return obj;
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
